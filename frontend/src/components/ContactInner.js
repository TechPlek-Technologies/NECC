import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactInner = () => {
  const form = useRef();
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
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
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false} />
      {/* contact area start */}
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center'>
            <div className='col-lg-7'>
              <form
                className='contact-form text-center'
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>GET A QUOTE</h3>
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
                <h3>CORPORATE OFFICE</h3>
                <div className='single-contact-info-wrap mb-0'>
                  <h6>DELHI</h6>
                  <div className='media'>
                    <div className='icon' style={{ background: "#565969" }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className='media-body'>
                      <p>"NECC HOUSE" 9062/47,</p>
                      <p>Ram Bagh Road</p>
                      <p>Azad Market</p>
                      <p>Delhi-110006</p>
                      <p>Ph : 011-23517516, 17, 18, 19</p>
                      <p>Tolfree: 1800 11 7080 & 9711797516</p>
                      <p>E-mail : co@neccgroup.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact area end */}
      <div className='service-area style-2 pd-bottom-80'>
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='section-title text-center'>
                {/* <h4 className='subtitle'>SERVICES</h4> */}
                <h2 className='title'>REGIONAL OFFICES</h2>
              </div>
            </div>
          </div>
        <div className='row' >
          <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='details'>
                  <h5>MUMBAI</h5>
                  <p>
                  "Navratan"<br/>
                  2, Mezzanine Floor,<br/>
                  69, P.D' Mellow Road ,<br/>
                  Carnace Bunder-400009<br/>
                  Phone: 022-66317261, 66317262<br/>
                  E-mail: mumbairo@neccgroup.com
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='details'>
                  <h5>KOLKATA</h5>
                  <p>
                  34 A, Brabourne Road,<br/>
                  IInd FLoor,<br/>
                  Raghunath Building,<br/>
                  Kolkata-700001<br/>
                  Phone : 033-22354330, 22354349<br/>
                  E-mail : kolkata@neccgroup.com
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='details'>
                  <h5>BANGALORE</h5>
                  <p>
                  "NECC HOUSE",<br/>
                  6-S.G. Narayana Layout,<br/>
                  Lal Bagh Road,<br/>
                  Bangalore-560027<br/>
                  Phone : 080-22485725, 22485727<br/>
                  E-mail : bangalore@neccgroup.com
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='details'>
                  <h5>HYDERABAD</h5>
                  <p>
                  Plot no.93-96, Block No. 36A,<br/> Auto Nagar Telengana, Hyderabad-500070<br/>
                  Phone-040 24023824<br/>
                  E-mail : hyderabad@neccgroup.com
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='details'>
                  <h5>PATNA</h5>
                  <p>
                  C-1,1st Floor,Durga Vihar,
                  S.P.Verma Road,
                  Patna . - 800 001.<br/>
                  Phone : 0612-2222912, 2222084, 2227615<br/>
                  E-mail: patna@neccgroup.com
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='details'>
                  <h5>GUWAHATI</h5>
                  <p>
                  M.S.Road,<br/>
                  Guwahati-781 001.<br/>
                  Phone : 0361-2736754<br/>
                  E-mail: guwahati@neccgroup.com
                  </p>
                </div>
              </div>
            </div>
            </div>
         </div>
      </div>
      

      <div className='contact-g-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd' />
      </div>
    </>
  );
};

export default ContactInner;
