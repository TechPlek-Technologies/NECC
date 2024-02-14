import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const ChairmanDeskInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ChairmanDesk area start */}
       <div className='about-area pd-top-45 pd-bottom-45'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-3'>
               
                  <img
                    className='img-chairman'
                    src='./assets/img/about/chairman-2.webp'
                    alt='Transpro'
                  />
               <p className='content'><b><i>Sunil Kumar Jain</i></b></p>
              </div>
              
              <div className='col-lg-9'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
            
                    <h2 className='title'>
                    CHAIRMAN DESK
                    </h2>
                    <p className='content '>
                    We being a premier cargo transportation and solution provider in India, have set a goal to provide seamless transit of material across national and international borders using multimode solutions for a speedier movement at the lowest cost.If one has to name some domestic cargo and Logistics companies, which are in aggressive mode in expanding their operations all over India, the name of NECC GROUP of Companies should certainly appear in a prominent way in the list.Established in the year 1968, North Eastern Carrying Corporation Limited (NECC) is one of the leading logistic solution providers with offices  spread across all over India, Nepal & Bhutan.</p>
                    <p className='content '>NECC offers a wide range of logistics related solutions to meet every customer requirement. NECC offers services for small parcels, Full Truck Load consignments, project consignments and over dimensional consignment (ODC). It also provides containerized movement of cargo, packing and moving, warehousing, 3PL and storage facilities all under one roof. The company has chalked out short to medium term plans for expansion as we Envisage greater opportunity unfolding in India.</p>
                    <p className='content '> We leverage our operational expertise, technology and a high capacity network of transportation vehicles, to identify logistics problems and provided end-to-end supply chain solution from a unique perspective- “clients”.</p>
                    <p className='content '>Since inception, NECC has been providing its clients with the flexibility, responsiveness and services they deserve, using our deep operating knowledge to create solutions as unique as per our client’s needs. However, keeping in mind the changing demands and the global economic landscape, NECC has invested in people, new technologies and equipments that ensure that its clients achieve their desired goals. “Team NECC is committed to exceed clients expectations”.  That is why many of our original clients rely on us even now with longer associations.

                    </p>
                    <p className='content'><b><i>Sunil Kumar Jain</i></b><br/><b><i>CMD, NECC Ltd.</i></b></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='service-area pd-top-20 pd-bottom-20'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>

                <p className='content'>
                 NECC offers a wide range of logistics related solutions to meet every customer requirement. NECC offers services for small parcels, Full Truck Load consignments, project consignments and over dimensional consignment (ODC). It also provides containerized movement of cargo, packing and moving, warehousing, 3PL and storage facilities all under one roof. The company has chalked out short to medium term plans for expansion as we Envisage greater opportunity unfolding in India.
                </p>
                <p className='content'>
                We leverage our operational expertise, technology and a high capacity network of transportation vehicles, to identify logistics problems and provided end-to-end supply chain solution from a unique perspective- “clients”.
                </p>
                <p className='content'>
                Since inception, NECC has been providing its clients with the flexibility, responsiveness and services they deserve, using our deep operating knowledge to create solutions as unique as per our client’s needs. However, keeping in mind the changing demands and the global economic landscape, NECC has invested in people, new technologies and equipments that ensure that its clients achieve their desired goals. “Team NECC is committed to exceed clients expectations”.  That is why many of our original clients rely on us even now with longer associations.
                </p>
                <p className='content'><b><i>Sunil Kumar Jain</i></b><br/><b><i>CMD, NECC Ltd.</i></b></p>
               

                 </div>
                </div>
              </div>
          </div>
        </div>
      </div> */}
      {/* ChairmanDesk area end */}
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
