import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import AboutTwo from "../components/AboutTwo";
import WhyChooseUsTwo from "../components/WhyChooseUsTwo";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const About = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* SupportBarOne */}
          <SupportBarOne/>

          {/* Navbar Three*/}
          <NavbarThree />

          {/* Breadcrumb */}
          <Breadcrumb title={"ABOUT US"} imgSrc={"/assets/img/banner/About-us (1) (1).webp"}/>

          {/* About One */}
          {/* <div className='pd-top-120 pd-bottom-120'>
            <AboutOne />
          </div> */}

          {/* About Two */}
          <AboutTwo/>

          {/* Why Choose Us Two */}
          <WhyChooseUsTwo />

          {/* Counter One */}
          {/* <div className='fact-area' style={{ background: "#f9f9f9" }}>
            <CounterOne />
          </div> */}

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default About;
