import React, { Fragment, Suspense,useState,useEffect } from "react";
import Preloader from "../elements/Preloader";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
// const ContactOne = React.lazy(() => import("../components/ContactOne"));
const FaqOne = React.lazy(() => import("../components/FaqOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
// const PartnerOne = React.lazy(() => import("../components/PartnerOne"));

const Faq = () => {
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
          <Breadcrumb title={"FAQ"} imgSrc={"/assets/img/banner/FAQ (1).webp"} />)}
          {screenSize.width <= 767 && (
                        <div id="bg18">
                        </div>
                        )}

          {/* Faq One */}
          <div className='faq-area pd-top-120 pd-bottom-20'>
            <FaqOne />
          </div>

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

export default Faq;
