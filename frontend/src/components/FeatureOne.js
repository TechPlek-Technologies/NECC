import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const FeatureOne = () => {
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
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
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
      {/* feature area start */}
      <div className='container'>
        <div className='feature-area mb-60 mbt-130'>
          <div className='row'>
            <div className='col-lg-3'>
              <div className='section-title mb-0'>
                <h4 className='subtitle'>SERVICES</h4>
                <h2 className='title'>WHAT WE OFFER</h2>
              </div>
            </div>
            <div className='col-lg-7 align-self-center'>
              <div className='section-title'>
                <p className='content left-line'>
                Our services include a wide array of freight management and customized logistics solutions backed by automated ERP-based software. We leverage our operational expertise, high-capacity transportation network, and unique technology and our team is dedicated to providing Nation Wide Transport services in Nepal, Bhutan, and India. We are among the top freight forwarding companies in India and one of the best Goods Transport Agencies in India.
                </p>
              </div>
            </div>
          </div>
          <div className='feature-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='feature-wrap bg-pink'>
                  <div className='icon'>
                    <img src='/assets/img/icon/part-truck-load.png' className="img-fluid " alt='Transpro' />
                  </div>
                  <h5>PART TRUCK LOAD (PTL)</h5>
                  <p>
                  Movement of goods/small parcels (less than 50Kg) from all over India to the eastern and northeastern parts of the country. 
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='/assets/img/icon/full-truck-load.png' className="img-fluid " alt='Transpro' />
                  </div>
                  <h5>FULL TRUCK LOAD (FTL)</h5>
                  <p>
                  One of the core offerings of NECC is Full Truck Load (FTL) services, including end-to-end multimodal transportation with loading services catered through owned and hired fleet for goods movement on a pan-India basis.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-sky'>
                  <div className='icon'>
                    <img src='/assets/img/icon/bulk.png' className="img-fluid " alt='Transpro' />
                  </div>
                  <h5>BULK MOVEMENTS</h5>
                  <p>
                  We offer services like mining logistics, chrome/iron/ manganese ore transportation from mines to processing hubs to plants and then to final customers. 
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-pink'>
                  <div className='icon'>
                    <img src='/assets/img/icon/odc.png' className="img-fluid " alt='Transpro' />
                  </div>
                  <h5>ODC MOVEMENTS</h5>
                  <p>
                  NECC safely transports Over-dimensional consignments with specialized expertise, ensuring secure delivery over long distances on a turnkey basis. 
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='/assets/img/icon/warehouse.png' className="img-fluid " alt='Transpro' />
                  </div>
                  <h5>WAREHOUSING & 3PL</h5>
                  <p>
                  We have more than 2.5 million sq ft of warehousing space all over India and provide our clients with complete solutions.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* feature area end */}
    </>
  );
};

export default FeatureOne;
