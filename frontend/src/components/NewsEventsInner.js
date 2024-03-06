import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import NewsEventsInnerPdf from "./NewsEventsInnerPdf";

const section = [
  {
    id: 1,
    name: "Investor Presentation",
    createdAt: "2024-01-31T09:41:07.000Z",
    updatedAt: "2024-01-31T09:41:07.000Z",
    categoryID: 1,
  },
  {
    id: 2,
    name: "Press Release",
    createdAt: "2024-01-31T09:41:07.000Z",
    updatedAt: "2024-01-31T09:41:07.000Z",
    categoryID: 1,
  },
];

const NewsEventsInner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* service area start */}
      <div className='service-area pd-top-130 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <h2 className='title'>NEWS & EVENTS</h2>
              <div className="col-lg-12">
              <div className="sidebar-area">
                {section.map((item) => (
                  <div className="widget widget_catagory" key={item.id}>
                    <h4 className="widget-title">
                      {item.name}
                      <span className="dot" />
                    </h4>
                    <NewsEventsInnerPdf id={item.id}/>
                  </div>
                ))}
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

export default NewsEventsInner;
