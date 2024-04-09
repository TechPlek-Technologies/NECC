import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
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