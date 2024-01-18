import React, { useState } from "react";
import ModalVideo from "react-modal-video";


const FeedbackInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* service area start */}
      <div className='service-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'>
              <div className='service-details-wrap'>
                <h2>FEEDBACK</h2>
                <p>
                Comments or questions are welcome.<br/> * indicates required field
                </p>
                <form className='container'>
                <div className="row justify-content-center">
                      <div className="col-lg-6 align-self-center">
                        <input
                          name="name"
                          placeholder="Name*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <input
                          name="email"
                          placeholder="Email*"
                          type="email"
                        />
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <input
                          name="phone"
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-6 align-self-center">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                        />
                        <button className='btn btn-base' type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                </form>



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

export default FeedbackInner;
