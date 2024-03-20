import React, { Fragment, Suspense,useState,useEffect } from "react";
import Preloader from "../elements/Preloader";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import NeccEcomSolutionInner from "../components/NeccEcomSolutionInner";
import { Link } from "react-router-dom";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NeccEcomSolution = () => {
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

          {/* Navbar Three*/}
          <NavbarThree />

          {/* Breadcrumb */}
          {screenSize.width > 767 && (
          <Breadcrumb title={"NECC ECOM SOLUTIONS"} imgSrc={"/assets/img/banner/ecom-solutions.webp"}/>)}
          {screenSize.width <= 767 && (
                        <div id="bg26">
                           <div className='breadcrumb-area bg-overlay-2'>
                          <div className='container'>
                            <div className='row'>
                              <div className='col-xl-12 col-lg-12 col-md-12'>
                                <div className='breadcrumb-inner'>
                                  <div className='section-title mb-0'>
                                    <h2 className='page-title'>NECC ECOM SOLUTIONS</h2>
                                    <ul className='page-list'>
                                      <li>
                                        <Link to='/'>HOME</Link>
                                      </li>{" "}
                                      /<li className='ps-0'>NECC ECOM SOLUTIONS</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </div>
                        )}

         {/* Necc Group Inner*/}
         <NeccEcomSolutionInner/>

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default NeccEcomSolution;
