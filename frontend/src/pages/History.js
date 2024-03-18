import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import HistoryInner from "../components/HistoryInner";

const History = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
           {/* Navbar Three */}
           <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"HISTORY"} imgSrc={"/assets/img/banner/History.webp"} className="img-fluid"/>

            {/* Service Details Inner */}
            <HistoryInner/>

  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>
        </Fragment>
      </>
    );
  };
  
  export default History;
  