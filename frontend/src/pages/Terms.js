import React, { Fragment, Suspense } from 'react'
import SupportBarOne from '../components/SupportBarOne'
import NavbarThree from '../components/NavbarThree'
import FooterOne from '../components/FooterOne'
import FooterBottomOne from '../components/FooterBottomOne'
import Preloader from '../elements/Preloader'
import TermsInner from '../components/TermsInner'

const Terms = () => {
  return (
    <>
    <Fragment>
      <Suspense fallback={<Preloader />}>
        {/* SupportBarOne */}
      <SupportBarOne/>

       {/* Navbar Three */}
       <NavbarThree/>

       <TermsInner/>

        {/* Footer One */}
        <FooterOne />

        {/* Footer Bottom One */}
        <FooterBottomOne />
      </Suspense>{" "}
    </Fragment>
  </>
  )
}

export default Terms
