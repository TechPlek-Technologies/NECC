import React from "react";

const AboutThree = () => {
  return (
    <>
      {/* Start Services area  */}
      <div className='service_area-3'>
        <div className='container-fluid'>
          <div className='row justify-content-end'>
            <div className='col-lg-5 col-md-12'>
              <div className='service-content'>
                <div className='section-title white  text-left'>
                  <span className='subtitles'>ABOUT US</span>
                  <h2 className='title'>WELCOME WORLD WIDE BEST TRANSPORT COMPANY</h2>
                  <p>
                  Since our inception, we have provided clients with flexible, responsive, and affordable services that they deserve. We use our deep operating knowledge to offer extraordinary solutions as unique as our client’s needs. 
                  </p>
                </div>
                <div className='service-item'>
                  <div className='row'>
                    <div className='col-lg-12  col-md-12 col-sm-12'>
                      <div className='service-single-item'>
                        {/* <h3>
                          <span>01</span>Ocean Cargo
                        </h3> */}
                        <p>
                        <img
                              src='./assets/img/icon/check1.png' className="img-fluid "
                              alt='Transpro'
                              style={{paddingRight:"10px"}}
                            />
                        Seamless end-to-end supply chain services.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-12  col-md-12 col-sm-12'>
                      <div className='service-single-item'>
                     
                        <p>
                        <img
                              src='./assets/img/icon/check1.png' className="img-fluid "
                              alt='Transpro'
                              style={{paddingRight:"10px"}}
                            />
                        Establish distribution channels in the Eastern Region.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-12  col-md-12 col-sm-12'>
                      <div className='service-single-item'>
                        <p>
                        <img
                              src='./assets/img/icon/check1.png' className="img-fluid "
                              alt='Transpro'
                              style={{paddingRight:"10px"}}
                            />
                        Smooth flow of inventory and visibility of the product.
                        </p>
                      </div>
                    </div>
                    <div className='col-lg-12  col-md-12 col-sm-12'>
                      <div className='service-single-item'>
                        <p>
                        <img
                              src='./assets/img/icon/check1.png' className="img-fluid "
                              alt='Transpro'
                              style={{paddingRight:"10px"}}
                            />
                        Single window solution under one banner.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6 remove-col-padding'>
              <div
                className='service-image'
                style={{
                  backgroundImage: 'url("/assets/img/about/ab.jpg")',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* End Services area  */}
    </>
  );
};

export default AboutThree;