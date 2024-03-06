import React from "react";
import { useEffect , useState } from "react";
import axios from "axios";
import { divideArrayByType } from "../pages/Dashboard/utils/contact-divide";

const NetworkInner = () => {

  const domain = process.env.REACT_APP_API_DOMAIN;
  const [key, setKey] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data,setData]=useState([]);
  const [corporateOfficeArray, otherTypesArray] = divideArrayByType(data);


  useEffect(() => {
    // Function to fetch data
    setLoading(true)
    const fetchData = async () => {
      try {
        const response = await axios.get(`${domain}/contact`);
        setData(response.data); // Set the fetched data into state
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    // Call the fetch data function
    fetchData();
  }, [key]); // Empty dependency array to ensure this effect runs only once



  return (
    <>
      {/* Start Services area  */}
      <div className='service-area pd-top-120 pd-bottom-45 '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-11 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                  
                <h2 className='title'>NETWORKS</h2>
             
                  <p className='content'>
                  As a Full Truck Load service provider, we are best as compared to our competitors, as we have distributed and reliable network across India. Because of our strong networks, we are able to assess individual business needs in a most cost-effective way possible.
                    </p>
          
          <h4 className="reg-offices" style={{marginTop:"20px",marginBottom:"20px"}}>CORPORATE OFFICE</h4>
          <div className="row">
           
              <div className='col-xl-6 col-lg-12 col-md-6'>
                <h6>NAME</h6>
                {corporateOfficeArray.map((company) => (
                <div key={company.id}>
                <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                  <li>{company.name}</li>
                </ul>
                </div>
                 ))}
              </div>
            
              <div className='col-xl-6 col-lg-12 col-md-6'>
                <h6>Email</h6>
                {corporateOfficeArray.map((company) => (
                <div key={company.id}>
                <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                  <li>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </li>
                </ul>
                </div>
                  ))}
              </div>

            </div>


            <h4 className="reg-offices" style={{marginTop:"20px",marginBottom:"20px"}}>BRANCH OFFICE</h4>
            <div className="row">
            <div className='col-xl-6 col-lg-12 col-md-6'>
                <h6>NAME</h6>
                {otherTypesArray.map((company) => (
                <div key={company.id}>
                <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                  <li>{company.name}</li>
                </ul>
                </div>
                 ))}
              </div>
            
              <div className='col-xl-6 col-lg-12 col-md-6'>
                <h6>Email</h6>
                {otherTypesArray.map((company) => (
                <div key={company.id}>
                <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                  <li>
                    <a href={`mailto:${company.email}`}>{company.email}</a>
                  </li>
                </ul>
                </div>
                  ))}
              </div>
            </div>
                 </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* End Services area  */}
    </>
  );
};

export default NetworkInner;
