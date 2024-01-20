import React, { useState } from "react";
import ModalVideo from "react-modal-video";


const FeedbackInner= () => {
  const [isOpen, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset the form after submission
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };


  return (
    <>
      {/* service area start */}
      <div className='pricing-area pd-top-15 pd-bottom-10 col-lg-12'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='service-details-wrap'>
                <h2>FEEDBACK</h2>
                <p>
                Comments or questions are welcome.<br/> * indicates required field
                </p>
                <form className='container' onSubmit={handleSubmit}>
                <div className="row justify-content-center">
                      <div>
                      <label className='feedbackheader'>Name:*</label><br/>
                        <input
                          className='col-lg-10 feedbackbox'
                          id="name"
                          name="name"
                          placeholder="Name*"
                          type="text"
                          value={name}
                          onChange={handleNameChange}
                        />
                      </div>
                      <div>
                      <label className='feedbackheader'>Email:*</label><br/>
                        <input
                         className='col-lg-10 feedbackbox'
                          id="email"
                          name="email"
                          placeholder="Email*"
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                        />
                      </div>
                      <div>
                      <label className='feedbackheader'>Subject:*</label><br/>
                        <input
                         className='col-lg-10 feedbackbox'
                          id="subject"
                          name="phone"
                          placeholder="Subject*"
                          type="text"
                          value={subject}
                          onChange={handleSubjectChange}
                        />
                      </div>
                      <div>
                      <label className='feedbackheader'>Message:*</label><br/>
                        <textarea
                          className='col-lg-10 feedbackbox'
                          id="message"
                          name="message"
                          placeholder="Your Message*"
                          value={message}
                          onChange={handleMessageChange}
                        />
                      </div>
                      <div>
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
