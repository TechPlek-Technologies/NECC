import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const FooterOne = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area'>
        <div className='container footer-top'>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='/assets/img/home-2/NeccFinalLogo.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <ul className='social-media style-border'>
                    <li>
                      <a href='https://www.facebook.com/'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='https://twitter.com/?lang=en'>
                        <FaTwitter />
                      </a>
                    </li>
                    <li>
                      <a href='https://www.whatsapp.com/'>
                        <FaWhatsapp />
                      </a>
                    </li>
                    <li>
                      <a href='https://in.linkedin.com/'>
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-3'>
              <div className='widget widget_subscribe'>
              <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='/assets/img/icon/map-marker.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>OFFICE ADDRESS:</h6>
                    <p><strong>CORPORATE OFFICE</strong></p>
                    <p>"NECC HOUSE" 9062/47,</p>
                    <p> Ram Bagh Road ,Azad Market<br/> Delhi-110006</p>
                    
                  </div>
                </div>
              </div>

            </div> 
            <div className='col-xl-4 col-md-3'>
              <div className='widget widget_subscribe'>
              <div className='single-footer-top'>
                <div className='icon'>
                    <img src='/assets/img/icon/phone.png' alt='Transpro' />
                  </div>
                  <div className='details'>
                    <h6>CONTACT US:</h6>
                    <p>co@neccgroup.com</p>
                    <p>011-23517516,17,18,19</p>
                  </div>
                </div>
              </div>

            </div> 
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterOne;
