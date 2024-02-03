import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
// import PartnerOne from "../components/PartnerOne";
import FeedbackInner from "../components/FeedbackInner";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";

const Feedback = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
           {/* SupportBarOne */}
          <SupportBarOne/>
  
            {/* Navbar Three */}
            <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"FEEDBACK"} imgSrc={"/assets/img/banner/Feedback.webp"}/>

            {/* Feedback Inner */}
            <FeedbackInner/>

            {/* Partner One */}
            {/* <PartnerOne /> */}
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default Feedback;