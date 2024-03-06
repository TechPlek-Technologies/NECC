import React, {  useEffect,useState } from "react";
import ModalVideo from "react-modal-video";
import InvestorsInnerPdf from "./InvestorsInnerPdf";
import axios from "axios";


const InvestorsInner= () => {
  const [isOpen, setOpen] = useState(false);

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
      {/* Investors area start */} 
      <div className='service-area pd-bottom-45'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'></div>
      <div className='service-details-wrap'>
                <h2 className="list-Investors">INVESTORS</h2>
                <div className='row'>
                  <div className='col-lg-12 align-self-center list-Investors'>
                    <h6 className='subtitle' style={{marginTop:"0px"}}>Disclosures under Regulation 46 of SEBI (LODR) Regulations,2015</h6>
                    <InvestorsInnerPdf/>
                  </div>
                </div>
              </div>
      {/* Investors area end */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
       />
       </div>
       </div>
       </div>
       
    </>
  );
};

export default InvestorsInner;

