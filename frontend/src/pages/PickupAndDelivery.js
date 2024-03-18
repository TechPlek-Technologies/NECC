import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import PickupAndDeliveryInner from "../components/PickupAndDeliveryInner";

const PickupAndDelivery = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
           {/* Navbar Three */}
           <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"PICKUP & DELIVERY"} imgSrc={"/assets/img/banner/pick-and-drop2.jpg"} className="img-fluid"/>

            {/* Service Details Inner */}
            <PickupAndDeliveryInner/>

  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>
        </Fragment>
      </>
    );
  };
  
  export default PickupAndDelivery;
  