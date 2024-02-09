import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import CorporateInformationInner from "../components/CorporateInformationInner";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
import CorporateSocialResponsibilityInner from "../components/CorporateSocialResponsibilityInner";


const CorporateSocialResponsibility = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>

          {/* Navbar Three*/}
          <NavbarThree/>
            
            {/* Breadcrumb */}
            <Breadcrumb title={"CORPORATE SOCIAL RESPONSIBILITY"} imgSrc={"/assets/img/banner/1.png"}/>

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