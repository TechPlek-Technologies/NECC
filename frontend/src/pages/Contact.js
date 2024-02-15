import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactInner = React.lazy(() => import("../components/ContactInner"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const Contact = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
         {/* SupportBarOne */}
         <SupportBarOne/>

          {/* Navbar Three */}
          <NavbarThree/>

          {/* Breadcrumb */}
          <Breadcrumb title={"CONTACT US"} imgSrc={"/assets/img/banner/contact.webp"}/>

          {/* Breadcrumb */}
          <ContactInner />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Contact;
