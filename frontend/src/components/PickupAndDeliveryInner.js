import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const PickupAndDeliveryInner= () => {
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
                  
                <h2 className='title'>PICKUP & DELIVERY</h2>
             
                  <p className='content'>
                  At NECC, we offer comprehensive support, handling everything from logistics to pickups! Accessing our pickup services is simple; just complete the form below with the required information, and we'll promptly attend to your needs. We guarantee a smooth logistics process, ensuring your goods are collected promptly and delivered accurately. Entrust us with your pickups, and enjoy the convenience of a streamlined supply chain. Your satisfaction and convenience are our top priorities!
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

export default PickupAndDeliveryInner;
