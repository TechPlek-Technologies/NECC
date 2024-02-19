import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import ConsignmentTrackingaAndEnquiryInner from "../components/ConsignmentTrackingaAndEnquiryInner";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const ConsignmentTrackingaAndEnquiry = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* SupportBarOne */}
          <SupportBarOne/>

          {/* Navbar Three */}
          <NavbarThree/>

          {/* Breadcrumb */}
          <Breadcrumb title={"TRACKING"} imgSrc={"/assets/img/banner/consignment-tracking.webp"} />

          {/* Request Quote One */}
          <ConsignmentTrackingaAndEnquiryInner/>

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default ConsignmentTrackingaAndEnquiry;
