import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import FooterOne from "../components/FooterOne";
import FooterBottomOne from "../components/FooterBottomOne";
import PartnerOne from "../components/PartnerOne";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
import BoardOfDirectorsInner from "../components/BoardOfDirectorsInner";


const BoardOfDirectors = () => {
    return (
      <>
        <Fragment>
          <Suspense fallback={<Preloader />}>
             {/* SupportBarOne */}
          <SupportBarOne/>

            {/* Navbar Three*/}
            <NavbarThree/>
  
            {/* Breadcrumb */}
            <Breadcrumb title={"BOARD OF DIRECTORS"} />

            {/*Investors Inner */}
            <BoardOfDirectorsInner/>

            {/* Partner One */}
            <PartnerOne />
  
            {/* Footer One */}
            <FooterOne />
  
            {/* Footer Bottom One */}
            <FooterBottomOne />
          </Suspense>{" "}
        </Fragment>
      </>
    );
  };
  
  export default BoardOfDirectors;