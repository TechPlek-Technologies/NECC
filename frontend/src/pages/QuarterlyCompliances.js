import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
import QuarterlyCompliancesInner from "../components/QuarterlyCompliancesInner";


const QuarterlyCompliances = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
             {/* SupportBarOne */}
          <SupportBarOne/>

            {/* Navbar Three*/}
            <NavbarThree/>

            {/*Investors Inner */}
            <QuarterlyCompliancesInner/>
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default QuarterlyCompliances;