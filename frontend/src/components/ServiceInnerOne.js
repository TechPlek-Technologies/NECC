import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceInnerOne = () => {
  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-45 pd-bottom-20'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>NORTH EASTERN CARRYING CORPORATION</h4>
                <h2 className='title'>GLIMPSE AT OUR SERVICES</h2>
                <p className="para">
                Currently NECC offer’s services like part truck load(PTL), full truck load(FTL), bulk movements, ODC movements, warehousing & 3pl.
                </p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
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
            <div className='col-lg-4'>
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
            <div className='col-lg-4'>
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
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='/assets/img/service/ODC-truck (1).webp' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='/assets/img/service/ODC-truck.webp'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>ODC MOVEMENTS</h5>
                  <p>
                  Over dimensional consignments require special expertise and safety measures to be transported over long distance.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/ServiceDetail4'>
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
                  <img src='/assets/img/service/warehousing-&-3pl.webp' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='/assets/img/service/warehouse.webp'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>WAREHOUSING & 3PL</h5>
                  <p>
                  We have more than 2.5 million sq ft of warehousing space all over India.Providing our clients with complete solution.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/ServiceDetail5'>
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

export default ServiceInnerOne;
