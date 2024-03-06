import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CurrentOpeningInnerPdf from "./CurrentOpeningInnerPdf";

const section = [
  {
    id: 1,
    name: "1",
    createdAt: "2024-01-31T09:41:07.000Z",
    updatedAt: "2024-01-31T09:41:07.000Z",
    categoryID: 1,
  },
  {
    id: 2,
    name: "2",
    createdAt: "2024-01-31T10:13:44.000Z",
    updatedAt: "2024-01-31T10:13:44.000Z",
    categoryID: 1,
  },
];

const CurrentOpeningInner = () => {

  const domain = process.env.REACT_APP_API_DOMAIN;
  const [key, setKey] = useState(0);
  const [data,setData]=useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Function to fetch data
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/content`);
        setData(response.data); // Set the fetched data into state
        console.log(response.data); // Set the fetched data into state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [key]); // Empty dependency array to ensure this effect runs only once


  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-130 pd-bottom-60'>
        <div className='container'>
          <div class="heading text-center mb-50">
              <h2 class="heading__title">CURRENT OPENINGS</h2>
          </div>
          {section.map((item) => (
          <div className='row'>
                  <CurrentOpeningInnerPdf id={item.id}/>
            </div> ))}
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default CurrentOpeningInner;
