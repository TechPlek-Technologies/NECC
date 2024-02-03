import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import ChairmanDeskInner from "../components/ChairmanDeskInner";
// import PartnerOne from "../components/PartnerOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";

const ChairmanDesk = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
  
            {/* Navbar Three */}
            <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"CHAIRMAN DESK"} />

            {/* Service Details Inner */}
            <ChairmanDeskInner/>

            {/* Partner One */}
            {/* <PartnerOne/> */}
        
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>
        </Fragment>
      </>
    );
  };
  
  export default ChairmanDesk;
  