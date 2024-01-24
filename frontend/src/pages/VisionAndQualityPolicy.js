import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import VisionAndQualityPolicyInner from "../components/VisionAndQualityPolicyInner";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";

const VisionAndQualityPolicy = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
  
            {/* Navbar Three */}
            <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"VISION & QUALITY POLICY"} />
  
            {/* Service Details Inner */}
            <VisionAndQualityPolicyInner />

            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default VisionAndQualityPolicy;