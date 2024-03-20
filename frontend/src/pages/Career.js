import React, { Fragment, Suspense,useState,useEffect } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import CareerInner from "../components/CareerInner";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import CurrentOpeningInner from "../components/CurrentOpeningInner";
import { Link } from "react-router-dom";

const Career = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
  
            {/* Navbar Three */}
            <NavbarThree/>
  
            {/* Breadcrumb */}
            {screenSize.width > 767 && (
            <Breadcrumb title={"CAREERS"} imgSrc={"/assets/img/banner/career-in-logistic.webp"} />)}
          {screenSize.width <= 767 && (
                        <div id="bg17">
                          <div className='breadcrumb-area bg-overlay-2'>
                          <div className='container'>
                            <div className='row'>
                              <div className='col-xl-12 col-lg-12 col-md-12'>
                                <div className='breadcrumb-inner'>
                                  <div className='section-title mb-0'>
                                    <h2 className='page-title'>CAREERS</h2>
                                    <ul className='page-list'>
                                      <li>
                                        <Link to='/'>HOME</Link>
                                      </li>{" "}
                                      /<li className='ps-0'>CAREERS</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        )}
  
            {/* Service Details Inner */}
            <CareerInner/>
           
          <CurrentOpeningInner/>
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default Career;