import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

const TestimonialOne = () => {
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
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
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
      {/* testimonial area start */}
      <div className='testimonial-area pd-top-115 pd-bottom-45'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title text-center mb-0'>
                <h4 className='subtitle'>TESTIMONIALS</h4>
                <h2 className='title'>Hear What Our Customers Have to Say</h2>
                <p className='content para'>
                Discover firsthand experiences from our satisfied clients, showcasing our dedication, reliability, and excellence in delivering top-notch logistics solutions.
                </p>
              </div>
            </div>
          </div>
          <div className='testimonial-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “As a Goods Transport Agency, NECC's services are unparalleled. Their commitment to timely deliveries and customer satisfaction is commendable.”
                  </p>
                  <div className='client-wrap'>
                    {/* <div className='thumb'>
                      <img src='assets/img/testimonial/1.png' alt='Transpro' />
                    </div> */}
                    <div className='details'>
                      <h5>Emily Jones</h5>
                      <p>Supply Chain Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “NECC is undoubtedly one of the best freight forwarding companies in India. Their expertise and attention to detail make them our go-to logistics partner.”
                  </p>
                  <div className='client-wrap'>
                    {/* <div className='thumb'>
                      <img src='assets/img/testimonial/2.png' alt='Transpro' />
                    </div> */}
                    <div className='details'>
                      <h5>David Johnson</h5>
                      <p>Operations Director</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “Choosing NECC as our logistics partner was one of the best decisions we made. Their dedication to excellence sets them apart from other freight forwarders.”
                  </p>
                  <div className='client-wrap'>
                    {/* <div className='thumb'>
                      <img src='assets/img/testimonial/3.png' alt='Transpro' />
                    </div> */}
                    <div className='details'>
                      <h5>Sarah Brown</h5>
                      <p>Procurement Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='single-testimonial-wrap'>
                  <div className='icon'>
                    <img
                      src='assets/img/testimonial/quote.png'
                      alt='Transpro'
                    />
                  </div>
                  <p>
                    “NECC has consistently delivered service as a Goods Transport Agency. Their professionalism make them a trusted partner for our transportation needs.”
                  </p>
                  <div className='client-wrap'>
                    {/* <div className='thumb'>
                      <img src='assets/img/testimonial/2.png' alt='Transpro' />
                    </div> */}
                    <div className='details'>
                      <h5>Michael Davis</h5>
                      <p>Logistics Coordinator</p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* testimonial area end */}
    </>
  );
};

export default TestimonialOne;
