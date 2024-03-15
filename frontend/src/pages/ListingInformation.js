import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import NavbarThree from "../components/NavbarThree";
import SupportBarOne from "../components/SupportBarOne";
import ListingInformationInner from "../components/ListingInformationInner";
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const ListingInformation = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
         {/* SupportBarOne */}
         <SupportBarOne/>

          {/* Navbar Three*/}
          <NavbarThree />

         {/* Necc Group Inner*/}
         <ListingInformationInner/>

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default ListingInformation;
