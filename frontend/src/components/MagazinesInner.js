import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

const MagazinesInner = () => {
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
        arrows: true,
        infinite: false,
        fade: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
      };
  return (
    <>
     <div className='home-area home-v3 '>
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
                  backgroundImage: "url('/assets/img/Magzines/New Project (1).webp')",
                  marginLeft:"200px"
                }}
              >
               <div className='container' >
                  <div className='row header-height justify-content-start'>
                   
                    
                  </div>
                </div>

            </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url(/assets/img/Magzines/mag3.jpg)",
                }}
              >
              <div className='container col-lg-6' >
                  <div className='row header-height justify-content-start'>
                   
                    
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url(assets/img/slide-v3/bg-03.png)",
                }}
              >
                
              </div>
            </div>

            <div>
              <div
                className='header-bg'
                style={{
                  backgroundImage: "url(assets/img/slide-v3/bg-04.png)",
                }}
              >
               
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MagazinesInner;