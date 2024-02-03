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
          <Breadcrumb title={"ABOUT US"} imgSrc={"/assets/img/banner/About-us.webp"} />

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

          {/* Skill One */}
          {/* <SkillOne /> */}

          {/* Video Area One */}
          {/* <VideoAreaOne /> */}

          {/* Team One */}
          {/* <div className='pd-bottom-80'>
            <TeamOne />
          </div> */}

          {/* Testimonial Two */}
          {/* <TestimonialTwo /> */}

          {/* Partner One */}
          {/* <PartnerOne /> */}

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
