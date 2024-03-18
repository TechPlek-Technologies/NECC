import React, { useState } from "react";

import { Link, useLocation } from 'react-router-dom';

const SARCcountryInner = () => { 
  const [isOpen, setOpen] = useState(false);

  const location = useLocation();

  return (
    <>
      {/* service area start */}
      <div className='service-area pd-top-120 pd-bottom-45'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='service-details-wrap'>
                <h2>SARC COUNTRY</h2>
                <p>
                With an extensive network spanning across India, Nepal, and Bhutan, NECC operates seamlessly to cater to your Transportation and Logistics needs. Our company boasts a robust presence with over 250 branches strategically positioned throughout these countries, ensuring efficient and reliable service delivery.
                </p>
                <p>
                In India alone, NECC's extensive network covers all 28 states, providing comprehensive coverage and accessibility to even the most remote regions. Whether you're shipping goods from the bustling streets of Mumbai to the serene landscapes of Himachal Pradesh or from the vibrant markets of Kolkata to the historic cities of Rajasthan, NECC is your go-to logistics solution.
                </p>
                <p>
                In Nepal, NECC continues to be a leading logistics provider, offering a wide range of services tailored to meet the unique needs of businesses and individuals alike. With our presence in key cities such as Kathmandu, Pokhara, and Biratnagar, we ensure swift and efficient transportation of goods across the country.
                </p>
                <p>
                Similarly, in the enchanting kingdom of Bhutan, NECC stands as a reliable partner for all your logistics requirements. Our network spans major cities such as Thimphu, Paro, and Phuentsholing, facilitating the seamless movement of goods within the country's picturesque landscapes.
                </p>
                <p>
                At NECC, we pride ourselves on our commitment to excellence, innovation, reliability, and customer satisfaction. With our extensive network and dedicated team of professionals, we strive to deliver superior Transportation and Logistics solutions that meet the evolving needs of our clients across the SAARC region. Experience the difference with NECC – your trusted logistics partner in the SAARC region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
      
    </>
  );
};

export default SARCcountryInner;
