import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import DirectorComponent from "./BoardOfDirectorsInnerPdf";

const section = [
  {
    id: 1,
    designation: "VICE PRESIDENT",
    createdAt: "2024-01-31T09:41:07.000Z",
    updatedAt: "2024-01-31T09:41:07.000Z",
    categoryID: 1,
  },
  {
    id: 2,
    designation: " ASSISTANT VICE PRESIDENT",
    createdAt: "2024-01-31T10:13:44.000Z",
    updatedAt: "2024-01-31T10:13:44.000Z",
    categoryID: 1,
  },
  {
    id: 3,
    designation: " GENERAL MANAGER",
    createdAt: "2024-01-31T10:13:49.000Z",
    updatedAt: "2024-01-31T10:13:49.000Z",
    categoryID: 1,
  },
];

const BoardOfDirectorsInner = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {/* Investors area start */}
      <div className="service-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="service-details-wrap">
              <h2 className="subtitle">BOARD OF DIRECTORS</h2>
              <div className="row">
                <div className="col-lg-12 align-self-center">
                {section.map((item) => (
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                      <DirectorComponent id={item.id}/>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Investors area end */}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="XM6kTQPzzpQ"
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default BoardOfDirectorsInner;
