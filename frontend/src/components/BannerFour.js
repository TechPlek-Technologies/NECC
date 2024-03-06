import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick"

const BannerFour = () => {
  const [state, setState] = useState({
    nav1: null,
    nav2: null,
  });

  var { slider1, slider2 } = useRef();

  useEffect(() => {
    setState({
      nav1: slider1,
      nav2: slider2,
    });
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };


  const [trackingVisible, setTrackingVisible] = useState(false);
  const [trackingNumber, setTrackingNumber] = useState('');

  const handleTrackClick = () => {
    setTrackingVisible(true);
  };

  const handleInputChange = (event) => {
    setTrackingNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    // Implement your submission logic here
    event.preventDefault();
    console.log('Tracking number submitted:', trackingNumber);
    // You can add your logic to submit the tracking number here
  };


  return (
    <>
      {/* header start */}
      <div className='home-area home-v2 '>
        <div className='header-slider header-slider2'>

          <Slider
            {...settings}
            asNavFor={state.nav2}
            ref={(slider) => (slider1 = slider)}
            autoplay={true}
            autoplaySpeed={2000}
            pauseOnHover={false}
          >
            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/banner/1.webp')",height:"800px"
                }}
              >
                {/* <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-4'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                        
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 animated fadeInUpBig'>
                            
                              <form onSubmit={handleSubmit}>
                                <input
                                className="single-input-inner1"
                                  type='text'
                                  placeholder='Enter tracking number'
                                  value={trackingNumber}
                                  onChange={handleInputChange}
                                /><br/>
                                <button type='submit' className="boxed-btn1">Track Shipment</button>
                              </form>
                            
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/banner/8.webp')",height:"800px"
                }}
              >
                {/* <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-4'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Track Shipment</span>
                            </a>
                           
                              <form onSubmit={handleSubmit}>
                                <input
                                className="single-input-inner1"
                                  type='text'
                                  placeholder='Enter tracking number'
                                  value={trackingNumber}
                                  onChange={handleInputChange}
                                /><br/>
                                <button type='submit' className="boxed-btn1">Track Shipment</button>
                              </form>
                          
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/banner/2 (1).webp')",height:"800px"
                }}
              >
                {/* <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-4'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                         
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Track Shipment </span>
                            </a>
                           
                              <form onSubmit={handleSubmit}>
                                <input
                                className="single-input-inner1"
                                  type='text'
                                  placeholder='Enter tracking number'
                                  value={trackingNumber}
                                  onChange={handleInputChange}
                                /><br/>
                                <button type='submit' className="boxed-btn1">Track Shipment</button>
                              </form>
                           
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/banner/4 (1).webp')",height:"800px"
                }}
              >
                {/* <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-4'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Track Shipment </span>
                            </a>
                          
                              <form onSubmit={handleSubmit}>
                                <input
                                className="single-input-inner1"
                                  type='text'
                                  placeholder='Enter tracking number'
                                  value={trackingNumber}
                                  onChange={handleInputChange}
                                /><br/>
                                <button type='submit' className="boxed-btn1">Track Shipment</button>
                              </form>
                           
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/banner/3.webp')",height:"800px"
                }}
              >
                {/* <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-4'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                         
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Track Shipment </span>
                            </a>
                            
                              <form onSubmit={handleSubmit}>
                                <input
                                className="single-input-inner1"
                                  type='text'
                                  placeholder='Enter tracking number'
                                  value={trackingNumber}
                                  onChange={handleInputChange}
                                /><br/>
                                <button type='submit' className="boxed-btn1">Track Shipment</button>
                              </form>
                           
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>

          </Slider>

          <div className='header-bg'>
            <div className='container'>
                    <div className='row header-height justify-content-start'>
                      <div className='col-lg-4'>
                        <div className='header-inner-wrap'>
                          <div className='header-inner1'>
                            {/* header inner */}
                            <h1 className='title animated slideInRight'>
                              Experience Excellence in Logistics{" "}
                            </h1>
                            <div className='btn-wrapper style-02 animated fadeInUpBig'>
                              
                                <form onSubmit={handleSubmit}>
                                  <input
                                  className="single-input-inner1"
                                    type='text'
                                    placeholder='Enter tracking number'
                                    value={trackingNumber}
                                    onChange={handleInputChange}
                                  /><br/>
                                  <button type='submit' className="boxed-btn1">Track Shipment</button>
                                </form>
                              
                            </div>
                          </div>
                          {/* //.header inner */}
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
       
      </div>
      {/* header end */}
    </>
  );
};

export default BannerFour;
