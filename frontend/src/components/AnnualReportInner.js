import React, {  useEffect,useState } from "react";
import AnnualReportInnerPdf from "./AnnualReportInnerPdf";
import axios from "axios";

const section = [
   {
     id: 1,
     name: "12345",
     createdAt: "2024-01-31T09:41:07.000Z",
     updatedAt: "2024-01-31T09:41:07.000Z",
     categoryID: 1,
   },
   {
     id: 2,
     name: "1234",
     createdAt: "2024-01-31T10:13:44.000Z",
     updatedAt: "2024-01-31T10:13:44.000Z",
     categoryID: 1,
   },
   {
     id: 3,
     name: "123456",
     createdAt: "2024-01-31T10:13:49.000Z",
     updatedAt: "2024-01-31T10:13:49.000Z",
     categoryID: 1,
   },
 ];

const AnnualReportInner = () => {


  const [tabs, setTabs] = useState([]);
  const [isEditOpen, setEditOpen] = useState(false);
  const [category, setCategory] = useState('');
  const [key, setKey] = useState(0);
  const domain = process.env.REACT_APP_API_DOMAIN;


  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/categories`);
        setTabs(response.data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [key]); // Empty dependency array to ensure this effect runs only once

   
  return (
    <>
      {/* blog-details area start */}
      <div className="blog-details-area pd-top-130 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="title">ANNUAL REPORT & NOTICE OF AGM</h2>

            <div className="col-lg-12">
              <div className="sidebar-area">
                {section.map((item) => (
                  <div className="widget widget_tags" key={item.id}>
                    <h4 className="widget-title">
                      {item.name}
                      <span className="dot" />
                    </h4>
                    <AnnualReportInnerPdf id={item.id}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog-details area end */}
    </>
  );
};

export default AnnualReportInner;
