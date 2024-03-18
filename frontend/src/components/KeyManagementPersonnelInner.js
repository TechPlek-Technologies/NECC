import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import PresidentComponent from "./KeyManagementPersonnelInnerPdf";
import axios from "axios";

  const section = [
    {
      id: 1,
      designation: "VICE PRESIDENT",
      createdAt: "2024-01-31T09:41:07.000Z",
      updatedAt: "2024-01-31T09:41:07.000Z",
      categoryID: 1,
    },
    {
      id: 2,
      designation: " ASSISTANT VICE PRESIDENT",
      createdAt: "2024-01-31T10:13:44.000Z",
      updatedAt: "2024-01-31T10:13:44.000Z",
      categoryID: 1,
    },
    {
      id: 3,
      designation: " GENERAL MANAGER",
      createdAt: "2024-01-31T10:13:49.000Z",
      updatedAt: "2024-01-31T10:13:49.000Z",
      categoryID: 1,
    },
  ];

const KeyManagementPersonnelInner = () => {
  const [isOpen, setOpen] = useState(false);
  const [data,setData]=useState([]);
  const domain = process.env.REACT_APP_API_DOMAIN;

  
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/keyPersonnel`);
        setData(response.data); // Set the fetched data into state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    // Call the fetch data function
    fetchData();
  }, []); // Empty dependency array to ensure this effect runs only once

  
  return (
    <>
      {/* Investors area start */}
      <div className="service-area pd-top-120 pd-bottom-45">
        <div className="container">
          <div className="row justify-content-center">
            <div className="service-details-wrap1">
              <h2>KEY MANAGEMENT PERSONNEL</h2>
              <div className="row">
                <div className="col-lg-12 align-self-center">
                {data&&data.map((item) => (
                  <div className="service-details-wrap" key={item.id}>
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        {item.position}
                        </h4>
                        <PresidentComponent description={item.description}/>
                      </div>
                    </div>
                  </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Investors area end */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="XM6kTQPzzpQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default KeyManagementPersonnelInner;
