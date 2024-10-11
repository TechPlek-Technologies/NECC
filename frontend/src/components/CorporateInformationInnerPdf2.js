import axios from "axios";
import { useEffect, useState } from "react";
import {
    FaRegFilePdf,
  } from "react-icons/fa";
const CorporateInformationInnerPdf2 = ({id}) => {
    const vicePresident = [
      {
            serial: 1,
            name: "Rating Letter- India Ratings & Research Private Limited",
            designation: "123123",
            pdfFileName: "e-del-Request-format.pdf",
            pdfFilePath: "./uploads/e-del-Request-format.pdf",
        
      },
      {
        
            serial: 2,
            name: "Rating Letter Revised",
            designation: "123123",
            pageID: 2,
            pdfFileName: "e-del-Request-format.pdf",
            pdfFilePath: "./uploads/e-del-Request-format.pdf",
        
      },
    ];
    const [data,setData]=useState([]);
    const domain = process.env.REACT_APP_API_DOMAIN;

    useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
        try {
          const response = await axios.get(`${domain}/cipdf`);
        console.log("response.data", response.data);
          const fetchedData=response.data
          fetchedData.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
          setData(fetchedData); // Set the fetched data into state
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      // Call the fetch data function
      fetchData();
    }, []); // Empty dependency array to ensure this effect runs only once
  
      return (
        data&&data.map((item) => (
            <ul className='list-Corporate1' id={item.id} >
                <li> 
                      <a href={`${domain}/pdf/${item.pdfFileName}`}>
                        <FaRegFilePdf className='list-Investors2' />{item.name}
                      </a>
                      </li>
         
          </ul> ))
      );
    };

    export default CorporateInformationInnerPdf2;