import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import PartnerOne from "../components/PartnerOne";
import CareerInner from "../components/CareerInner";
// import CareerOneAll from "../components/CareerOneAll";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import CurrentOpeningInner from "../components/CurrentOpeningInner";

const Career = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
  
            {/* Navbar Three */}
            <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"CAREERS"} />
  
            {/* Service Details Inner */}
            <CareerInner/>

            {/* Service One All */}
          {/* <CareerOneAll/> */}
          <CurrentOpeningInner/>

            {/* Partner One */}
            <PartnerOne />
  
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