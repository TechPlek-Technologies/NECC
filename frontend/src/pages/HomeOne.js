import React, { Fragment, Suspense} from "react";
import Preloader from "../elements/Preloader";
import BannerFour from "../components/BannerFour";
import NavbarOne from "../components/NavbarOne";
import CounterThree from "../components/CounterThree";
import AboutThree from "../components/AboutThree";
const FeatureOne = React.lazy(() => import("../components/FeatureOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));

const HomeOne = () => {

  return (
    <div className="home-bg">
      <Fragment> 
        <Suspense fallback={<Preloader />}>
      
          <NavbarOne/>

          <BannerFour />
        
          {/* Feature One */}
          <FeatureOne />

          <AboutThree/>

          <CounterThree/>

          {/* Partner One */}
          <PartnerOne />

          {/* Footer One */}
          <FooterOne />
          

          {/* Footer Bottom One */}
          <FooterBottomOne />
         
        </Suspense>
      </Fragment>
    </div>
  );
};

export default HomeOne;
