import axios from "axios";
import { useEffect, useState } from "react";

const CompositionInner = ({id}) => {
  const [data,setData]=useState([]);
  const domain = process.env.REACT_APP_API_DOMAIN;

    const data2 = [
      {
        id: 1,
        name: " Mr. Sunil Kumar Jain (Chairman)",
        eventID: 1,
      },
      {
        id: 2,
        name: "Mr. Utsav Jain (Member)",
        eventID: 1,
      },
      {
        id: 3,
        name: "Mr. Shyam Lal Yadav (Executive Member)",
        eventID: 1,
      },
      {
        id: 4,
        name: "Mr. Vinod Nair (Executive Member)",
        eventID: 1,
      },
    ];

    useEffect(() => {
      // Function to fetch data
      const fetchData = async () => {
        try {
          const response = await axios.get(`${domain}/csr`);
          setData(response.data); // Set the fetched data into state
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      // Call the fetch data function
      fetchData();
    }, []); // Empty dependency array to ensure this effect runs only once
  
    return (
      <div className='row'>
      <div className='col-lg-12 align-self-center list-Investors'>
        <ul className=' list-inner-wrap list-Investors1' >
        {data&&data.map((item) => (
          <li>
          {item.name}{" "}
          </li>
            ))}
        </ul>
      </div>
    </div>
    );
  };
  
  export default CompositionInner;
  