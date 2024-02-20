import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <>
      {/* service area start */}
      <div
        className='service-area pd-top-60 pd-bottom-90 pb-lg-0'
        style={{ background: "url(assets/img/service/bg.png)" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle style-2'>SERVICES</h4>
                <h2 className='title'>OUR SERVICE FOR YOU</h2>
                <p>
                  Quickly optimize cooperative models for long-term high-impact
                  ROI. Dynamically drive innovative e-commerce and distributed
                  paradigms.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
              <div className='thumb'>
                  <img src='/assets/img/service/part-truck-loa.webp' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='/assets/img/service/part-time-load.webp'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>PART TRUCK LOAD (PTL)</h5>
                  <p>
                  Movement of goods/small parcels (less than 50kg’s) from all over India to the eastern and north eastern part of the country.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/ServiceDetail1'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
              <div className='thumb'>
                  <img src='/assets/img/service/full-truck-load.webp' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='/assets/img/service/full-truck-load (1).webp'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>FULL TRUCK LOAD (FTL)</h5>
                  <p>
                  We provide this service to all major corporate where we can place the truck from anywhere to anywhere depending on the client’s needs.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/ServiceDetail2'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
              <div className='thumb'>
                  <img src='/assets/img/service/bulk-movements.webp' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='/assets/img/service/bulk-movement.webp'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>BULK MOVEMENTS</h5>
                  <p>
                  We offer services like mining logistics,chrome/iron/manganese ore transportation from mines for processing.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/ServiceDetail3'>
                      READ MORE{" "}
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

export default ServiceOne;
