import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
// import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import GetDetailsInner from "../components/GetDetailsInner";

const GetDetails = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
           {/* SupportBarOne */}
          <SupportBarOne/>
  
            {/* Navbar Three */}
            <NavbarThree/>
  
            {/* Breadcrumb */}
            {/* <Breadcrumb title={"GET DETAILS"} imgSrc={"/assets/img/banner/1.png"}/> */}

            {/* Feedback Inner */}
            <GetDetailsInner/>

            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default GetDetails;