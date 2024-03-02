import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

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
                      <div className='countr wow fadeInLeft' style={{backgroundColor : "rgb(216 37 30)",marginBottom:"20px"}}>
                        <div className='couter-icon'>
                        
                          <img
                          className=' img-fluid'
                          src='/assets/img/icon/trust1.png'
                          />
                        </div>
                        {/* <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={45789} />
                              </span>
                            )
                          }
                        </TrackVisibility> */}
                         <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                5,000+
                              </span>
                            )
                          }
                        </TrackVisibility>

                        <h3 className='title1'>Attached Vehicles Pan India</h3>
                        {/* <p className="para1">Extensive knowledge, and reliable logistics solutions.</p> */}
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                      <div className='countr wow fadeInUp' style={{backgroundColor : "rgb(41 23 109)"}}>
                        <div className='couter-icon'>
                         
                          <img
                          className=' img-fluid'
                          src='/assets/img/icon/reliability1.png'
                          />
                        </div>
                        {/* <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={31216} />
                              </span>
                            )
                          }
                        </TrackVisibility> */}
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                               3,00,000+
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title1'>Satisfied Customers</h3>
                        {/* <p className="para1">Consistent, on-time deliveries, impeccable service.</p> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                      <div className='countr wow fadeInRight' style={{backgroundColor : "rgb(41 23 109)"}}>
                        <div className='couter-icon'>
                          
                          <img
                          className=' img-fluid'
                          src='/assets/img/icon/expertise1.png'
                          />
                        </div>
                        {/* <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={21454} />
                              </span>
                            )
                          }
                        </TrackVisibility> */}
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                               1,000+
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title1'>Profesional Team Members</h3>
                        {/* <p className="para1">Client-centric approach, transparent communication channels.</p> */}
                      </div>
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6'>
                      <div className='countr wow fadeInRight' style={{backgroundColor : "rgb(216 37 30)"}}>
                        <div className='couter-icon'>
                        
                          <img
                          className=' img-fluid'
                          src='/assets/img/icon/EXCELLENCE1.png'
                          />
                        </div>
                        {/* <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                <CountUp delay={0} start={0} end={31454} />
                              </span>
                            )
                          }
                        </TrackVisibility> */}
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                2.5+
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title1'>Million Sq.ft Warehouse Space Pan India</h3>
                        {/* <p className="para1">Exceptional quality, unmatched customer satisfaction.</p> */}
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
