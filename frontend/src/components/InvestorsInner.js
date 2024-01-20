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
                <h2 className='list-Investors'>INVESTORS</h2>
                <div className='row'>
                  <div className='col-lg-12 align-self-center'>
                    <h6 className='subtitle list-Investors'>Disclosures under Regulation 46 of SEBI (LODR) Regulations,2015</h6>
                    <ul className='list-Investors1' >
                      <li> <Link to='/CorporateInformation'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        CORPORATE INFORMATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                         BUSINESS DETAIL{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        BOARDS OF DIRECTORS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                         TERMS AND CONDITIONS OF APPOINTMENT OF INDEPENDENT DIRECTORS{" "}
                      </Link></li>

                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                         COMPOSITION OF VARIOUS COMMITTEES OF BOARD OF DIRECTORS {" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                         CREDIT RATING{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        THE EMAIL ADDRESS FOR GRIEVANCE REDRESSAL AND OTHER RELEVANT DETAILS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        CONTACT INFORMATION OF THE DESIGNATED OFFICIALS WHO ARE RESPONSIBLE FOR ASSISTING AND HANDLING INVESTOR GRIEVANCES{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        CODE OF CONDUCT OF BOARD OF DIRECTORS AND SENIOR MANAGEMENT PERSONNEL{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        VIGIL MECHANISM POLICY{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        CRITERIA OF MAKING PAYMENTS TO NON-EXECUTIVE DIRECTORS , IF THE SAME HAS NOT BEEN DISCLOSED IN ANNUAL REPORT{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        POLICY ON DEALING WITH RELATED PARTY TRANSACTIONS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        POLICY FOR DETERMINING 'MATERIAL' SUBSIDIARIES{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        DETAILS OF FAMILIARIZATION PROGRAMMES IMPARTED TO INDEPENDENT DIRECTORS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        POLICY FOR DETERMINATION OF MATERIALITY OF EVENTS/ INFORMATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        CONTACT DETAILS OF KEY MANAGERIAL PERSONNEL AUTHORIZED FOR DETERMINING MATERIALITY OF AN EVENT/ INFORMATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        LISTING INFORMATION {" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        QUARTERLY COMPLIANCES {" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        FINANCIALS {" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        NOTICE OF BOARD MEETING{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        FINANCIAL RESULTS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        SHAREHOLDING PATTERN{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        NEWSPAPER PUBLICATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        DISCLOSURE FOR RELATED PARTY TRANSACTIONS{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        ANNUAL RETURN{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        SECRETARIAL COMPLIANCE REPORT{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        CORPORATE GOVERNANCE {" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        INVESTOR FEEDBACK {" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        ANNUAL REPORT & NOTICE OF AGM{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        POLICY{" "}
                      </Link></li>
                      <li> <Link to='#'>
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        RIGHT ISSUES{" "}
                      </Link></li>
                      <li> 
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        Details of agreements entered into with the media companies and/or their associates, etc. (Not Applicable){" "}
                      </li>
                      <li> 
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        Schedule of analyst or institutional investor meet and presentations made by the listed entity to analysts or institutional investors. (No){" "}
                      </li>
                      <li> 
                        <span className='list-Investors2'> 
                          <FaArrowRight />
                        </span>
                        New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change. (No){" "}
                      </li>
                      <li> 
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        Financials of Foreign Subsidiaries. (Not Applicable){" "}
                      </li>
                      <li> 
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
                        Dividend Distribution Policy. (Not Applicable){" "}
                      </li>
                      <li> 
                        <span className='list-Investors2'>
                          <FaArrowRight />
                        </span>
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
    </>
  );
};

export default InvestorsInner;

