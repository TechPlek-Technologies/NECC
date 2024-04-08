import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import InvestorFeedbackInner from "../components/InvestorFeedbackInner";

const InvestorFeedback = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
           {/* SupportBarOne */}
          <SupportBarOne/>
  
            {/* Navbar Three */}
            <NavbarThree/>

            {/* Feedback Inner */}
            <InvestorFeedbackInner/>

            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default InvestorFeedback;