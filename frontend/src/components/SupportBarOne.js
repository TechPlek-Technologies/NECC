import React from "react";
import {
  FaBuffer,
  FaFacebookF,
  FaGlobe,
  FaInstagram,
  FaPhoneAlt,
  FaRegEnvelope,
  FaTwitter,
  FaUserAlt,
  FaYoutube,
} from "react-icons/fa";

const SupportBarOne = () => {
  return (
    <>
      {/* support bar area start */}
      <div className='support-bar navbar-fixed'>
        <div className='container'>
          <div className='row reorder-xs clearfix'>
            <div className='col-lg-6 align-self-center'>
               {/* support left start */}
              {/* <div className='support-left'>
               
                <ul>
                  <li>
                    <FaGlobe />
                    <select className='country'>
                      <option value='english selected'>English</option>
                      <option value='Arabic'>Arabic</option>
                      <option value='spanish'>Spanish</option>
                      <option value='bangla'>Bangla</option>
                    </select>
                  </li>
                  <li>
                    <a href='mailTo:example@example.com'>
                      <FaRegEnvelope />
                      co@neccgroup.com
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href='tel:+8801-728-123-456'>
                      {" "}
                      <FaPhoneAlt />
                      +011-23517516, 17, 18, 19
                    </a>
                  </li>
                </ul>
              </div> */}
              {/* support left end */}
            </div>
            <div className='col-lg-6'>
              <div className='support-right'>
                {" "}
                {/* support right start */}
                <ul>
                  {/* <li className='fare-rate-responsive'>
                    <a href='#'>
                      <FaBuffer />
                      Get a Fare Rate
                    </a>
                  </li>
                  <li>
                    <ul className='social-link'>
                      <li>
                        <a href='#' className='facebook'>
                          {" "}
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a href='#' className='twitter'>
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href='https://www.youtube.com/@necchouse4334'
                          className='youtube'
                        >
                          <FaYoutube />
                        </a>
                      </li>
                      <li>
                        <a href='#' className='instagram'>
                          <FaInstagram />
                        </a>
                      </li>
                    </ul>
                  </li> */}
                   <li>
                    <a href='mailTo:example@example.com'>
                      <FaRegEnvelope />
                      co@neccgroup.com
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href='tel:+8801-728-123-456'>
                      {" "}
                      <FaPhoneAlt />
                      +91-9711797516
                    </a>
                  </li>
                  {/* <li className='sign-nav ps-3'>
                    <a className='sen-signin' href='/admin'>
                      <FaUserAlt />
                      Sign In
                    </a>
                  </li> */}
                </ul>
              </div>
              {/* support right end */}
            </div>
          </div>
        </div>
      </div>
      {/* support bar area end */}
    </>
  );
};

export default SupportBarOne;
