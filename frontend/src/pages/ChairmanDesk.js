import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import SearchPopup from "../elements/SearchPopup";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import ChairmanDeskInner from "../components/ChairmanDeskInner";
import PartnerOne from "../components/PartnerOne";
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const ChairmanDesk = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* Search Popup */}
            <SearchPopup />
  
            {/* Navbar One */}
            <NavbarOne />
  
            {/* Breadcrumb */}
            <Breadcrumb title={"CHAIRMAN DESK"} />

            {/* Service Details Inner */}
            <ChairmanDeskInner/>

            {/* Partner One */}
            <PartnerOne/>
        
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>
        </Fragment>
      </>
    );
  };
  
  export default ChairmanDesk;
  