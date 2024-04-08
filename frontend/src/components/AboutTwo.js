import React, { useState } from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* about area start */}
      <div className='about-area-2 pd-top-45 pd-bottom-100'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-5 order-lg-1'>
                <div className='about-thumb-wrap mb-lg-0 mb-4'>
                  <img
                    className='img-2'
                    src='/assets/img/about/22 (1).webp'
                    alt='Transpro'
                  />
                  <div className='exprience-wrap'>
                    <img src='assets/img/about/shape-3.png' alt='Transpro' />
                    <div className='details'>
                    <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              <CountUp delay={0} start={0} end={55} />+
                            </h1>
                          )
                        }
                      </TrackVisibility>
                      <p>YEARS EXPERIENCE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-7 align-self-center order-lg-2'>
                <div className='about-inner-wrap ms-0'>
                  <div className='section-title mb-0'>
                    <h2 className='title mb-2'>
                    ABOUT US
                    </h2>
                    <p>
                    Since inception, we have  provided our clients flexible, responsive and affordable services that they deserve. We use our deep operating knowledge to offer extraordinary solutions as unique as our client’s needs. NECC  specializes in offering PTL/FTL/ODC/BULK movement of goods Pan India as well as to Nepal/Bhutan/Bangladesh  along with warehousing services and custom clearance.
                    </p>
                    <div className='row'>
                      <div className='col-xl-6'>
                        <div className='single-about-wrap'>
                          <div className='icon'>
                            <img
                              src='assets/img/about/icon-1.png'
                              alt='Transpro'
                            />
                          </div>
                          <div className='details'>
                            <h6>PAN India Presence </h6>
                          </div>
                        </div>
                      </div>
                      <div className='col-xl-6'>
                        <div className='single-about-wrap'>
                          <div className='icon'>
                            <img
                              src='assets/img/about/icon-2.png'
                              alt='Transpro'
                            />
                          </div>
                          <div className='details'>
                            <h6>24/7 Support For Any Clients</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutTwo;
