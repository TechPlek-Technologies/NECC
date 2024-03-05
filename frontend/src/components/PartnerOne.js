import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const PartnerOne = () => {
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
    infinite: true,
    speed: 800,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {/*partner-area start*/}
      <div className='partner-area pd-top-60 pd-bottom-100'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-9'>
              <div className='section-title text-center'>
                {/* <h4 className='subtitle'>HAPPY CLIENTS</h4> */}
                <h2 className='title'>THE TRUSTED CHOICE FOR OUR CLIENTS</h2>
                <p className='content para'>
                NECC is trusted by clients for reliable logistics solutions, exceptional service, on-time deliveries, and unparalleled expertise in the transportation industry.
                </p>
              </div>
            </div>
          </div>
          <div className='partner-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/gail.png' className="img-fluid " alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/havells.png' className="img-fluid " alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/hidalco.png' className="img-fluid " alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/hindustan.png' className="img-fluid " alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/Intas.png' className="img-fluid " alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/itc.png' className="img-fluid " alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/NCC.png' className="img-fluid " alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/tata-steel.png' className="img-fluid " alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/TVS.png' className="img-fluid "  alt='Transpro' />
                </div>
              </div>
              <div className='item'>
                <div className='thumb'>
                  <img src='/assets/img/partner/zuventus-healthcare-ltd.png' className="img-fluid " alt='Transpro' />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/*partner-area end*/}
    </>
  );
};

export default PartnerOne;
