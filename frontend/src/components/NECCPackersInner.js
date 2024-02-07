import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import {
  FaCalculator,
  FaFileAlt,
  FaPencilAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";


const NECCPackersInner= () => {
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
      {/* Feedback area start */}
      <div className='container'>
        <div className='contact-area mg-top-60'>
          <div className='row g-0 justify-content-center'>
            <div className='col-lg-12'>
              <form
                className='contact-form text-center'
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>FEEDBACK</h3>
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
                    <div className='single-input-inner'>
                    <label>
                        <FaFileAlt />
                      </label>
                      <input type='text' placeholder='Subject' />
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='single-input-inner'>
                      <label>
                        <FaPencilAlt />
                      </label>
                      <textarea
                        placeholder='Write message'
                        defaultValue={""}
                        id='massage'
                      />
                    </div>
                  </div>
                  <div className='col-12'>
                    <button className='btn btn-base' type='submit'>
                      {" "}
                     SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='home-area home-v3 '>
                    <div className='header-slider header-slider2'>
                        <div>
                          <div
                            className='header-bg'
                            style={{
                              backgroundImage: "url('/assets/img/slide-v3/bg-01.png')",
                            }}
                          >
                            <div className='container'>
                              <div className='row header-height justify-content-start'>
                                <div className='col-lg-7'>
                                  <div className='header-inner-wrap'>
                                    <div className='header-inner'>
                                      {/* header inner */}
                                      <h4 className='title animated slideInRight'>
                                      Smart Packing & Moving Solutions
                                      </h4>
                                      <p className='sub-title'>
                                      We have a specialized division ‘NECC Packers & Movers’ that works on the philosophy of safe and sound relocation services. If there is one name you can confidently rely on in today’s mushrooming packing & moving business, NECC Packers & Movers would surely be on the top.
                                      </p>
                                      <p className='sub-title'>
                                      Be it inter-city or intra-city relocation, we will take you anywhere safely and smoothly. All it takes is a phone call and we will there at your service. From Handling, Packing, Loading, Moving and Unpacking, we do it all. For your satisfaction, we even provide as escort with the designated vehicle till it reaches your destination.
                                      </p>
                                      <p className='sub-title'>
                                      For home, office, or corporate shifting we provide service like no other. We use custom-built containers for specific articles. So whatever are your goods- expensive and fragile, or heavy and bulky, everything is relocated unscathed. No wonder many blue-chip companies like GE, ORACLE, ZEE NETWORK, HPCL, ONGC and many more companies rely on our expertise and repose their trust on us.
                                      </p>
                            
                                    </div>
                                    {/* //.header inner */}
                                  </div>
                                </div>
                                <div className='col-lg-5'>
                                  <div className='right-wrapper'>
                                    <div className='inner'>
                                      <h2>
                                      Specialties of Our Relocation Services
                                      </h2>
                                      <div className='list'>
                                        <ul>
                                          <li>
                                          Timely and Cost –effective
                                          </li>
                                          <li>Experienced and professional assistance</li>
                                          <li>Customized containers</li>
                                          <li>Secure and hassle-free</li>
                                          <li>Car carrier services</li>
                                          <li>Warehouse facilities</li>
                                          <li>Insurance assistance</li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
      {/* Feedback area end */}
    </>
  );
};

export default NECCPackersInner;
