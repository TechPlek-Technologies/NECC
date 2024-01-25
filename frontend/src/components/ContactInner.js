import React, { useRef } from "react";

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

  const companies = [
    {
        id: "2569ce0d517a7f06d3ea1f25",
        city: "Mumbai",
        name: "Navratan",
        addressLine1: "2 Mezzanine Floor",
        addressLine2: " 69, P.D'Mellow Road",
        addressLine3: "Carnace Bunder",
        pincode: "400009",
        phone: ["022-66317261", "022-66317262"],
        tollfreeNo: ["1800 11 7080", "9711797516"],
        email: "mumbairo@neccgroup.com",
    },
    {
        id: "2569ce0d517a7f06d3ea1f25",
        city: "Mumbai",
        name: "Navratan",
        addressLine1: "2 Mezzanine Floor",
        addressLine2: " 69, P.D'Mellow Road",
        addressLine3: "Carnace Bunder",
        pincode: "400009",
        phone: ["022-66317261", "022-66317262"],
        tollfreeNo: ["1800 11 7080", "9711797516"],
        email: "mumbairo@neccgroup.com",
    },
    {
        id: "2569ce0d517a7f06d3ea1f25",
        city: "Mumbai",
        name: "Navratan",
        addressLine1: "2 Mezzanine Floor",
        addressLine2: " 69, P.D'Mellow Road",
        addressLine3: "Carnace Bunder",
        pincode: "400009",
        phone: ["022-66317261", "022-66317262"],
        tollfreeNo: ["1800 11 7080", "9711797516"],
        email: "mumbairo@neccgroup.com",
    },
    {
        id: "2569ce0d517a7f06d3ea1f25",
        city: "Mumbai",
        name: "Navratan",
        addressLine1: "2 Mezzanine Floor",
        addressLine2: " 69, P.D'Mellow Road",
        addressLine3: "Carnace Bunder",
        pincode: "400009",
        phone: ["022-66317261", "022-66317262"],
        tollfreeNo: ["1800 11 7080", "9711797516"],
        email: "mumbairo@neccgroup.com",
    },
    {
        id: "2569ce0d517a7f06d3ea1f25",
        city: "Mumbai",
        name: "Navratan",
        addressLine1: "2 Mezzanine Floor",
        addressLine2: " 69, P.D'Mellow Road",
        addressLine3: "Carnace Bunder",
        pincode: "400009",
        phone: ["022-66317261", "022-66317262"],
        tollfreeNo: ["1800 11 7080", "9711797516"],
        email: "mumbairo@neccgroup.com",
    },
    {
      id: "2569ce0d517a7f06d3ea1f25",
      city: "Mumbai",
      name: "Navratan",
      addressLine1: "2 Mezzanine Floor",
      addressLine2: " 69, P.D'Mellow Road",
      addressLine3: "Carnace Bunder",
      pincode: "400009",
      phone: ["022-66317261", "022-66317262"],
      tollfreeNo: ["1800 11 7080", "9711797516"],
      email: "mumbairo@neccgroup.com",
  },
    // Add other company objects here...
];
 
const corporate = [
  {
      id: "2569ce0d517a7f06d3ea1f25",
      city: "Mumbai",
      name: "Navratan",
      addressLine1: "2 Mezzanine Floor",
      addressLine2: " 69, P.D'Mellow Road",
      addressLine3: "Carnace Bunder",
      pincode: "400009",
      phone: ["022-66317261", "022-66317262"],
      tollfreeNo: ["1800 11 7080", "9711797516"],
      email: "mumbairo@neccgroup.com",
  },
  {
      id: "2569ce0d517a7f06d3ea1f25",
      city: "Mumbai",
      name: "Navratan",
      addressLine1: "2 Mezzanine Floor",
      addressLine2: " 69, P.D'Mellow Road",
      addressLine3: "Carnace Bunder",
      pincode: "400009",
      phone: ["022-66317261", "022-66317262"],
      tollfreeNo: ["1800 11 7080", "9711797516"],
      email: "mumbairo@neccgroup.com",
  },
  {
      id: "2569ce0d517a7f06d3ea1f25",
      city: "Mumbai",
      name: "Navratan",
      addressLine1: "2 Mezzanine Floor",
      addressLine2: " 69, P.D'Mellow Road",
      addressLine3: "Carnace Bunder",
      pincode: "400009",
      phone: ["022-66317261", "022-66317262"],
      tollfreeNo: ["1800 11 7080", "9711797516"],
      email: "mumbairo@neccgroup.com",
  },
  {
      id: "2569ce0d517a7f06d3ea1f25",
      city: "Mumbai",
      name: "Navratan",
      addressLine1: "2 Mezzanine Floor",
      addressLine2: " 69, P.D'Mellow Road",
      addressLine3: "Carnace Bunder",
      pincode: "400009",
      phone: ["022-66317261", "022-66317262"],
      tollfreeNo: ["1800 11 7080", "9711797516"],
      email: "mumbairo@neccgroup.com",
  },
  {
      id: "2569ce0d517a7f06d3ea1f25",
      city: "Mumbai",
      name: "Navratan",
      addressLine1: "2 Mezzanine Floor",
      addressLine2: " 69, P.D'Mellow Road",
      addressLine3: "Carnace Bunder",
      pincode: "400009",
      phone: ["022-66317261", "022-66317262"],
      tollfreeNo: ["1800 11 7080", "9711797516"],
      email: "mumbairo@neccgroup.com",
  },
  {
    id: "2569ce0d517a7f06d3ea1f25",
    city: "Mumbai",
    name: "Navratan",
    addressLine1: "2 Mezzanine Floor",
    addressLine2: " 69, P.D'Mellow Road",
    addressLine3: "Carnace Bunder",
    pincode: "400009",
    phone: ["022-66317261", "022-66317262"],
    tollfreeNo: ["1800 11 7080", "9711797516"],
    email: "mumbairo@neccgroup.com",
},
  // Add other company objects here...
];
  return (
    <>
      <Toaster position='bottom-center' reverseOrder={false} />
      {/* contact area start */}
      <div className='container'>
        <div className='contact-area mg-top-60 mb-20'>
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

      <div className='service-area style-2 pd-bottom-80'>
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='section-title text-center'>
                {/* <h4 className='subtitle'>SERVICES</h4> */}
                <h2 className='title'>CORPORATE OFFICE</h2>
              </div>
            </div>
          </div>
            <div className='row'>
                {corporate.map((company) => (
                  <div className='col-lg-4' key={company.id}>
                    <div className='single-service-wrap'>
                      <div className='details'>
                        <h5>{company.city}</h5>
                        <p>
                          {company.name}<br />
                          {company.addressLine1},<br />
                          {company.addressLine2},<br />
                          {company.addressLine3}-{company.pincode}<br />
                          Phone: {company.phone.join(', ')}<br />
                          E-mail: {company.email}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
         </div>
      </div>
   
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
            <div className='row'>
                {companies.map((company) => (
                  <div className='col-lg-4' key={company.id}>
                    <div className='single-service-wrap'>
                      <div className='details'>
                        <h5>{company.city}</h5>
                        <p>
                          {company.name}<br />
                          {company.addressLine1},<br />
                          {company.addressLine2},<br />
                          {company.addressLine3}-{company.pincode}<br />
                          Phone: {company.phone.join(', ')}<br />
                          E-mail: {company.email}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
         </div>
      </div>
    
      <div className='contact-g-map'>
        <iframe src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d29208.601361499546!2d90.3598076!3d23.7803374!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1589109092857!5m2!1sen!2sbd' />
      </div>
      {/* contact area end */}
    </>
  );
};

export default ContactInner;
