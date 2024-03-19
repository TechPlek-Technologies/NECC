import React, { Fragment, Suspense,useState,useEffect } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import CorporateInformationInner from "../components/CorporateInformationInner";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";


const CorporateInformation = () => {
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
            <Breadcrumb title={"CORPORATE INFORMATION"} imgSrc={"/assets/img/banner/corporate-information.jpg"}/>)}
          {screenSize.width <= 767 && (
                        <div id="bg30">
                        </div>
                        )}

            {/*Investors Inner */}
            <CorporateInformationInner/>

            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default CorporateInformation;