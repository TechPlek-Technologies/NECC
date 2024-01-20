import React, { useState } from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaPlay,
  FaRegEnvelope,
  FaRegFileAlt,
  FaRegFilePdf,
  FaSearch,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const InvestorsInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Investors area start */}
      <div className='service-details-wrap'>
                <h2>INVESTORS</h2>
                <div className='row'>
                  <div className='col-lg-12 align-self-center'>
                    <h6 className='subtitle'>Disclosures under Regulation 46 of SEBI (LODR) Regulations,2015</h6>
                    <ul className='list-inner-wrap list-Investors'>
                      <li> Customer engagement matters</li>
                      <li> The Love Boat promis someg for Plan</li>
                      <li> Research beyond the business plan</li>
                      <li> Logistics ground in Asia Pacific</li>
                      <li> Logistics ground in South America</li>
                      <li> Transportation across Europe</li>
                    </ul>
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
    </>
  );
};

export default InvestorsInner;

