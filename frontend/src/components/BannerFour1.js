import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const BannerFour1 = () => {
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
  return (
    <>
      {/* header start */}
      <div className='home-area home-v2 ' style={{position:"relative"}}>
      <div className='header-inner-wrap' style={{position:"sticky", zIndex:"2", top :"20rem", left: "30rem"}}>
                        <div className='header-inner'>
                          {/* header inner */}
                          <h1 className='title animated slideInRight'>
                            World's Biggest Transporter{" "}
                          </h1>
                          <div className='btn-wrapper style-02 animated fadeInUpBig'>
                            <a href='#' className='boxed-btn'>
                              <span>Contact for transport </span>
                            </a>
                          </div>
                        </div>
                        {/* //.header inner */}
                      </div>
        <div className='header-slider header-slider2'>
          <Slider
            {...settings}
            asNavFor={state.nav2}
            ref={(slider) => (slider1 = slider)}
          >
            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/slide-v1/bg-01.png')",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url('/assets/img/slide-v1/bg-01.png')",
                }}
              >
                <div className='container'>
                  <div className='row header-height justify-content-start'>
                    <div className='col-lg-6'>
             
                    </div>
                  </div>
                </div>
              </div>
            </div>


          
          </Slider>
        </div>
        
      </div>
      {/* header end */}


      
    </>
  );
};

export default BannerFour1;
