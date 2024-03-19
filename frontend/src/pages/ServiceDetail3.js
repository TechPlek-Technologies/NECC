import React, { Fragment, Suspense,useState,useEffect } from "react";
import Preloader from "../elements/Preloader";
import ServiceDetailsInner3 from "../components/ServiceDetailsInner3";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));

const ServiceDetail3 = () => {
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

          {/* Navbar Three*/}
          <NavbarThree/>

          {/* Breadcrumb */}
          {screenSize.width > 767 && (
          <Breadcrumb title={"BULK MOVEMENTS"} imgSrc={"/assets/img/service-1/bulk mov/bulk-movements (2).webp"}/>)}
          {screenSize.width <= 767 && (
                        <div id="bg11">
                        </div>
                        )}


          {/* Service Details Inner */}
          <ServiceDetailsInner3 />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default ServiceDetail3;
