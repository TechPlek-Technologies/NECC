import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import SearchPopup from "../elements/SearchPopup";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import PartnerOne from "../components/PartnerOne";
import HistoryInner from "../components/HistoryInner";
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const History = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* Search Popup */}
            <SearchPopup />
  
            {/* Navbar One */}
            <NavbarOne />
  
            {/* Breadcrumb */}
            <Breadcrumb title={"HISTORY"} />

            {/* Service Details Inner */}
            <HistoryInner/>

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
  
  export default History;
  