import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import CustomerCareInner from "../components/CustomerCareInner";

const CustomerCare = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>
  
           {/* Navbar Three */}
           <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"CUSTOMER CARE"} imgSrc={"/assets/img/banner/customer-care.jpg"} />

            {/*Investors Inner */}
            <CustomerCareInner/>
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default CustomerCare;