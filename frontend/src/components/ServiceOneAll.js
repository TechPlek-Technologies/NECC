import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceOneAll = () => {
  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>SERVICES</h4>
                <h2 className='title'>OUR SERVICE FOR YOU</h2>
                <p>
                Currently NECC offer’s services like part truck load(PTL), full truck load(FTL), bulk movements, ODC movements, warehousing & 3pl.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/1.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-1.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>PART TRUCK LOAD (PTL)</h5>
                  {/* <p>
                  Movement of goods/small parcels (less than 50kg’s) from all over India to the eastern and north eastern part of the country. 
                  </p> */}
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service'>
                      READ MORE{" "}
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
                <div className='thumb'>
                  <img src='assets/img/service/2.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-2.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>FULL TRUCK LOAD (FTL)</h5>
                  {/* <p>
                  We provide this service to all major corporate where we can place the truck from anywhere to anywhere depending on the client’s needs.
                  </p> */}
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service'>
                      READ MORE{" "}
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
                <div className='thumb'>
                  <img src='assets/img/service/3.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-3.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>BULK MOVEMENTS</h5>
                  {/* <p>
                  We offer services like mining logistics,chrome/iron/manganese ore transportation from mines to processing hubs to plants and then to final customers.
                  </p> */}
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service'>
                      READ MORE{" "}
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
                <div className='thumb'>
                  <img src='assets/img/service/4.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-4.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>ODC MOVEMENTS</h5>
                  {/* <p>
                  Over dimensional consignments require special expertise and safety measures to be transported over long distance, NECC’s team of experts do this all over India on turnkey basis.
                  </p> */}
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service'>
                      READ MORE{" "}
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
                <div className='thumb'>
                  <img src='assets/img/service/5.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-5.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>WAREHOUSING & 3PL</h5>
                  {/* <p>
                  We have more than 1.5 million sq ft of warehousing space all over India. (Mix of lease and owned) and providing our clients with complete solution of primary movements, storage and then to end customers on just in time basis.
                  </p> */}
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/6.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-6.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>LAND TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceOneAll;
