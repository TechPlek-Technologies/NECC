import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";
import { FaBoxOpen, FaLayerGroup, FaRssSquare } from "react-icons/fa";

const CounterThree = () => {
  return (
    <>
      {/*fact-area start*/}
      <div className='logistics_area style-02 pt-5 pb-0'>
        <div className='container-fluid'>
          <div className='row justify-content-start'>
             <div className='counterup' id='counterup'>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                      <div className='countr wow fadeInLeft' style={{backgroundColor : "rgba(250, 67, 24, 0.1)"}}>
                        <div className='couter-icon'>
                          <FaBoxOpen />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={45789} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>EXPERTISE</h3>
                        <p className="para">Extensive knowledge, and reliable logistics solutions.</p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                      <div className='countr wow fadeInUp' style={{backgroundColor : "rgba(0, 133, 239, 0.1)"}}>
                        <div className='couter-icon'>
                          <FaLayerGroup />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={31216} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>RELIABILITY</h3>
                        <p className="para">Consistent, on-time deliveries, impeccable service.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                      <div className='countr wow fadeInRight' style={{backgroundColor : "rgba(0, 133, 239, 0.1)"}}>
                        <div className='couter-icon'>
                          <FaRssSquare />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={21454} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>TRUST</h3>
                        <p className="para">Client-centric approach, transparent communication channels.</p>
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                      <div className='countr wow fadeInRight' style={{backgroundColor : "rgba(250, 67, 24, 0.1)"}}>
                        <div className='couter-icon'>
                          <FaRssSquare />
                        </div>
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={31454} />
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title'>EXCELLENCE</h3>
                        <p className="para">Exceptional quality, unmatched customer satisfaction.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
      {/*fact-area end*/}
    </>
  );
};

export default CounterThree;
