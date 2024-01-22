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
      <div className='service-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'></div>
      <div className='service-details-wrap'>
                <h2 className="list-Investors">INVESTORS</h2>
                <div className='row'>
                  <div className='col-lg-12 align-self-center list-Investors'>
                    <h6 className='subtitle'>Disclosures under Regulation 46 of SEBI (LODR) Regulations,2015</h6>
                    <ul className=' list-inner-wrap list-Investors1' >
                      <li> <Link to='/CorporateInformation'>
                        CORPORATE INFORMATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                  
                         BUSINESS DETAIL{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        BOARDS OF DIRECTORS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                         TERMS AND CONDITIONS OF APPOINTMENT OF INDEPENDENT DIRECTORS{" "}
                      </Link></li>

                      <li> <Link to='#'>
                       
                         COMPOSITION OF VARIOUS COMMITTEES OF BOARD OF DIRECTORS {" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                         CREDIT RATING{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        THE EMAIL ADDRESS FOR GRIEVANCE REDRESSAL AND OTHER RELEVANT DETAILS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        CONTACT INFORMATION OF THE DESIGNATED OFFICIALS WHO ARE RESPONSIBLE FOR ASSISTING AND HANDLING INVESTOR GRIEVANCES{" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                        CODE OF CONDUCT OF BOARD OF DIRECTORS AND SENIOR MANAGEMENT PERSONNEL{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        VIGIL MECHANISM POLICY{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        CRITERIA OF MAKING PAYMENTS TO NON-EXECUTIVE DIRECTORS , IF THE SAME HAS NOT BEEN DISCLOSED IN ANNUAL REPORT{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        POLICY ON DEALING WITH RELATED PARTY TRANSACTIONS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                        POLICY FOR DETERMINING 'MATERIAL' SUBSIDIARIES{" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                        DETAILS OF FAMILIARIZATION PROGRAMMES IMPARTED TO INDEPENDENT DIRECTORS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                        POLICY FOR DETERMINATION OF MATERIALITY OF EVENTS/ INFORMATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        CONTACT DETAILS OF KEY MANAGERIAL PERSONNEL AUTHORIZED FOR DETERMINING MATERIALITY OF AN EVENT/ INFORMATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        LISTING INFORMATION {" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        QUARTERLY COMPLIANCES {" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                        FINANCIALS {" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        NOTICE OF BOARD MEETING{" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                        FINANCIAL RESULTS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        SHAREHOLDING PATTERN{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        NEWSPAPER PUBLICATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        DISCLOSURE FOR RELATED PARTY TRANSACTIONS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                        ANNUAL RETURN{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        SECRETARIAL COMPLIANCE REPORT{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        CORPORATE GOVERNANCE {" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                        INVESTOR FEEDBACK {" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        ANNUAL REPORT & NOTICE OF AGM{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        
                        POLICY{" "}
                      </Link></li>
                      <li> <Link to='#'>
                       
                        RIGHT ISSUES{" "}
                      </Link></li>
                      <li> 
                       
                        Details of agreements entered into with the media companies and/or their associates, etc. (Not Applicable){" "}
                      </li>
                      <li> 
                       
                        Schedule of analyst or institutional investor meet and presentations made by the listed entity to analysts or institutional investors. (No){" "}
                      </li>
                      <li> 
                        
                        New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change. (No){" "}
                      </li>
                      <li> 
                        
                        Financials of Foreign Subsidiaries. (Not Applicable){" "}
                      </li>
                      <li> 
                        
                        Dividend Distribution Policy. (Not Applicable){" "}
                      </li>
                      <li> 
                       
                        Statement of deviation(s) or variation (s) as specified in regulation 32 of SEBI (LODR) Regulation. (Not Applicable){" "}
                      </li> 
                      
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
       </div>
       </div>
       </div>
       
    </>
  );
};

export default InvestorsInner;

