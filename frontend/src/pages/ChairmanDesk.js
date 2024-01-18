import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import SearchPopup from "../elements/SearchPopup";
// import ServiceDetailsInner from "../components/ServiceDetailsInner";
// import PartnerOne from "../components/PartnerOne";
import FooterBottomOne from "../components/FooterBottomOne";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import ChairmanDeskInner from "../components/ChairmanDeskInner";
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const ChairmanDesk = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* Search Popup */}
            <SearchPopup />
  
            {/* Navbar One */}
            <NavbarOne />
  
            {/* Breadcrumb */}
            <Breadcrumb title={"CHAIRMAN DESK"} />

            {/* Service Details Inner */}
            <ChairmanDeskInner/>
  
            {/* About One */}
            {/* <div className='pd-top-120 pd-bottom-120'>
              <AboutOne />
            </div> */}
  
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
  
  export default ChairmanDesk;
  