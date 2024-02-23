import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaTruckMoving } from "react-icons/fa";
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
                style={{ backgroundImage: 'url("./assets/img/banner/1.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Experience Excellence & Drive Success in Logistics
                        </h1>
                        <p className='b-animate-3 content'>
                        Experience unparalleled logistics excellence with NECC, the premier supply chain management company in India. Trust us to optimize your operations efficiently.
                        </p>
                        <div class="slider-form" data-animation="fadeInUpS">
                                            <form action="#">
                                                <input type="text" placeholder="Tracking id" tabindex="0"/>
                                                <button class="btn  btn-base b-animate-4" tabindex="0">Tracking</button>
                                            </form>
                       
                    </div>
                        
                        {/* <div className='btn-wrap'>
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
                         
                        </div> */}
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/2.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-7 col-md-8'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title'>
                        Experience Excellence & Drive Success in Logistics
                        </h1>
                        <p className='b-animate-3 content'>
                        Experience unparalleled logistics excellence with NECC, the premier supply chain management company in India. Trust us to optimize your operations efficiently.
                        </p>
                        <div class="slider-form" data-animation="fadeInUpS">
                                            <form action="#">
                                                <input type="text" placeholder="Tracking id" tabindex="0"/>
                                                <button class="btn btn-base b-animate-4" tabindex="0">Tracking</button>
                                            </form>
                                        </div>
                       
                        <div className='btn-wrap'>
                          {/* <Link
                            className='btn btn-base b-animate-4'
                            to='/service'
                          >
                            {" "}
                            Explore The Services
                          </Link> */}
                  
                          {/* <Link
                            className='btn btn-white b-animate-4'
                            to='/contact'
                          >
                            Contact Us
                          </Link> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerOne;
