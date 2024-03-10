import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import CorporateInformationInnerPdf2 from "./CorporateInformationInnerPdf2";
import CorporateInformationInnerPdf from "./CorporateInformationInnerPdf";
import CorporateInformationInnerPdf1 from "./CorporateInformationInnerPdf1";
import axios from "axios";


const section = [
  {
    id: 1,
    name:"abc",
    designation: "Executive Directors",
    createdAt: "2024-01-31T09:41:07.000Z",
    updatedAt: "2024-01-31T09:41:07.000Z",
    categoryID: 1,
  },
  {
    id: 2,
    name:"abc",
    designation: "Non- Executive Directors",
    createdAt: "2024-01-31T10:13:44.000Z",
    updatedAt: "2024-01-31T10:13:44.000Z",
    categoryID: 1,
  },
  {
    id: 3,
    name:"abc",
    designation: " GENERAL MANAGER",
    createdAt: "2024-01-31T10:13:49.000Z",
    updatedAt: "2024-01-31T10:13:49.000Z",
    categoryID: 1,
  },
];

const section1 = [
  {
    id: 1,
    name:"Audit Committee",
    createdAt: "2024-01-31T09:41:07.000Z",
    updatedAt: "2024-01-31T09:41:07.000Z",
    categoryID: 1,
  },
  {
    id: 2,
    name:"Stakeholders Relationship Committee:",
    createdAt: "2024-01-31T10:13:44.000Z",
    updatedAt: "2024-01-31T10:13:44.000Z",
    categoryID: 1,
  },
  {
    id: 3,
    name:"Nomination and Remuneration Committee",
    createdAt: "2024-01-31T10:13:49.000Z",
    updatedAt: "2024-01-31T10:13:49.000Z",
    categoryID: 1,
  },
];




const CorporateInformationInner = () => {
  const [isOpen, setOpen] = useState(false);
  const [data,setData]=useState([]);
  const domain = process.env.REACT_APP_API_DOMAIN;

  
  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/corporateInformation`);
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
      <div className="service-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="service-details-wrap">
              <h2>Corporate Information</h2>
              <div className="row">
                
                <div className="col-lg-12 align-self-center">
                  <h6 className="subtitle CorporateInformation">
                    BOARD OF DIRECTORS
                  </h6>
                  {data&&data.map((item) => (
                  <div className="service-details-wrap" key={item.id}>
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                         {item.position}
                        </h4>
                        <CorporateInformationInnerPdf description={item.description}/>
                       
                      </div>
                    </div>
                  </div>))}
                </div>
                <div className="col-lg-12 align-self-center">
                  <h6 className="subtitle CorporateInformation">
                  COMMITTEES OF BOARD
                  </h6>
                  {section1.map((item) => (
                  <div className="service-details-wrap" key={item.id}>
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                      <h6 className="CorporateInformation2 "> {item.name} </h6>
                       <CorporateInformationInnerPdf1 id={item.id}/>
                      </div>
                    </div>
                  </div> ))}
                </div>
                <div className="col-lg-12 align-self-center">
                  <h6 className="subtitle CorporateInformation3">
                  CREDIT RATING INFORMATION
                  </h6>
                      <CorporateInformationInnerPdf2/>
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

export default CorporateInformationInner;
