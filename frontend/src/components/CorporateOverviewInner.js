import React, { useState } from "react";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";
import TrackVisibility from "react-on-screen";

const CorporateOverviewInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Corporate area start */}
      <div className='service-area pd-top-45 pd-bottom-45 '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                  
                <h2 className='title'>CORPORATE OVERVIEW</h2>
             
                  <p className='content'>
                    Headquartered in Delhi, North Eastern Carrying Corporation Limited (NECC) is one of the high performance transporting companies in India. Over five decades of services, we have grown to become a 250+ branch network handling transportation and supply chain solutions throughout India, Nepal, Bhutan and Bangladesh.
                    </p>
          
                <p className='content'>
                With our advanced resources and in-depth familiarity of the domain, we are able to create customized and effective solution for any kind of commercial, industrial and residential freight movement. We offer seamless Logistics Management Solutions with our high capacity network and advanced trouble-shooting capabilities.
                </p>
                <p className='content'>
                Right from small parcels we book full truck load consignments, project consignments and over dimensional consignments (ODC). Add to that, we also provide containerized movement of cargo, packing and moving, warehousing, 3PL and storage facilities.
                </p>
                <p className='content'>
                Our online consignment tracking system allows customers to track whereabouts of their consignment anytime anywhere online. We take pride in providing satisfactory service to a diverse clientele with total confidentiality, reliability and efficiency.
                </p>
                 </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* Corporate area end */}
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

export default CorporateOverviewInner;
