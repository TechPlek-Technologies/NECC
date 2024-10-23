import React, { useRef } from "react";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
// import { divideArrayByType } from "../utils/contact-divide";
import { divideArrayByType } from "../pages/Dashboard/utils/contact-divide";

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
import { Link } from "react-router-dom";
import ContactInnerBranch from "./ContactInnerBranch";

const useOfficeDivide = (data) => {
  return useMemo(() => {
    return divideArrayByType(data);
  }, [data]);
};

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

  const domain = process.env.REACT_APP_API_DOMAIN;
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [corporateOffice, companies] = useOfficeDivide(data);

  useEffect(() => {
    // Function to fetch data
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/office`);

        setData(response.data); // Set the fetched data into state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [key]);

  console.log("corporateOffice", corporateOffice);

  const cityOrder = [
    "Mumbai",
    "Ahmedabad",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Patna",
    "Ranchi",
    "Siliguri",
    "Guwahati",
    "Cuttak",
  ];
  // Create a lowercase version of cityOrder for case-insensitive comparison
const normalizedCityOrder = cityOrder.map(city => city.toLowerCase());

// Filter companies into ordered and unordered categories
const orderedCompanies = companies.filter((company) => 
  normalizedCityOrder.includes(company.city?.toLowerCase())
);

const unorderedCompanies = companies.filter((company) => 
  !normalizedCityOrder.includes(company.city?.toLowerCase())
);

// Sort ordered companies based on their index in the cityOrder
const sortedOrderedCompanies = orderedCompanies.sort((a, b) => 
  normalizedCityOrder.indexOf(a.city?.toLowerCase()) - 
  normalizedCityOrder.indexOf(b.city?.toLowerCase())
);

// Concatenate sorted ordered companies with unordered companies
const finalSortedCompanies = [...sortedOrderedCompanies, ...unorderedCompanies];


  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* contact area start */}
      <div className="container pd-bottom-45">
        <div className="contact-area mg-top-60 mb-20">
          <div className="row g-0 justify-content-center">
            <div className="col-lg-7">
              <form
                className="contact-form text-center"
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>GET A QUOTE</h3>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <FaUserAlt />
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        name="user_name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <FaRegEnvelope />
                      </label>
                      <input
                        type="text"
                        placeholder="Your email"
                        name="user_email"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <FaCalculator />
                      </label>
                      <input type="text" placeholder=" Phone number" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input-inner">
                      <label>
                        <FaFileAlt />
                      </label>
                      <input type="text" placeholder=" Subject" />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="single-input-inner">
                      <label>
                        <FaPencilAlt />
                      </label>
                      <textarea
                        placeholder="Write massage"
                        defaultValue={""}
                        id="massage"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-base1" type="submit">
                      {" "}
                      <Link to="/Pickup&Delivery" className="contact-btn">
                        SEND MESSAGE
                      </Link>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="contact-information-wrap">
                <h3>CORPORATE OFFICE</h3>
                <div className="single-contact-info-wrap mb-0">
                  <h6>DELHI</h6>
                  <div className="media">
                    <div className="icon" style={{ background: "#565969" }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className="media-body">
                      {corporateOffice.map((company) => (
                        <>
                          {company?.name && (
                            <>
                              <h5> {company.name}</h5>
                            </>
                          )}
                          {company?.addressLine1 && (
                            <>{company.addressLine1} </>
                          )}
                          {company?.addressLine2 && (
                            <>{company.addressLine2} </>
                          )}
                          {company?.addressLine3 && (
                            <>{company.addressLine3} </>
                          )}
                          {company?.pincode && (
                            <>
                              {/* {"Pincode-"} */}
                              {company.pincode}
                              <br />
                            </>
                          )}
                          {/* {company?.tollfreeNo && (
                            <>
                              {"Toll Free No : "}
                              {company.tollfreeNo}
                              <br />
                            </>
                          )} */}
                          {company?.phone && (
                            <>
                              {"Phone : "}
                              {company.phone}
                              <br />
                            </>
                          )}
                          {company?.email && (
                            <>
                              {"E-mail : "}
                              {company.email}{" "}
                            </>
                          )}
                        </>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="service-area style-2 pd-top-45 pd-bottom-80"
        style={{ background: "#EFEDF5" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                {/* <h4 className='subtitle'>SERVICES</h4> */}
                <h2 className="title" style={{ color: "black" }}>
                  CORPORATE OFFICE
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {corporateOffice.map((company) => (
              <div className="col-lg-4" key={company.id}>
                <div className="single-service-wrap">
                  <div
                    className="details hoverText"
                    style={{ minHeight: "200px" }}
                  >
                    {company?.name && (
                      <>
                        <h5> {company.name}</h5>
                      </>
                    )}
                    {company?.addressLine1 && <>{company.addressLine1} </>}
                    {company?.addressLine2 && <>{company.addressLine2} </>}
                    {company?.addressLine3 && <>{company.addressLine3} </>}
                    {company?.pincode && (
                      <>
                        {/* {"Pincode-"} */}
                        {company.pincode}
                        <br />
                      </>
                    )}
                    {company?.tollfreeNo && (
                      <>
                        {"Toll Free No : "}
                        {company.tollfreeNo}
                        <br />
                      </>
                    )}
                    {company?.phone && (
                      <>
                        {"Phone : "}
                        {company.phone}
                        <br />
                      </>
                    )}
                    {company?.email && (
                      <>
                        {"E-mail : "}
                        {company.email}{" "}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="service-area style-2 pd-bottom-80"
        style={{ background: "#EFEDF5" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-title text-center">
                {/* <h4 className='subtitle'>SERVICES</h4> */}
                <h2 className="title" style={{ color: "black" }}>
                  REGIONAL OFFICE
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {finalSortedCompanies.map((company) => (
              <div className="col-lg-4" key={company.id}>
                <div className="single-service-wrap">
                  <div
                    className="details hoverText"
                    style={{ minHeight: "230px" }}
                  >
                    {company?.city && (
                      <>
                        <h5> {company.city}</h5>
                      </>
                    )}
                    {company?.addressLine1 && <>{company.addressLine1} </>}
                    {company?.addressLine2 && <>{company.addressLine2} </>}
                    {company?.addressLine3 && <>{company.addressLine3} </>}
                    {company?.pincode && (
                      <>
                        {/* {"Pincode-"} */}
                        {company.pincode}
                        <br />
                      </>
                    )}
                    {company?.tollfreeNo && (
                      <>
                        {"Toll Free No : "}
                        {company.tollfreeNo}
                        <br />
                      </>
                    )}
                    {company?.phone && (
                      <>
                        {"Phone : "}
                        {company.phone}
                        <br />
                      </>
                    )}
                    {company?.email && (
                      <>
                        {"E-mail : "}
                        {company.email}{" "}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ContactInnerBranch />
      {/* contact area end */}
    </>
  );
};

export default ContactInner;
