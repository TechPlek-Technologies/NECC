import React from "react";
import { Link } from "react-router-dom";

const NetworkInner = () => {
  return (
    <>
      {/* Start Services area  */}
      <div className='service-area pd-top-45 pd-bottom-45 '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-11 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                  
                <h2 className='title'>NETWORK</h2>
             
                  <p className='content'>
                  As a Full Truck Load service provider, we are best as compared to our competitors, as we have distributed and reliable network across India. Because of our strong networks, we are able to assess individual business needs in a most cost-effective way possible.
                    </p>
          
          <h4 style={{marginTop:"20px",marginBottom:"20px"}}>CORPORATE OFFICE</h4>
                <div className='row'>
                      <div className='col-xl-6 col-lg-12 col-md-6'>
                        <h6>NAME</h6>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                          Top Management.
                          </li>
                          <li>
                          Marketing Deptt.
                          </li>
                          <li>
                          Administration Deptt.
                          </li>
                          <li>
                          Customer Care Deptt.
                          </li>
                          <li>
                          H.R. Deptt.
                          </li>
                          <li>
                          I.T. Deptt.
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-6 col-lg-12 col-md-6'>
                       <h6>EMAIL</h6>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                        <li> <Link to="mailto:top@neccgroup.com">
                        operation@neccgroup.com {" "}
                        </Link></li>
                          <li>
                            Logistics services and solutions
                          </li>
                          <li>
                            3PL, inbound, outbound logistics
                          </li>
                          <li>
                            Distribution and freight management
                          </li>
                          <li>
                            Consolidation and deconsolidation
                          </li>
                          <li>
                            IT and logistics technology for SCM
                          </li>
                        </ul>
                      </div>
                    </div>
                 </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* End Services area  */}
    </>
  );
};

export default NetworkInner;
