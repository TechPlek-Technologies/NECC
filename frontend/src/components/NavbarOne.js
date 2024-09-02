import React, { useEffect, useState } from "react";
import {
  FaPhoneAlt, FaUserAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SetSearchPopUp } from "../redux/stateSlice/clickActionSlice";
import store from "../redux/store/store";

const NavbarOne = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 300) {
        setActive(false);
      } else if (window.pageYOffset > 300) {
        setActive(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const searchPopUp = useSelector((state) => state.clickAction.searchPopUp);
  const actionSearch = () => {
    store.dispatch(SetSearchPopUp(!searchPopUp));
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };


  return (
    <>
      {/* navbar start */}
      <header className='navbar-area'>
        <div className='navbar-top'>
          <Link className='main-logo' to='/'>
            <div className='logo d-none d-xl-block'>
              <img src='/assets/img/NeccLogo.webp' alt='Transpro' />
            </div>
          </Link>
          <div className='nav-phone-wrap'>
            <FaPhoneAlt />
            +91-9711797516
          </div>
          <div className='container p-lg-0'>
            <div className='row'>
              <div className='col-lg-12 col-md-11 text-md-start text-center'>
                <ul className='topbar-right social-area text-md-end text-center'>
                  <li>
                  {/* <h4>North Eastern Carrying Corporation Ltd.</h4> */}
                  <img src='/assets/img/banner/necc-logo.png' className="img1" alt='Transpro' />
                  </li>
                </ul>
              </div>
              {/* <div className='col-lg-2 col-md-3'>
                <ul className='topbar-right social-area text-md-end text-center'>
                  <li>
                    <Link to='#'>
                      <FaFacebookF aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaTwitter aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaLinkedinIn aria-hidden='true' />
                    </Link>
                  </li>
                  <li>
                    <Link to='#'>
                      <FaInstagram aria-hidden='true' />
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <nav
          className={
            active
              ? "navbar navbar-area-1 navbar-area navbar-expand-lg sticky-active"
              : "navbar navbar-area-1 navbar-area navbar-expand-lg"
          }
        >
          <div className='container nav-container'>
            <div className='responsive-mobile-menu'>
              <button
                onClick={() => setOpen(!open)}
                className={
                  open
                    ? "menu toggle-btn d-block d-lg-none open"
                    : "menu toggle-btn d-block d-lg-none "
                }
                data-target='#transpro_main_menu'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='icon-left' />
                <span className='icon-right' />
              </button>
            </div>
            <div className='logo'>
              <Link to='/'>
                <img src='/assets/img/home-2/necclogo.png' className="img-fluid " alt='Transpro' />
              </Link>
            </div>
           
            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id='transpro_main_menu'
            >
              <ul className='navbar-nav menu-open' style={{textAlign:"right"}}>
                <li>
                  <Link to='/'>Home</Link>
                </li>
                <li className='menu-item-has-children current-menu-item'>
                  <Link to='#'>About Us</Link>
                  <ul className='sub-menu'>
                  <li>
                      <Link to='/about'>About Us</Link>
                    </li>
                    <li>
                      <Link to='/ChairmanDesk'>Chairman Desk</Link>
                    </li>
                    <li>
                      <Link to='/CorporateOverview'>Corporate Overview</Link>
                    </li>
                    <li>
                      <Link to='/History'>History</Link>
                    </li>
                    <li>
                      <Link to='/VisionAndQualityPolicy'>Vision & Quality Policy</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Investors</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/Investors'>Disclosures under Regulation 46 of SEBI (LODR)<br/>Regulations,2015</Link>
                    </li>
                    <li>
                       <Link to='/RIGHT-ISSUES/36'>Right Issues</Link>
                    </li>
                    <li>
                       <Link to='/NEWS-&-EVENTS/40'>News & Events</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to='/Network'>Network</Link>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Services</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/service'>All Service</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail1'>Part Truck Load</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail2'>Full Truck Load</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail3'>Bulk Movements</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail4'>ODC Movements</Link>
                    </li>
                    <li>
                      <Link to='/ServiceDetail5'>Warehousing & 3PL</Link>
                    </li>
                    <li>
                      <Link to='/SARCcountry'>SARC Country</Link>
                    </li>
                    <li>
                      <Link to='/Pickup&Delivery'>Pickup & Delivery</Link>
                    </li>
                  </ul>
                </li>
                {/* <li>
                  <Link to='/SiteMap'>SiteMap</Link>
                </li> */}
                <li className='menu-item-has-children current-menu-item'>
                  <Link to='#'>Contact Us</Link>
                  <ul className='sub-menu'>
                  <li>
                        <Link to='/contact'>Contact Us</Link>
                      </li>
                      <li>
                        <Link to='/Career'>Careers</Link>
                      </li>
                      <li>
                        <Link to='/DOWNLOAD/41'>Download</Link>
                      </li>
                      {/* <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                        <Link to='#'>Customer Care</Link>
                        {isDropdownOpen && (
                        <ul className="dropdown-content">
                          <li>
                          <Link to='/DOWNLOAD/41' style={{marginLeft:"-13px"}}>Download</Link>
                            </li>
                        </ul>
                         )}
                      </li> */}
                      <li>
                      <Link to='/faq'>FAQ</Link>
                      </li>
                      <li>
                        <Link to='/Feedback'>Feedback</Link>
                      </li>
                      </ul>
                </li>
                <li>
                  <Link to='/CorporateSocialResponsibility'>CSR</Link>
                </li>
                <li>
                  <Link to='/admin'><FaUserAlt style={{marginRight:"4px",marginBottom:"2px"}}/>Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {/* navbar end */}
    </>
  );
};

export default NavbarOne;
