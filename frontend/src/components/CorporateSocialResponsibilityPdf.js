import axios from "axios";
import { useEffect, useState } from "react";

const CorporateSocialResponsibilityPdf = ({id}) => {

    const [data,setData]=useState([]);
    const domain = process.env.REACT_APP_API_DOMAIN;

    useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
        try {
          const response = await axios.get(`${domain}/csrpdf`);
          setData(response.data); // Set the fetched data into state
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      // Call the fetch data function
      fetchData();
    }, []); 
    return (
      <div className="tagcloud">
        {data&&data.map((item) => (
          <a
            key={item.id}
            href={`${domain}/csrpdf/${item.pdfFileName}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        ))}
      </div>
    );
  };
  
  export default CorporateSocialResponsibilityPdf;
  