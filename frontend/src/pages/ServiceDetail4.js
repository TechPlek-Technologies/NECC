import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import ServiceDetailsInner4 from "../components/ServiceDetailsInner4";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));

const ServiceDetail4 = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* SupportBarOne */}
          <SupportBarOne/>

          {/* Navbar Three*/}
          <NavbarThree/>

          {/* Breadcrumb */}
          <Breadcrumb title={"ODC MOVEMENTS"} imgSrc={"/assets/img/service-1/odc/ODC-movements.webp"}/>

          {/* Service Details Inner */}
          <ServiceDetailsInner4 />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default ServiceDetail4;
