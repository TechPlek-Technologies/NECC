import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const SiteMapInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Investors area start */} 
      <div className='service-area pd-top-120 pd-bottom-45'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'></div>
      <div className='service-details-wrap'>
                <h2 className="list-Investors">SITEMAP</h2>
                <div className='row'>
                  <div className='col-lg-12 align-self-center list-Investors'>
                    <ul className=' list-inner-wrap list-Investors1' >
                      <li> <Link to='/ConsignmentTrackingaAndEnquiry'>
                      CONSIGNMENT TRACKING AND ENQIRY{" "}
                      </Link></li>
                      <li> <Link to='/NeccGroup'>
                  
                      NECC GROUP{" "}
                      </Link></li>
                      <li> <Link to='/NeccLogistics'>
                        
                      NECC LOGISTICS{" "}
                      </Link></li>
                      <li> <Link to='/NeccTelecom'>
                        
                      NECC TELECOM{" "}
                      </Link></li>

                      <li> <Link to='/Necc'>
                       
                      NORTH EASTERN CARRYING CORPORATION {" "}
                      </Link></li>
                      <li> <Link to='/NeccEcomSolution'>
                       
                      NECC ECOM SOLUTIONS{" "}
                      </Link></li>
                      <li> <Link to='/KeyManagementPersonnel'>
                        
                      KEY MANAGEMENT PERSONNEL{" "}
                      </Link></li>

                      <li> <Link to='/ANNUAL-REPORT-&-NOTICE-OF-AGM/32'>
                        
                        ANNUAL REPORT & NOTICE OF AGM{" "}
                        </Link></li>

                      <li> <Link to='/CORPORATE-GOVERNANCE/34'>
                        
                      CORPORATE GOVERNANCE{" "}
                      </Link></li>

                      <li> <Link to='/QUARTERLY-COMPLIANCES/35'>
                        
                      QUARTERLY COMPLIANCES{" "}
                      </Link></li>

                      <li> <Link to='/DOWNLOAD/41'>
                        
                      DOWNLOAD{" "}
                        </Link></li>

                        <li> <Link to='/Annual-Report-&-Financials/33'>
                        
                        ANNUAL REPORT & FINANCIALS{" "}
                        </Link></li>

                        <li> <Link to='/POLICES-&-CODE/37'>
                        
                        POLICES & CODE{" "}
                        </Link></li>

                        <li> <Link to='/CurrentOpening'>
                        
                        CURRENT OPENINGS{" "}
                        </Link></li>

                        <li> <Link to='/CodeOfConduct'>
                        
                        CODE OF CONDUCT{" "}
                        </Link></li>

                        <li> <Link to='/NEWSPAPER-PUBLICATION/38'>
                        
                        NEWSPAPER PUBLICATION{" "}
                        </Link></li>

                        <li> <Link to='/NEWS-&-EVENTS/40'>
                        
                        NEWS & EVENTS{" "}
                        </Link></li>

                        <li> <Link to='/RIGHT-ISSUES/36'>
                        
                        RIGHT ISSUES{" "}
                        </Link></li>

                        <li> <Link to='/InvestorFeedback'>
                        
                        INVESTOR FEEDBACK{" "}
                        </Link></li>

                        <li> <Link to='/NeccPackers&Movers'>
                        
                        NECC PACKERS & MOVERS{" "}
                        </Link></li>

                        <li> <Link to='/GetDetails'>
                        
                        GET DETAILS{" "}
                        </Link></li>

                        <li> <Link to='/Magazines'>
                        
                        MAGAZINES{" "}
                        </Link></li>

                        <li> <Link to='/CorporateSocialResponsibility'>
                        
                        CORPORATE SOCIAL RESPONSIBILITY{" "}
                        </Link></li>

                        <li> <Link to='/Network'>
                        
                        NETWORK{" "}
                        </Link></li>

                        <li> <Link to='/Awards&Recognition'>
                        
                        AWARDS & RECOGNITION{" "}
                        </Link></li>

                        <li> <Link to='/CorporateInformation'>
                        
                        CORPORATE INFORMATION{" "}
                        </Link></li>


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

export default SiteMapInner;

