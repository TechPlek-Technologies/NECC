import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import NavbarThree from "../components/NavbarThree";
import NeccGroupInner from "../components/NeccGroupInner";
import SupportBarOne from "../components/SupportBarOne";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NeccGroup = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
         {/* SupportBarOne */}
         <SupportBarOne/>

          {/* Navbar Three*/}
          <NavbarThree />

          {/* Breadcrumb */}
          <Breadcrumb title={"NECC GROUP"} />

         {/* Necc Group Inner*/}
         <NeccGroupInner/>

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default NeccGroup;
