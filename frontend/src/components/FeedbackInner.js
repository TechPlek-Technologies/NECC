import React, { useState,useRef } from "react";
import emailjs from "@emailjs/browser";
// import ReCAPTCHA from "react-google-recaptcha";
import {
  FaCalculator,
  FaFileAlt,
  FaPencilAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import { toast, Toaster } from "react-hot-toast";

const FeedbackInner= () => {
  const form = useRef();

  const [recaptchaVerified, setRecaptchaVerified] = useState(false);

  const handleRecaptchaVerify = () => {
    setRecaptchaVerified(true);
  };

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
            toast.success("Message Sent Successfully!");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Message Not Sent!");
          }
        }
      );
  };
  return (
    <>
      {/* Feedback area start */}
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center'>
            <div class="col-lg-5">
              <div class="thumb text-center mb-4 mb-lg-0">
                <img src="/assets/img/faq/feedback-form.webp" alt="img"/>
                  </div>
            </div>
            <div className='col-lg-7'>
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
                        placeholder='Write message'
                        defaultValue={""}
                        id='massage'
                      />
                    </div>
                  </div>
                  <div>
                  {/* <ReCAPTCHA sitekey="6LfLCJcpAAAAAEDOLqUmzv93a5cjzGFyan_CVHB-" onChange={handleRecaptchaVerify} /> */}
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
          </div>
        </div>
      </div>
      {/* Feedback area end */}
    </>
  );
};

export default FeedbackInner;
