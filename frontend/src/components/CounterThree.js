import React from "react";
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
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                               1,000+
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title1'>Professional Team Members</h3>
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
                        <TrackVisibility once>
                          {({ isVisible }) =>
                            isVisible && (
                              <span className='counter'>
                                2.5 Million+
                              </span>
                            )
                          }
                        </TrackVisibility>
                        <h3 className='title1'>Sq.Ft Warehouse Space Pan India</h3>
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
