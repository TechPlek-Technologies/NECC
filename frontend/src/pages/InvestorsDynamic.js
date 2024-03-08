import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import CorporateInformationInner from "../components/CorporateInformationInner";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
import InvestorsDynamicInner from "../components/InvestorsDynamicInner";
import { useParams } from "react-router-dom";

function replaceSpacesWithHyphensInver(inputString) {
    // Use the replace method with a regular expression to replace spaces with hyphens
    let replacedString = inputString.replace(/-/g, " ");
    return replacedString;
}

const InvestorsDynamic = () => {
  let { pagename,id } = useParams();

    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
            {/* SupportBarOne */}
          <SupportBarOne/>

          {/* Navbar Three*/}
          <NavbarThree/>
            
            {/* Breadcrumb */}
            <Breadcrumb title={replaceSpacesWithHyphensInver(pagename.toLocaleUpperCase())} imgSrc={"/assets/img/banner/1.png"}/>

            {/*Investors Inner */}
            <InvestorsDynamicInner/>

            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default InvestorsDynamic;