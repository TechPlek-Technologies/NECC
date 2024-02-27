import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Demo from "../elements/demo";

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
    fade: false,
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
            autoplaySpeed={3000}
          >
            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/banner/home-2.jpg')",height:"800px"
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-5'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 animated fadeInUpBig'>
                            <a href='#' className='boxed-btn' onClick={handleTrackClick}>
                              <span>Track Shipment</span>
                            </a>
                            {trackingVisible && (
                              <form onSubmit={handleSubmit}>
                                <input
                                className="single-input-inner1"
                                  type='text'
                                  placeholder='Enter tracking number'
                                  value={trackingNumber}
                                  onChange={handleInputChange}
                                /><br/>
                                <button type='submit' className="boxed-btn1">Submit</button>
                              </form>
                            )}
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/banner/1 (12).jpg')",height:"800px"
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-5'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn' onClick={handleTrackClick}>
                              <span>Track Shipment</span>
                            </a>
                            {trackingVisible && (
                              <form onSubmit={handleSubmit}>
                                <input
                                className="single-input-inner1"
                                  type='text'
                                  placeholder='Enter tracking number'
                                  value={trackingNumber}
                                  onChange={handleInputChange}
                                /><br/>
                                <button type='submit' className="boxed-btn1">Submit</button>
                              </form>
                            )}
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/banner/india-map2 (1).jpg')",height:"800px"
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-5'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn' onClick={handleTrackClick}>
                              <span>Track Shipment </span>
                            </a>
                            {trackingVisible && (
                              <form onSubmit={handleSubmit}>
                                <input
                                className="single-input-inner1"
                                  type='text'
                                  placeholder='Enter tracking number'
                                  value={trackingNumber}
                                  onChange={handleInputChange}
                                /><br/>
                                <button type='submit' className="boxed-btn1">Submit</button>
                              </form>
                            )}
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/banner/4 (4).jpg')",height:"800px"
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-5'>
                      <div className='header-inner-wrap'>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 aanimated fadeInUpBig'>
                            <a href='#' className='boxed-btn' onClick={handleTrackClick}>
                              <span>Track Shipment </span>
                            </a>
                            {trackingVisible && (
                              <form onSubmit={handleSubmit}>
                                <input
                                className="single-input-inner1"
                                  type='text'
                                  placeholder='Enter tracking number'
                                  value={trackingNumber}
                                  onChange={handleInputChange}
                                /><br/>
                                <button type='submit' className="boxed-btn1">Submit</button>
                              </form>
                            )}
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </Slider>
        </div>
        {/* <div className='header-bottom'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='home-v2-contact'>
                  <ul className='social-link animated fadeInLeftBig'>
                    <li>
                      {" "}
                      <a href='#' className='facebook'>
                        {" "}
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href='#' className='twitter'>
                        Twitter
                      </a>
                    </li>
                    <li>
                      <a href='#' className=''>
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='header-sm-slider'>
                  <Slider
                    asNavFor={state.nav1}
                    ref={(slider) => (slider2 = slider)}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                  >
                    <div className='slider-image1 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm1.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='slider-image2 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm2.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='slider-image3 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm3.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='slider-image2 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm2.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                    <div className='slider-image3 custom-thumb'>
                      <img
                        src='assets/img/slide-v2/sm3.png'
                        className='img-fluid'
                        alt=''
                      />
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* header end */}
    </>
  );
};

export default BannerFour;
