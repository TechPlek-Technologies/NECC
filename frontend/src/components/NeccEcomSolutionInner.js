import React, { useState, useRef  } from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
import { FaPlay } from "react-icons/fa";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
const NeccEcomSolutionInner = () => {
  const [isOpen, setOpen] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Please See Documentation for more information
    emailjs
      .sendForm(
        "service_yipk4xg", //YOUR_SERVICE_ID
        "template_71bgc2q", //YOUR_TEMPLATE_ID
        form.current,
        "cwf8kROl5o3__96Ti" //YOUR_PUBLIC_KEY
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Massage Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Massage Not Sent!");
          }
        }
      );
  };
  return (
    <>
      {/* about area start */}
      <div className='about-area-2 pd-top-120 pd-bottom-100'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-5 order-lg-2'>
                <div className='about-thumb-wrap mb-lg-0 mb-4'>
                  <img
                    className='img-2'
                    src='assets/img/about/7.png'
                    alt='Transpro'
                  />
                  <div className='exprience-wrap'>
                    <img src='assets/img/about/shape-3.png' alt='Transpro' />
                    <div className='details'>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              <CountUp delay={0} start={0} end={22} />
                            </h1>
                          )
                        }
                      </TrackVisibility>
                      <p>YEARS EXPERIENCE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-7 align-self-center order-lg-1'>
                <div className='about-inner-wrap ms-0'>
                  <div className='section-title mb-0'>
                    {/* <h4 className='subtitle'>ABOUT US</h4> */}
                    <h2 className='title mb-2'>
                    ABOUT US
                    </h2>
                    <p>
                    NECC Ecom Solutions is a Division of NECC Ltd. (North Eastern Carrying Corporation Limited), and is formed to offer DEPENDABLE and unmatched logistics Services to the fast growing E-com Industry. NECC Ecom Solutions’ all endeavors is to offer services that exceed its customer expectations. We are committed to follow highest standards of ethical and best practices in our every deed.<br/>
                    NECC Ltd. (North Eastern Carrying Corporation Limited) is a Delhi-headquartered 48 year old company into the business of transportation offering services to prestigious Indian and multi-national clients. NECC Ltd has established its leadership position in the East and North-Eastern parts of India with its in-depth reach and excellent understanding of the challenges within its service area. NECC Ltd. clocked a sales of Rs 550 crores in FY2015, and is listed on NSE and BSE.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ModalVideo
          channel='youtube'
          autoplay
          isOpen={isOpen}
          videoId='XM6kTQPzzpQ'
          onClose={() => setOpen(false)}
        />
      </div>
      {/* about area end */}
      {/*wcu-area start*/}
      <div
        className='wcu-area1 bg-overlay'
        style={{ background: "url(assets/img/wcu/bg.png)" }}
      >
        {/* <img className='img-1' src='assets/img/wcu/1.png' alt='Transpro' /> */}
        <img className='img-2' src='assets/img/wcu/2.png' alt='Transpro' />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-6 order-lg-2'>
              <div className='video-thumb-wrap'>
                <img src='assets/img/wcu/video.png' alt='Transpro' />
                <span
                  className='video-play-btn cursor-pointer'
                  data-effect='mfp-zoom-in'
                  onClick={() => setOpen(true)}
                >
                  <FaPlay />
                </span>
              </div>
            </div>
            <div className='col-xl-5 col-lg-6 order-lg-1'>
              <div className='section-title style-white mb-0'>
                {/* <h4 className='subtitle style-2'>WHY CHOOSE US</h4> */}
                <h2 className='title'>Services</h2>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-1.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>PRE-PAID</h6>
                  <p>
                  NECC Ecom Solutions provide delivery services of those shipments wherein the price/value is paid by the consignee at the time of placing the order.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-2.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>CASH ON DELIVERY</h6>
                  <p>
                  NECC Ecom Solutions provide delivery services of those shipments wherein the price/ value of the shipment is collected from the consignee at the time of delivery of the shipment and the same is remitted to the customer within the agreed timeline.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-3.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>REVERSE LOGISTICS</h6>
                  <p>
                  NECC Ecom Solutions provide reverse logistics services wherein the shipment is collected from the consumers’ doorstep and is delivered to the customers’ warehouse.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-3.png' alt='Transpro' />
                </div>
                <div className='details'>
                  <h6>VAD (Value Added Delivery)</h6>
                  <p>
                  NECC Ecom Solutions offers value added delivery services like Sunday/ Holiday delivery, Delivery outside Service Area, Delivery in Customized Uniforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*wcu-area end*/}
      {/*partner-area start*/}
      <div className='partner-area pd-top-45 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='section-title text-center'>
                {/* <h4 className='subtitle'>HAPPY CLIENTS</h4> */}
                <h2 className='title'>OUR NETWORK/REACH</h2>
                <p className='content'>
                NECC Ecom Solutions offers last mile delivery services for the E-com companies. Presently, we offer delivery services in Delhi NCR, and plan to expand delivery services in a phased manner in Northern States, Eastern region, and the North-Eastern belt of India.
                </p>
              </div>
            </div>
            <img src='assets/img/contact/1.png' alt='Transpro' />
          </div>
        </div>
      </div>
      {/*partner-area end*/}
      {/*contact-area start*/}
      <div
            className='call-to-contact-area pd-top-80 pd-bottom-20'
            style={{ background: "#F9F9F9" }}
          >
        <div>
            <img src='assets/img/contact/1.png' alt='Transpro' />
            <div className='container'>
            <div className='row justify-content-end'>
                <div className='col-xl-6 col-lg-7'>
                <div className='cta-inner-wrap1'>
                    <div className='section-title style-white mb-0'>
                    <h4 className='subtitle style-2'>CAREER WITH US</h4>
                    {/* <h2 className='title'>
                    CAREER WITH US
                    </h2> */}
                    </div>
                    <div className='single-cta-wrap1'>
                    <div className='details'>
                        <h6>We firmly believe that the success of any business depends on its workforce. A motivated, dedicated and satisfied team is critical to the achievement of any Corporate Objective. With that in mind, we always look forward to have enthusiastic and hard-working candidates on-board with us. If you want to be part of the journey to success with us, kindly mail your CV at hrecom@neccgroup.com. We shall revert back as and when we find a suitable opportunity for you with NECC Ecom Solutions.</h6>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
      {/*contact-area end*/}
      {/*request-quote-area start*/}
      {/* <div className='request-quote-area  pd-top-45'>
        <div className='container'>
          <div className='request-quote-inner'>
            <ul className='nav nav-pills' id='pills-tab' role='tablist'>
              <li className='nav-item' role='presentation'>
                <button
                  className='nav-link active'
                  id='pills-home-tab'
                  data-bs-toggle='pill'
                  data-bs-target='#pills-home'
                  type='button'
                  role='tab'
                  aria-controls='pills-home'
                  aria-selected='true'
                >
                  <img src='assets/img/request-quote/1.png' alt='Transpro' />
                  CONTACT U
                </button>
              </li>
            </ul>
            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='pills-home'
                role='tabpanel'
                aria-labelledby='pills-home-tab'
              >
                <div className='row'>
                  <div className='col-lg-8'>
                    <h6 className='subtitle'>Personal Information :</h6>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Name' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Your Email' />
                        </div>
                      </div>
                      <div className='col-lg-4'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Phone Number' />
                        </div>
                      </div>
                    </div>
                    <h6 className='subtitle mt-4'>Shipment Information :</h6>
                    <div className='row'>
                      <div className='col-lg-4'>
                        <div className='single-select-inner style-border'>
                          <select className='single-select'>
                            <option>G.R. Number</option>
                            <option value={1}>Some option</option>
                            <option value={2}>Another option</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-lg-8'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='G.R. Number' />
                        </div>
                      </div>
                      
                      <div className='col-lg-4'>
                        <div className='single-select-inner style-border'>
                          <select className='single-select'>
                            <option>Query Details</option>
                            <option value={1}>Some option</option>
                            <option value={2}>Another option</option>
                          </select>
                        </div>
                      </div>
  
                      <div className='col-lg-8'>
                        <div className='single-input-inner style-border'>
                          <input type='text' placeholder='Query Details' />
                        </div>
                      </div>
                    </div>
                   
                    <a className='btn btn-base w-100' href='#'>
                      SUBMIT
                    </a>
                  </div>
                  <div className='col-lg-4 align-self-end'>
                    <div
                      className='quote-wrap'
                      style={{ background: "var(--main-color)" }}
                    >
                      <h4>How Can We Help You!</h4>
                      <p>
                      Click the button below to follow, we will get back to you very soon.
                      </p>
                      <Link className='btn btn-white' to='mailto:customercare1@neccgroup.com'>
                        CONTACT US
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center'>
            <div className='col-lg-7'>
              <form
                className='contact-form text-center'
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>CONTACT US</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaUserAlt />
                      </label>
                      <input
                        type='text'
                        placeholder='Your name'
                        name='user_name'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaRegEnvelope />
                      </label>
                      <input
                        type='text'
                        placeholder='Your email'
                        name='user_email'
                      />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaCalculator />
                      </label>
                      <input type='text' placeholder=' Phone number' />
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-select-inner'>
                      <label>
                        <FaFileAlt />
                      </label>
                      <select className='single-select'>
                        <option>Subject</option>
                        <option value={1}>Some option</option>
                        <option value={2}>Another option</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='single-input-inner'>
                      <label>
                        <FaPencilAlt />
                      </label>
                      <textarea
                        placeholder='Write massage'
                        defaultValue={""}
                        id='massage'
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <button className='btn btn-base' type='submit'>
                      {" "}
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-5'>
              <div className='contact-information-wrap'>
                <h3>CONTACT INFORMATION</h3>
                <div className='single-contact-info-wrap'>
                  <h6>Contact Number:</h6>
                  <div className='media'>
                    <div className='icon'>
                      <FaPhoneAlt />
                    </div>
                    <div className='media-body'>
                      <p>011-23517516-19</p>
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap'>
                  <h6>Mail Address:</h6>
                  <div className='media'>
                    <div className='icon' style={{ background: "#080C24" }}>
                      <FaRegEnvelope />
                    </div>
                    <div className='media-body'>
                      <p>ccdel@neccgroup.com</p>
                      <p>vinod.s@neccgroup.com</p>
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap mb-0'>
                  <h6>Office Location:</h6>
                  <div className='media'>
                    <div className='icon' style={{ background: "#565969" }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className='media-body'>
                      <p>NECC House, 9062/47, Ram Bagh Road,</p>
                      <p>Azad Market, Delhi-110006</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*request-quote-area end*/}
    </>
  );
};

export default NeccEcomSolutionInner;
