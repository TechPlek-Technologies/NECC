import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import ConsignmentTrackingaAndEnquiryInner from "../components/ConsignmentTrackingaAndEnquiryInner";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const SearchPopup = React.lazy(() => import("../elements/SearchPopup"));
const ConsignmentTrackingaAndEnquiry = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Search Popup */}
          <SearchPopup />

          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <Breadcrumb title={"CONSIGNMENT TRACKING AND ENQUIRY"} />

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
