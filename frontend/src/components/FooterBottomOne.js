import React from "react";

const FooterBottomOne = () => {
  return (
    <>
      {/* footer-bottom area start */}
      <div className='footer-bottom-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 text-lg-start text-center'>
              <div className='copyright-area'>
                <p>
                  © Copyright 2024 By <a href='/'>NECC</a>, All right
                  reserved. Developed by <a href='https://www.techplek.com/'>TechPlek Technologies</a>.
                </p>
              </div>
            </div>
            <div className='col-lg-4 text-lg-end text-center'>
              <ul>
                {/* <li>
                  <a href='#' style={{color:"#9583d9"}}>Terms &amp; Condition</a>
                </li> */}
                <li>
                  <a href='/SiteMap' style={{color:"#9583d9"}}>SiteMap</a>
                </li>
                {/* <li>
                  <a href='#' style={{color:"#9583d9"}}>Privacy &amp; Policy</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer-bottom area end */}
    </>
  );
};

export default FooterBottomOne;
