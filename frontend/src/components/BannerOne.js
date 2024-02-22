import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const BannerOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (
    <>
      {/* banner start */}
      <div className='banner-area banner-area-1'>
        <div className='banner-slider owl-carousel'>
          <Slider {...settings}>
            <div>
              <div
                className='item'
                // style={{ backgroundImage: 'url("./assets/img/banner/1.png")' }}
              >
                <video autoPlay loop muted style={{position:"fixed",width: "1920px" }}>
                  <source src="/assets/img/video/Home2.m4v" type="video/mp4"/>
                </video>
                
             <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8 col-md-7'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Experience Excellence & Drive Success in Logistics
                        </h1>
                        <p className='b-animate-3 content'>
                        Experience unparalleled logistics excellence with NECC, the premier supply chain management company in India. Trust us to optimize your operations efficiently.
                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>

            {/* <div>
              <div
                className='item'
                //  style={{ backgroundImage: 'url("./assets/img/banner/2.png")' }}
              >
                <video autoPlay loop muted style={{position:"fixed"}}>
                  <source src="/assets/img/video/NECC LTD..mp4" type="video/mp4"/>
                </video>
               
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-8 col-md-7'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Drive Success in Your Supply Chain with India's Top-tier Logistics Management Solutions
                        </h1>
                        <p className='b-animate-3 content'>
                        NECC offers top-tier logistics solutions to drive success in your supply chain. Partner with us for unmatched efficiency and reliability.
                        </p>
                        <div className='btn-wrap'>
                          <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link>
                          <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerOne;
