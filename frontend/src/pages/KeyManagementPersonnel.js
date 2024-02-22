import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
// import PartnerOne from "../components/PartnerOne";
import KeyManagementPersonnelInner from "../components/KeyManagementPersonnelInner";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";


const KeyManagementPersonnel = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
             {/* SupportBarOne */}
          <SupportBarOne/>

            {/* Navbar Three*/}
            <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"KEY MANAGEMENT PERSONNEL"} imgSrc={"/assets/img/banner/1.png"}/>

            {/*Investors Inner */}
            <KeyManagementPersonnelInner/>

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
  
  export default KeyManagementPersonnel;