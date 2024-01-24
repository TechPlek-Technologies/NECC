import React from "react";
import { Link } from "react-router-dom";

const ConsignmentTrackingaAndEnquiryInner = () => {
  return (
    <>
      {/*request-quote-area start*/}
      <div className='request-quote-area'>
        <div className='container'>
          <div className='request-quote-inner'>
            <ul className='nav nav-pills' id='pills-tab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link active'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                  role='tab'
                  aria-controls='pills-home'
                  aria-selected='true'
                >
                  <img src='assets/img/request-quote/1.png' alt='Transpro' />
                  CONSIGNMENT TRACKING AND ENQUIRY
                </button>
              </li>
            </ul>
            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='pills-home'
                role='tabpanel'
                aria-labelledby='pills-home-tab'
              >
                <div className='row'>
                  <div className='col-lg-8'>
                    <h6 className='subtitle'>Personal Information :</h6>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Name' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Email' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Phone Number' />
                        </div>
                      </div>
                    </div>
                    <h6 className='subtitle mt-4'>Shipment Information :</h6>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='single-select-inner style-border'>
                          <select className='single-select'>
                            <option>G.R. Number</option>
                            <option value={1}>Some option</option>
                            <option value={2}>Another option</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-8'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='G.R. Number' />
                        </div>
                      </div>
                      
                      <div className='col-lg-4'>
                        <div className='single-select-inner style-border'>
                          <select className='single-select'>
                            <option>Query Details</option>
                            <option value={1}>Some option</option>
                            <option value={2}>Another option</option>
                          </select>
                        </div>
                      </div>
  
                      <div className='col-lg-8'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Query Details' />
                        </div>
                      </div>
                    </div>
                   
                    <a className='btn btn-base w-100' href='#'>
                      SUBMIT
                    </a>
                  </div>
                  <div className='col-lg-4 align-self-end'>
                    <div
                      className='quote-wrap'
                      style={{ background: "var(--main-color)" }}
                    >
                      <h4>How Can We Help You!</h4>
                      <p>
                      Click the button below to follow, we will get back to you very soon.
                      </p>
                      <Link className='btn btn-white' to='mailto:customercare1@neccgroup.com'>
                        CONTACT US
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*request-quote-area end*/}
    </>
  );
};

export default ConsignmentTrackingaAndEnquiryInner;
