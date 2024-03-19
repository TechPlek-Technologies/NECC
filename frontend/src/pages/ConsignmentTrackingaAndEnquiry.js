import React, { Fragment, Suspense,useState,useEffect } from "react";
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
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  function getCurrentDimension() {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* SupportBarOne */}
          <SupportBarOne/>

          {/* Navbar Three */}
          <NavbarThree/>

          {/* Breadcrumb */}
          {screenSize.width > 767 && (
          <Breadcrumb title={"TRACKING"} imgSrc={"/assets/img/banner/consignment-tracking.webp"} />)}
          {screenSize.width <= 767 && (
                        <div id="bg21">
                        </div>
                        )}

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
