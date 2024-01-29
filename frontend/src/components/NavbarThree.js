import React, { useState } from "react";

import { Link } from "react-router-dom";
const NavbarThree = () => {
  const [open, setOpen] = useState(false);

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
  return (
    <>
      {/* navbar start */}
      <header className='navbar-are'>
        <nav
          className={
            "navbar navbar-area-1  navbar-area-3 navbar-area navbar-expand-lg"
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
                <img src='assets/img/logo-2.png' alt='Transpro' />
              </Link>
            </div>
            <div className='nav-left-part'></div>

            <div
              className={
                open
                  ? "collapse navbar-collapse sopen"
                  : "collapse navbar-collapse"
              }
              id='transpro_main_menu'
            >
              <ul className='navbar-nav menu-open'>
              <li className='menu-item-has-children current-menu-item'>
                  <Link to='/'>Home</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children current-menu-item'>
                  <Link to='/about'>About Us</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/ChairmanDesk'>Chairman Desk</Link>
                    </li>
                    <li>
                      <Link to='/CorporateOverview'>Corporate Overview</Link>
                    </li>
                    <li>
                      <Link to='/'>History</Link>
                    </li>
                    <li>
                      <Link to='/VisionAndQualityPolicy'>Vision & Quality Policy</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Services</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/service'>Service</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children'>
                  <Link to='#'>Investors</Link>
                  <ul className='sub-menu'>
                    <li>
                      <Link to='/Investors'>Disclosures under Regulation 46 of SEBI (LODR)<br/>Regulations,2015</Link>
                    </li>
                  </ul>
                </li>
                 <li className='menu-item-has-children'>
                  <Link to='#'>SiteMap</Link>
                  <ul className='sub-menu'>
                    <li>
                    <Link to='/SiteMap'>SiteMap</Link>
                    </li>
                  </ul>
                </li>
                <li className='menu-item-has-children current-menu-item'>
                  <Link to='/contact'>Contact Us</Link>
                  <ul className='sub-menu'>
                      <li>
                        <Link to='/Career'>Careers</Link>
                      </li>
                      <li>
                        <Link to='/'>Customer Care</Link>
                      </li>
                      <li>
                      <Link to='/faq'>FAQ</Link>
                      </li>
                      <li>
                        <Link to='/Feedback'>Feedback</Link>
                      </li>
                      </ul>
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

export default NavbarThree;
