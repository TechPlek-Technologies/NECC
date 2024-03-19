import React, { Fragment, Suspense,useState,useEffect  } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
// import PartnerOne from "../components/PartnerOne";
import FeedbackInner from "../components/FeedbackInner";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";

const Feedback = () => {
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
            <Breadcrumb title={"FEEDBACK"} imgSrc={"/assets/img/banner/feedback (1).webp"}/>)}
          {screenSize.width <= 767 && (
                        <div id="bg19">
                        </div>
                        )}


            {/* Feedback Inner */}
            <FeedbackInner/>

            {/* Partner One */}
            {/* <PartnerOne /> */}
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default Feedback;