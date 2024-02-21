import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import NetworkInner from "../components/NetworkInner";

const Network = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
  
           {/* Navbar Three */}
           <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"NETWORK"} imgSrc={"/assets/img/banner/1.png"} />

            {/*Investors Inner */}
            <NetworkInner/>
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default Network;