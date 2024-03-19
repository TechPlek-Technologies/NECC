import React, { Fragment, Suspense,useState,useEffect } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
import CorporateSocialResponsibilityInner from "../components/CorporateSocialResponsibilityInner";


const CorporateSocialResponsibility = () => {
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
          <NavbarThree/>
            
            {/* Breadcrumb */}
            {screenSize.width > 767 && (
            <Breadcrumb title={"CORPORATE SOCIAL RESPONSIBILITY"} imgSrc={"/assets/img/banner/CSR (2).webp"}/>)}
          {screenSize.width <= 767 && (
                        <div id="bg20">
                        </div>
                        )}

            {/*Investors Inner */}
            <CorporateSocialResponsibilityInner/>

            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default CorporateSocialResponsibility;