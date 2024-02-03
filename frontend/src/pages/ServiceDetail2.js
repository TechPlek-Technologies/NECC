import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import ServiceDetailsInner2 from "../components/ServiceDetailsInner2";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));

const ServiceDetail2 = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* SupportBarOne */}
          <SupportBarOne/>

          {/* Navbar Three*/}
          <NavbarThree />

          {/* Breadcrumb */}
          <Breadcrumb title={"FULL TRUCK LOAD (FTL)"} />

          {/* Service Details Inner */}
          <ServiceDetailsInner2 />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default ServiceDetail2;
