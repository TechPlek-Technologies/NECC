import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import NeccEcomSolutionInner from "../components/NeccEcomSolutionInner";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NeccEcomSolution = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
         {/* SupportBarOne */}
         <SupportBarOne/>

          {/* Navbar Three*/}
          <NavbarThree />

          {/* Breadcrumb */}
          <Breadcrumb title={"NECC ECOM SOLUTIONS"} />

         {/* Necc Group Inner*/}
         <NeccEcomSolutionInner/>

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default NeccEcomSolution;
