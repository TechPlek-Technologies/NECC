import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
const AboutOne = () => {
  return (
    <>
      {/* about area start */}
      <div className='about-area pd-top-45 pd-bottom-240'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='about-thumb-wrap'>
                  <img
                    className='img-1 img-fluid'
                    src='./assets/img/about/shape.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-2 img-fluid'
                    src='/assets/img/about/welcome.webp'
                    alt='Transpro'
                  />
                  {/* <img
                    className='img-3'
                    src='./assets/img/about/2.png'
                    alt='Transpro'
                  /> */}
                  <div className='exprience-wrap'>
                    <img src='./assets/img/about/shape-3.png' className="img-fluid " alt='Transpro' />
                    <div className='details'>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              <CountUp delay={0} start={0} end={56} />
                            </h1>
                          )
                        }
                      </TrackVisibility>
                      <p>YEARS EXPERIENCE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>ABOUT US</h4>
                    <h2 className='title'>
                      WELCOME WORLD WIDE BEST TRANSPORT COMPANY
                    </h2>
                    <p className='content left-line'>
                    Since our inception, we have provided clients with flexible, responsive, and affordable services that they deserve. We use our deep operating knowledge to offer extraordinary solutions as unique as our client’s needs. 
                    </p>
                    <div className='row'>
                      <div className='col-xl-12 col-lg-12 col-md-12'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                            <img
                              src='./assets/img/icon/check.png' className="img-fluid "
                              alt='Transpro'
                            />{" "}
                           Seamless end-to-end supply chain services.
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png' className="img-fluid "
                              alt='Transpro'
                            />
                            Establish distribution channels in the Eastern Region.
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png' className="img-fluid "
                              alt='Transpro'
                            />
                            Smooth flow of inventory and visibility of the product.
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png' className="img-fluid "
                              alt='Transpro'
                            />
                            Single window solution under one banner.
                          </li>
                        </ul>
                      </div>
                      {/* <div className='col-xl-6 col-lg-12 col-md-6 align-self-center'>
                        <div className='thumb'>
                          <img src='./assets/img/about/3.png' alt='Transpro' />
                        </div>
                      </div> */}
                    </div>
                    <div className='btn-wrap'>
                      <Link className='btn btn-base' to='/about'>
                        ABOUT MORE
                      </Link>
                      {/* <div className='author-wrap'>
                        <div className='thumb'>
                          <img src='./assets/img/about/4.png' alt='Transpro' />
                        </div>
                        <div className='details'>
                          <img
                            src='./assets/img/about/signature.png'
                            alt='Transpro'
                          />
                          <p>CEO, Of Company</p>
                        </div>
                      </div> */}
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

export default AboutOne;
