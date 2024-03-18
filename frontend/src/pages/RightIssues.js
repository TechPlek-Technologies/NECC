import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import SupportBarOne from "../components/SupportBarOne";
import NavbarThree from "../components/NavbarThree";
import RightIssuesInner from "../components/RightIssuesInner";
// const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const RightIssues = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* SupportBarOne */}
          <SupportBarOne/>

          {/* Navbar Three*/}
          <NavbarThree />

          {/* Breadcrumb */}
          {/* <Breadcrumb title={"RIGHT ISSUES"} imgSrc={"/assets/img/banner/1.png"} /> */}

          {/* {Service Inner} */}
          <RightIssuesInner/>

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default RightIssues;
