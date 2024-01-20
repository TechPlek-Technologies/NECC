import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import SearchPopup from "../elements/SearchPopup";
import NavbarOne from "../components/NavbarOne";
import Breadcrumb from "../components/Breadcrumb";
import VisionAndQualityPolicyInner from "../components/VisionAndQualityPolicyInner";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import PartnerOne from "../components/PartnerOne";

const VisionAndQualityPolicy = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* Search Popup */}
            <SearchPopup />
  
            {/* Navbar One */}
            <NavbarOne />
  
            {/* Breadcrumb */}
            <Breadcrumb title={"VISION & QUALITY POLICY"} />
  
            {/* Service Details Inner */}
            <VisionAndQualityPolicyInner />

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
  
  export default VisionAndQualityPolicy;