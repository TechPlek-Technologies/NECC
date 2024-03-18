import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import RightIssuesInnerPdf from "./RightIssuesInnerPdf";

const section = [
    {
      id: 1,
      name: "",
      createdAt: "2024-01-31T09:41:07.000Z",
      updatedAt: "2024-01-31T09:41:07.000Z",
      categoryID: 1,
    },
    {
      id: 2,
      name: "PUBLICATION",
      createdAt: "2024-01-31T10:13:44.000Z",
      updatedAt: "2024-01-31T10:13:44.000Z",
      categoryID: 1,
    },
    {
      id: 3,
      name: "PUBLICATION",
      createdAt: "2024-01-31T10:13:49.000Z",
      updatedAt: "2024-01-31T10:13:49.000Z",
      categoryID: 1,
    },
  ];

const RightIssuesInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Investors area start */} 
      <div className='service-area pd-top-130 pd-bottom-45'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'></div>
              <div className='service-details-wrap'>
                <h2 className="list-Investors">RIGHT ISSUES</h2>
                <div className='row'>
                {section.map((item) => (
                  <div className='col-lg-12 align-self-center list-Investors ' key={item.id}>
                    <h6 className='subtitle RightIssue'>{item.name}</h6>
                    <RightIssuesInnerPdf id={item.id}/>
                   
                  </div>
                  ))}
                </div>
              </div>
      {/* Investors area end */}
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
       />
       </div>
       </div>
       </div>
       
    </>
  );
};

export default RightIssuesInner;

