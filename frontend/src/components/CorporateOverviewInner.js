import React, { useState } from "react";
import CountUp from "react-countup";
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
import TrackVisibility from "react-on-screen";
import { Link } from "react-router-dom";

const CorporateOverviewInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Corporate area start */}
      <div className='about-area pd-bottom-120 pd-top-120'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='about-thumb-wrap'>
                  <img
                    className='img-1'
                    src='./assets/img/about/shape.png'
                    alt='Transpro'
                  />
                  <img
                    className='img-2'
                    src='./assets/img/about/1.png'
                    alt='Transpro'
                  />
                  {/* <img
                    className='img-3'
                    src='./assets/img/about/2.png'
                    alt='Transpro'
                  /> */}
                  <div className='exprience-wrap'>
                    <img src='./assets/img/about/shape-3.png' alt='Transpro' />
                    <div className='details'>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              <CountUp delay={0} start={0} end={22} />
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
            
                    <h2 className='title'>
                    CORPORATE OVERVIEW
                    </h2>
                    <p className='content left-line'>
                    Headquartered in Delhi, North Eastern Carrying Corporation Limited (NECC) is one of the high performance transporting companies in India. Over four decades of services, we have grown to become a 200+ branch network handling transportation and supply chain solutions throughout India, Nepal, Bhutan and Bangladesh.
                    </p>
                  
                
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='service-area pd-top-45 pd-bottom-140'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
          
                <p className='content'>
                With our advanced resources and in-depth familiarity of the domain, we are able to create customized and effective solution for any kind of commercial, industrial and residential freight movement. We offer seamless Logistics Management Solutions with our high capacity network and advanced trouble-shooting capabilities.
                </p>
                <p className='content'>
                Right from small parcels we book full truck load consignments, project consignments and over dimensional consignments (ODC). Add to that, we also provide containerized movement of cargo, packing and moving, warehousing, 3PL and storage facilities.
                </p>
                <p className='content'>
                Our unique consignment tracking system (NECC TRANSINFO) allows customers to track whereabouts of their consignment anytime anywhere online. We take pride in providing satisfactory service to a diverse clientele with total confidentiality, reliability and efficiency.
                </p>

                 </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      <div className='fact-area' style={{ background: "#F9F9F9" }}>
        <div className='container'>
          <div
            className='fact-counter-area CorporateOverview'
            style={{ background: "url(assets/img/fact/bg.png)" }}
          >
            <div className='row justify-content-center'>
              <div className='col-lg-3 col-md-6'>
                <div className='single-fact-wrap'>
                  <h2>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={2000} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <h5>PROJECT COMPLETE</h5>
                  <p>Conveniently impact front-end niches via maintainable.</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-fact-wrap'>
                  <h2>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={100} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <h5>BEST EMPLOYEES</h5>
                  <p>Conveniently impact front-end niches via maintainable.</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-fact-wrap'>
                  <h2>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={450} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <h5>WORLDWIDE CLIENTS</h5>
                  <p>Conveniently impact front-end niches via maintainable.</p>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-fact-wrap after-none'>
                  <h2>
                    <TrackVisibility once>
                      {({ isVisible }) =>
                        isVisible && (
                          <span className='counter'>
                            <CountUp delay={0} start={0} end={80} />+
                          </span>
                        )
                      }
                    </TrackVisibility>
                  </h2>
                  <h5>WORLD AWARDS</h5>
                  <p>Conveniently impact front-end niches via maintainable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Corporate area end */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
       />
    </>
  );
};

export default CorporateOverviewInner;
