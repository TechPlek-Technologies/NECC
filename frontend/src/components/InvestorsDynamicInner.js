import React, { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";

import { useParams } from "react-router-dom";
import axios from "axios";
import InvestorsDynamicInnverPdf from "./InvestorsDynamicInnverPdf";


function capitalizeEachWord(inputString) {
    // Split the string into an array of words
    let words = inputString.split(" ");

    // Iterate through each word in the array
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toUpperCase();
    }

    // Join the words back into a single string
    let capitalizedString = words.join(" ");

    return capitalizedString;
}


  
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


  

const InvestorsDynamicInner = () => {
  const domain = process.env.REACT_APP_API_DOMAIN;

  const [isOpen, setOpen] = useState(false);
  let { pagename,id } = useParams();
  const [section,setSection]=useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/events/page/${id}`);
        setSection(response.data); // Set the fetched data into state
        console.log(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);
  return (
    <>
      {/* Investors area start */}
      <div className="blog-details-area pd-top-130 pd-bottom-45">
        <div className="container">
          <div className="row justify-content-center">
              <h2 className="title">{capitalizeEachWord(pagename.replace("-"," "))}</h2>
              
                
                <div className="col-lg-12">
                  <div className="sidebar-area">

                  {section.map((item) => (
                  <div className="widget widget_tags" key={item.id}>
                    
                        <h4 className="widget-title">
                         {capitalizeEachWord(item.name)}
                         <span className="dot" />
                        </h4>
                        <InvestorsDynamicInnverPdf id={item.id}/>
                       
                      </div>
                   ))}
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

export default InvestorsDynamicInner;
