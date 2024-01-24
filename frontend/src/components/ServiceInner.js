import React from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import Slider from "react-slick";

const ServiceInner = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    initialSlide: 1,
    autoplaySpeed: 5000,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* portfolio area start */}
      <div
        className='portfolio-area pd-top-115'
        style={{ background: "url(assets/img/portfolio/bg.png)" }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='section-title style-white'>
                <h4 className='subtitle style-2'>NORTH EASTERN CARRYING CORPORATION</h4>
                <h2 className='title'>Epitome of Secure and Time-Bound Transportation</h2>
                <p className='content'>
                Currently NECC offer’s transport related services like PTL/Parcel Load Movement, Full Truck Load(FTL), Over Dimensional Consignment, Containerized Movement of Cargo, Warehousing & 3pl.
                </p>
              </div>
            </div>
          </div>
          <div className='swiper-container'>
            {/* Additional required wrapper */}
            <div className='swiper-wrapper'>
              {/* Slides */}
              <Slider {...settings}>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/1.png' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Logistics Transportation</p>
                        <h4>PTL/PARCEL LOAD MOVEMENT</h4>
                      </div>
                      <a href='/service' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/2.png' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Logistics Transportation</p>
                        <h4>FULL TRUCK LOAD SERVICES</h4>
                      </div>
                      <a href='/service' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/3.png' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Logistics Transportation</p>
                        <h4>OVER DIMENSIONAL CONSIGNMENT</h4>
                      </div>
                      <a href='/service' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/2.png' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Logistics Transportation</p>
                        <h4>CONTAINERIZED MOVEMENT OF CARGO</h4>
                      </div>
                      <a href='/service' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/2.png' alt='Transpro' />
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <p>Logistics Transportation</p>
                        <h4>WAREHOUSING & 3PL</h4>
                      </div>
                      <a href='/service' className='icon'>
                        <FaPlus />
                      </a>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio area end */}
    </>
  );
};

export default ServiceInner;
