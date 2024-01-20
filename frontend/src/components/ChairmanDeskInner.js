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
            <div className='col-lg-12'>
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
              </div>
            </div>
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
