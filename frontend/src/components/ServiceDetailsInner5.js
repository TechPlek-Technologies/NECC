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
import { Link,useLocation } from "react-router-dom";

const ServiceDetailsInner5 = () => { 
  const [isOpen, setOpen] = useState(false);
  const location = useLocation();
  return (
    <>
      {/* service area start */}
      <div className='service-area pd-top-120 pd-bottom-45'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='service-details-wrap2'>
                <div className='thumb'>
                  <img src='/assets/img/service-1/warehousing/warehouse (1).webp' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='/assets/img/service/warehouse.webp'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <h2>WAREHOUSING & 3PL</h2>
                <p>
                We have more than 2.5 million sq ft of warehousing space all over India. (Mix of lease and owned) and providing our clients with complete solution of primary movements, storage and then to end customers on just in time basis. This is the fastest growing division for the company at the moment and we have been investing in building assets to grow our strength in this business.
                </p>
                
                <div className='row'>
                  <div className='col-lg-6 align-self-center'>
                    <div className='thumb mb-lg-0 mb-4'>
                      <img src='/assets/img/service-1/warehousing/Global-Transaction-Advisory (4).webp' alt='Transpro' />
                    </div>
                  </div>
                  <div className='col-lg-6 align-self-center'>
                    <h4 className='subtitle'>Warehousing & 3PL Services</h4>
                    <ul className='list-inner-wrap'>
                      <li> Comprehensive warehousing solutions integrating seamless 3PL services for optimized logistics.</li>
                      <li> Warehousing facilities are strategically located for effective inventory management.</li>
                      <li> End-to-end 3PL services, from warehousing to distribution, ensuring supply chain efficiency.</li>
                    </ul>
                  </div>
                </div>
                {/* <h4 className='subtitle mt-3'>How It Works</h4>
                <p>
                  Holisticly conceptualize go forward customer service rather
                  than transparent infomediaries. Continually envisioneer 2.0
                  potentialities without team building processes. Dramatically
                  pursue client-centric human capital before client-centered
                  sources.
                </p>
                <div className='video-thumb-wrap pt-1 pb-4'>
                  <img src='/assets/img/service-1/warehousing/how-it-works (3).webp' alt='Transpro' />
                  <span
                    className='video-play-btn cursor-pointer'
                    data-effect='mfp-zoom-in'
                    onClick={() => setOpen(true)}
                  >
                    <FaPlay />
                  </span>
                </div>
                <p className='last-para'>
                  Dramatically morph extensive users before market-driven
                  partnerships. Conveniently initiate best-of-breed resources
                  and enabled architectures.
                </p> */}
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='sidebar-area'>
               
                 <div className='widget widget_catagory'>
                      <h4 className='widget-title'>
                        SERVICE LIST
                        <span className='dot' />
                      </h4>
                      <ul className='catagory-items'>
                        <li className={location.pathname === '/ServiceDetail1' ? 'active1' : ''}>
                          <Link to='/ServiceDetail1'>
                            PART TRUCK LOAD (PTL) <span><FaArrowRight /></span>
                          </Link>
                        </li>
                        <li className={location.pathname === '/ServiceDetail2' ? 'active1' : ''}>
                          <Link to='/ServiceDetail2'>
                            FULL TRUCK LOAD (FTL) <span><FaArrowRight /></span>
                          </Link>
                        </li>
                        <li className={location.pathname === '/ServiceDetail3' ? 'active1' : ''}>
                          <Link to='/ServiceDetail3'>
                            BULK MOVEMENTS <span><FaArrowRight /></span>
                          </Link>
                        </li>
                        <li className={location.pathname === '/ServiceDetail4' ? 'active1' : ''}>
                          <Link to='/ServiceDetail4'>
                            ODC MOVEMENTS <span><FaArrowRight /></span>
                          </Link>
                        </li>
                        <li className={location.pathname === '/ServiceDetail5' ? 'active1' : ''}>
                          <Link to='/ServiceDetail5'>
                            WAREHOUSING & 3PL <span><FaArrowRight /></span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                {/* <div className='widget widget_download'>
                  <h4 className='widget-title'>
                    DOWNLOAD BROCHURE
                    <span className='dot' />
                  </h4>
                  <ul className='download-items'>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf /> DOWNLOAD PDF
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaRegFileAlt /> DOWNLOAD DOC{" "}
                      </a>
                    </li>
                  </ul>
                </div> */}
                {/* <div
                  className='widget widget_support text-center mb-0'
                  style={{
                    background: "url(assets/img/widget/support-bg.png)",
                  }}
                >
                  <h4 className='widget-title style-white'>
                    24/7 ONLINE SUPPORT <span className='dot' />
                  </h4>
                  <p>
                    Assertively pontificate high standards in scenarios rather
                    than sustainable system. Interactively empower.
                  </p>
                  <p className='contact'>
                    <FaRegEnvelope />
                    co@neccgroup.com
                  </p>
                  <p className='contact mb-0'>
                    <FaPhoneAlt />
                    +011-23517516, 17, 18, 19
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
      {/* <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
      /> */}
    </>
  );
};

export default ServiceDetailsInner5;
