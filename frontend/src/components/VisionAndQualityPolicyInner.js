import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const VisionAndQualityPolicyInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* service area start */}
      <div className='features-area style-02'>
        <div className='container'>
          <div className='row justify-content-start'>
            <div className='col-lg-5 offset-lg-1 d-flex order-lg-2'>
              <div className='section-title white  text-left m-auto'>
                <h2 className='title active'>VISION STATEMENT</h2>
                <p className='des'>
                NECC vision is to provide seamless transit of
                materials across national and international
                border using multi-model solutions for
                speedier movement at lowest cost.
                </p>
                <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='/contact' className='boxed-btn btn-bounce mt-3'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-5 align-self-center pd-top-120 order-lg-1'>
                    <div className='thumb mb-lg-0 mb-4'>
                      <img src='/assets/img/service-1/vision and quality/vision-2.webp' alt='Transpro' />
                    </div>
                  </div>
          </div>
        </div>
      </div>
      <div className='service-area pd-top-20 pd-bottom-60'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='service-details-wrap'>
                <div className='row'>
                  <div className='col-lg-6 align-self-center pd-top-60 order-lg-2'>
                    <div className='thumb  mb-4'>
                      <img src='/assets/img/service/quality2.webp' alt='Transpro' />
                    </div>
                  </div>
                  <div className='col-lg-6 align-self-center order-lg-1'>
                    <h2 className='subtitle'>QUALITY POLICY</h2>
                    <p>Team NECC will strive to attain delivery and Distribution Excellence : </p>
                    <ul className='list-inner-wrap'>
                      <li> By Aligning All Organizational Resources and Internal Systems.</li>
                      <li> By Adopting Appropriate and Current Electronic Communication Technology to facilitate Easier Exchange of Information ,Intrenally and Externally.</li>
                      <li> By Offering Customized Service and Products Through Specialized Divisions.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider-area divider-default-area">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-sm-11 col-md-12">
            <div class="content">
              <p class="title">TEAM NECC IS COMMITED TO EXCEED CLIENT EXPECTATIONS</p>
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
    </>
  );
};

export default VisionAndQualityPolicyInner;
