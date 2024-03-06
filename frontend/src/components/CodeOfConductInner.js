import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import CodeOfConductInnerPdf from "./CodeOfConductInnerPdf";

  const section = [
    {
      id: 1,
      designation: "CODE OF CONDUCT FOR DIRECTORS AND SENIOR MANAGEMENT OF THE COMPANY",
      createdAt: "2024-01-31T09:41:07.000Z",
      updatedAt: "2024-01-31T09:41:07.000Z",
      categoryID: 1,
    },
  ];

const CodeOfConductInner = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      {/* Investors area start */}
      <div className="service-area pd-top-130 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="service-details-wrap">
              <h2>CODE OF CONDUCT</h2>
              <div className="row">
                <div className="col-lg-12 align-self-center">
                {section.map((item) => (
                  <div className="service-details-wrap" key={item.id}>
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        {item.designation}
                        </h4>
                        <CodeOfConductInnerPdf id={item.id}/>
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

export default CodeOfConductInner;
