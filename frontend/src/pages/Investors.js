import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import SearchPopup from "../elements/SearchPopup";
import NavbarOne from "../components/NavbarOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import PartnerOne from "../components/PartnerOne";
import InvestorsInner from "../components/InvestorsInner";

const Investors = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* Search Popup */}
            <SearchPopup />
  
            {/* Navbar One */}
            <NavbarOne />
  
            {/* Breadcrumb */}
            <Breadcrumb title={"INVESTORS"} imgSrc={"assets/img/banner/breadcrumb.png"} />

            {/*Investors Inner */}
            <InvestorsInner/>

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
  
  export default Investors;