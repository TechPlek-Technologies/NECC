import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import CorporateOverviewInner from "../components/CorporateOverviewInner";
// import PartnerOne from "../components/PartnerOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";

const CorporateOverview = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
           {/* Navbar Three */}
           <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"CORPORATE OVERVIEW"} imgSrc={"/assets/img/banner/corporate-overview.webp"} />

            {/* Service Details Inner */}
            <CorporateOverviewInner/>
  
            {/* Partner One */}
            {/* <PartnerOne /> */}
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>
        </Fragment>
      </>
    );
  };
  
  export default CorporateOverview;
  