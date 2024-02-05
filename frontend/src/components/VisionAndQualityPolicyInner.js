import React, { useState } from "react";
import {
 
  FaBox,
  FaMoneyBillAlt,
  FaShieldAlt,
  FaTruck,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";

const VisionAndQualityPolicyInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* service area start */}
      <div className='features-area style-02' style={{ backgroundImage: `url("/assets/img/service-1/vision and quality/vision-statement (1).webp")`}}>
        <div className='container'>
          <div className='row justify-content-start'>
            <div className='col-lg-4 offset-lg-1 d-flex'>
              <div className='section-title white  text-left m-auto'>
                <h2 className='title active'>VISION STATEMENT</h2>
                <p className='des'>
                To Provide Seamless Transit of Materials Across National and International Borders
                Using Multi-Model Solutions for Speedier Movement at Lowest Cost.
                </p>
                <div className='btn-wrapper animated fadeInUpBig text-left'>
                  <a href='#' className='boxed-btn btn-bounce mt-3'>
                    Contact us
                  </a>
                </div>
              </div>
            </div>
            <div className='col-lg-6 align-self-center pd-top-120'>
                    <div className='thumb mb-lg-0 mb-4'>
                      <img src='/assets/img/service-1/vision and quality/vision-2.webp' alt='Transpro' />
                    </div>
                  </div>
            {/* <div className='col-lg-6'>
              <div className='features-item'>
                <div className='row'>
                  <div className='col-lg-6'>
                    <div className='single-features-item' style={{ backgroundImage: `url("/assets/img/service-1/vision and quality/plan.webp")`}}>
                      <div className='icon'>
                        <FaMoneyBillAlt />
                         
                      </div>
                      <h4>Plan</h4>
                    </div>
                    <div className='single-features-item' style={{ backgroundImage: `url("/assets/img/service-1/vision and quality/action.webp")`}}>
                      <div className='icon'>
                        <FaTruck />
                      </div>
                      <h4>Act</h4>
                    </div>
                  </div>
                  <div className='col-lg-6 mg-top-60'>
                    <div className='single-features-item' style={{ backgroundImage: `url("/assets/img/service-1/vision and quality/do.webp")`}}>
                      <div className='icon'>
                        <FaBox />
                      </div>
                      <h4>Do</h4>
                    </div>
                    <div className='single-features-item' style={{ backgroundImage: `url("/assets/img/service-1/vision and quality/check.webp")`}}>
                      <div className='icon'>
                        <FaShieldAlt />
                      </div>
                      <h4>Check</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className='service-area pd-top-20 pd-bottom-60'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-10'>
              <div className='service-details-wrap'>
                <div className='row'>
                  <div className='col-lg-6 align-self-center pd-top-120'>
                    <div className='thumb mb-lg-0 mb-4'>
                      <img src='/assets/img/service/quality (2).webp' alt='Transpro' />
                    </div>
                  </div>
                  <div className='col-lg-6 align-self-center'>
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
