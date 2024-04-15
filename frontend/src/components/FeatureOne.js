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
          slidesToShow: 5,
          adaptiveHeight:false,
          arrows: false,
          vertical: true,
          verticalSwiping: true,
          autoplay: false,

        },
      },
    ],
  };
  return (
    <>
      {/* feature area start */}
      <div className="container">
        <div className="feature-area mb-60 mbt-130">
          <div className="row">
            <div className="col-lg-3">
              <div className="section-title mb-0">
                <h4 className="subtitle">SERVICES</h4>
                <h2 className="title">WHAT WE OFFER</h2>
              </div>
            </div>
            <div className="col-lg-7 align-self-center">
              <div className="section-title">
                <p className="content left-line">
                  Our services include a wide array of freight management and
                  customized logistics solutions backed by automated ERP-based
                  software. We leverage our operational expertise, high-capacity
                  transportation network, and unique technology and our team is
                  dedicated to providing Nation Wide Transport services in
                  India, Nepal, Bhutan & Bangladesh. We are among the top
                  Logistics / Goods Transport Company in India.
                </p>
              </div>
            </div>
          </div>
          <div className="feature-slider owl-carousel">
            <Slider {...settings}>
              <div className="item">
                <div className="feature-wrap bg-pink">
                  <div className="icon">
                    <img
                      src="/assets/img/icon/part-truck-load.png"
                      className="img-fluid "
                      alt="Transpro"
                    />
                  </div>
                  <h5>PART TRUCK LOAD (PTL)</h5>
                  <p>
                    NECC specializes in movement of PTL/Small parcels from all
                    over India to the Eastern & North Eastern parts of the
                    country and also to Nepal / Bhutan / Bangladesh. We also do
                    PTL movements across the country.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="feature-wrap bg-ash">
                  <div className="icon">
                    <img
                      src="/assets/img/icon/full-truck-load.png"
                      className="img-fluid "
                      alt="Transpro"
                    />
                  </div>
                  <h5>FULL TRUCK LOAD (FTL)</h5>
                  <p>
                    NECC offers Full Truck Load (FTL) services, including
                    end-to-end multimodal transportation with loading /
                    unloading services catered through owned and hired fleet/
                    Containers for movement of Goods on a pan-India basis and
                    also to Nepal / Bhutan / Bangladesh with custom clearance.
                    We evaluate individual business needs to match that with a
                    carrier that can accommodate the shipment deadline in the
                    most cost-effective way.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="feature-wrap bg-sky">
                  <div className="icon">
                    <img
                      src="/assets/img/icon/bulk.png"
                      className="img-fluid "
                      alt="Transpro"
                    />
                  </div>
                  <h5>BULK MOVEMENTS</h5>
                  <p>
                    NECC offers services for mining logistics of products like
                    Iron Ore/Chrome Ore/Maganise etc. for transportation from
                    mines to processing hubs/plants/Siding and then to final
                    destination.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="feature-wrap bg-pink">
                  <div className="icon">
                    <img
                      src="/assets/img/icon/odc.png"
                      className="img-fluid "
                      alt="Transpro"
                    />
                  </div>
                  <h5>ODC MOVEMENTS</h5>
                  <p>
                    NECC safely transports Over-dimensional consignments with
                    specialized expertise, ensuring secure delivery over long
                    distances on a turnkey basis.
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="feature-wrap bg-ash">
                  <div className="icon">
                    <img
                      src="/assets/img/icon/warehouse.png"
                      className="img-fluid "
                      alt="Transpro"
                    />
                  </div>
                  <h5>WAREHOUSING & 3PL</h5>
                  <p>
                    NECC has more than 2.5 million square feet of warehousing
                    space all over India and provide complete solutions to our
                    clients.
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
