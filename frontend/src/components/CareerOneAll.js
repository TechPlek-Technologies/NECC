import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReadMoreReact from 'read-more-react';

const CareerOneAll = () => {
  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='section-title text-center'>
                {/* <h4 className='subtitle'>SERVICES</h4> */}
                <h2 className='subtitle'>CURRENT OPENINGS</h2>
              </div>
            </div>
          </div>

          <div className='row' >
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='details'>
                  <h5>Branch Manager/ Supervisors</h5>
                  <p>
                  <ReadMoreReact text={"The candidate should be capable enough to manage the Branch with profitability and should be preferably from Transport industry.The incumbent should preferably be a graduate with effective communication skills and should be in the age group of 25-40 years."}/>
               
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='mailto:resume@neccgroup.com?subject=Post your resume for the post of Branch Manager/ Supervisors'>
                      Submit Resume{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                
                 <div className='details'>
                  <h5>Marketing Executives </h5>
                  <p>
                  <ReadMoreReact text={"Preferably should have some experience in sales and marketing.The candidate should have strong flair for marketing and good communication skills and convincing power."}/>
              
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='mailto:resume@neccgroup.com?subject=Post your resume for the post of Marketing Executives'>
                    Submit Resume{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                
                <div className='details'>
                  <h5>Operations Executives</h5>
                  <p>
                  <ReadMoreReact text={"The Candidate should be capable enough to perform all operational activities and maintain high level of service. He should have an experience in similar post for minimum 2 years."}/>
    
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='mailto:resume@neccgroup.com?subject=Post your resume for the post of Operations Executives'>
                    Submit Resume{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
               
                <div className='details'>
                  <h5>Account Executives</h5>
                  <p>
                  <ReadMoreReact text={"The Candidate should be a graduate in commerce with 1-2 years of experience."}/>
                  
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='mailto:resume@neccgroup.com?subject=Post your resume for the post of Account Executives'>
                    Submit Resume{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
               
                <div className='details'>
                  <h5>Data Entry Operators</h5>
                  <p>
                  <ReadMoreReact text={"The Candidate should have basic knowledge of Windows operating system."}/> 
                  
                   {/* MS Access, SQL server 2000, data base etc. */}
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='mailto:resume@neccgroup.com?subject=Post your resume for the post of Data Entry Operators'>
                    Submit Resume{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default CareerOneAll;
