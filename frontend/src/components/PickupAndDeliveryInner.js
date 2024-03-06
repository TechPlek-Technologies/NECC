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
                  At NECC, we help you with everything from logistics to pickup! You can easily avail of our pickup services and we’ll be on our way to serve you. We commit to a seamless logistics experience. Your goods will be collected promptly and delivered precisely. Trust us with your pickups, and experience the ease of a well-organized supply chain. Your convenience is our priority!
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
