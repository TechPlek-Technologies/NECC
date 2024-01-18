import React, { useState } from "react";
import {
  FaArrowRight,
  FaPhoneAlt,
  FaPlay,
  FaRegEnvelope,
  FaRegFileAlt,
  FaRegFilePdf,
  FaSearch,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const ChairmanDeskInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* service area start */}
      <div className='service-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/7.png' alt='Transpro' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-1.png'
                      alt='Transpro'
                    />
                  </div>
                </div>
                <h2>CHAIRMAN DESK</h2>
                <p>
                We being a premier cargo transportation and solution provider in India, have set a goal to provide seamless transit of material across national and international borders using multimode solutions for a speedier movement at the lowest cost.If one has to name some domestic cargo and Logistics companies, which are in aggressive mode in expanding their operations all over India, the name of NECC GROUP of Companies should certainly appear in a prominent way in the list.
                </p>
                <p>
                Established in the year 1968, North Eastern Carrying Corporation Limited (NECC) is one of the leading logistic solution providers with offices  spread across all over India, Nepal & Bhutan. NECC offers a wide range of logistics related solutions to meet every customer requirement. NECC offers services for small parcels, Full Truck Load consignments, project consignments and over dimensional consignment (ODC). It also provides containerized movement of cargo, packing and moving, warehousing, 3PL and storage facilities all under one roof. The company has chalked out short to medium term plans for expansion as we Envisage greater opportunity unfolding in India.
                </p>
                <p>
                We leverage our operational expertise, technology and a high capacity network of transportation vehicles, to identify logistics problems and provided end-to-end supply chain solution from a unique perspective- “clients”.
                </p>
                <p>
                Since inception, NECC has been providing its clients with the flexibility, responsiveness and services they deserve, using our deep operating knowledge to create solutions as unique as per our client’s needs. However, keeping in mind the changing demands and the global economic landscape, NECC has invested in people, new technologies and equipments that ensure that its clients achieve their desired goals. “Team NECC is committed to exceed clients expectations”.  That is why many of our original clients rely on us even now with longer associations.
                </p>
                <h6>Sunil Kumar Jain</h6>
                <h6>CMD, NECC Ltd.</h6>
                {/* <div className='row'>
                  <div className='col-lg-6 align-self-center'>
                    <div className='thumb mb-lg-0 mb-4'>
                      <img src='assets/img/service/8.png' alt='Transpro' />
                    </div>
                  </div>
                  <div className='col-lg-6 align-self-center'>
                    <h4 className='subtitle'>Global Transaction Advisory</h4>
                    <ul className='list-inner-wrap'>
                      <li> Customer engagement matters</li>
                      <li> The Love Boat promis someg for Plan</li>
                      <li> Research beyond the business plan</li>
                      <li> Logistics ground in Asia Pacific</li>
                      <li> Logistics ground in South America</li>
                      <li> Transportation across Europe</li>
                    </ul>
                  </div>
                </div> */}
                {/* <h4 className='subtitle mt-3'>How It Works</h4> */}
                {/* <p>
                  Holisticly conceptualize go forward customer service rather
                  than transparent infomediaries. Continually envisioneer 2.0
                  potentialities without team building processes. Dramatically
                  pursue client-centric human capital before client-centered
                  sources.
                </p> */}
                {/* <div className='video-thumb-wrap pt-1 pb-4'>
                  <img src='assets/img/service/9.png' alt='Transpro' />
                  <span
                    className='video-play-btn cursor-pointer'
                    data-effect='mfp-zoom-in'
                    onClick={() => setOpen(true)}
                  >
                    <FaPlay />
                  </span>
                </div> */}
                {/* <p className='last-para'>
                  Dramatically morph extensive users before market-driven
                  partnerships. Conveniently initiate best-of-breed resources
                  and enabled architectures.
                </p> */}
              </div>
            </div>
            {/* <div className='col-lg-4'>
              <div className='sidebar-area'>
                <div className='widget widget_search'>
                  <form className='search-form'>
                    <div className='form-group'>
                      <input type='text' placeholder='Search here...' />
                    </div>
                    <button className='submit-btn' type='submit'>
                      <FaSearch />
                    </button>
                  </form>
                </div>
                <div className='widget widget_catagory'>
                  <h4 className='widget-title'>
                    SERVICE LIST
                    <span className='dot' />
                  </h4>
                  <ul className='catagory-items'>
                    <li>
                      <Link to='/blog'>
                        Air Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Sea Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Warehouse{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Road Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Train Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Land Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='widget widget_download'>
                  <h4 className='widget-title'>
                    DOWNLOAD BROCHURE
                    <span className='dot' />
                  </h4>
                  <ul className='download-items'>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf /> DOWNLOAD PDF
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        {" "}
                        <FaRegFileAlt /> DOWNLOAD DOC{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  className='widget widget_support text-center mb-0'
                  style={{
                    background: "url(assets/img/widget/support-bg.png)",
                  }}
                >
                  <h4 className='widget-title style-white'>
                    24/7 ONLINE SUPPORT <span className='dot' />
                  </h4>
                  <p>
                    Assertively pontificate high standards in scenarios rather
                    than sustainable system. Interactively empower.
                  </p>
                  <p className='contact'>
                    <FaRegEnvelope />
                    info@transpro.com
                  </p>
                  <p className='contact mb-0'>
                    <FaPhoneAlt />
                    +1 800-435-7106
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* service area end */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
       />
    </>
  );
};

export default ChairmanDeskInner;
