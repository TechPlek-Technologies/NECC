import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const PresidentComponent = ({id}) => {
  const vicePresident = [
    {
      id: 1,
      name: "Sh. Shyam Lal Yadav",
      page: "Corporate Information",
      summary:"A Graduate in arts from Delhi University and Masters in Arts from Rajasthan University",
      section: "12345",
      pdfFileName: "e-del-Request-format.pdf",
      pdfFilePath: "./uploads/e-del-Request-format.pdf",
      createdAt: "2024-01-31T09:41:18.000Z",
      updatedAt: "2024-01-31T09:41:18.000Z",
      eventID: 1,
      description: '<p>carsonafsdf.darrin@devias.ioasdfasdfasdfasdfasdfsdaaaaaaafaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasafaaaaaxccxzczxcz</p><p><br></p><ol><li>asdfasdadg</li><li>dafdgfadg</li></ol><ul><li>sdfasdfa</li><li>sdvadvgg</li></ul>'
      
    },
    {
      id: 2,
      name: "Sh. Shyam Lal Yadav",
      page: "Corporate Information",
      summary:"A Graduate in arts from Delhi University and Masters in Arts from Rajasthan University",
      section: "1235",
      pdfFileName: "e-del-Request-format.pdf",
      pdfFilePath: "./uploads/e-del-Request-format.pdf",
      createdAt: "2024-01-31T10:13:27.000Z",
      updatedAt: "2024-01-31T10:13:27.000Z",
      eventID: 1,
      description: '<p>carsonafsdf.darrin@devias.ioasdfasdfasdfasdfasdfsdaaaaaaafaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasafaaaaaxccxzczxcz</p><p><br></p><ol><li>asdfasdadg</li><li>dafdgfadg</li></ol><ul><li>sdfasdfa</li><li>sdvadvgg</li></ul>'
    },
  ];
    return (
      <div>
        {vicePresident.map((president) => (
          <div key={president.id} className="service-details-wrap">
            <b>{president.name}</b>
            <div dangerouslySetInnerHTML={{ __html: president.description }} />
          </div>
        ))}
      </div>
    );
  };
  const section = [
    {
      id: 1,
      name: "VICE PRESIDENT",
      createdAt: "2024-01-31T09:41:07.000Z",
      updatedAt: "2024-01-31T09:41:07.000Z",
      categoryID: 1,
    },
    {
      id: 2,
      name: " ASSISTANT VICE PRESIDENT",
      createdAt: "2024-01-31T10:13:44.000Z",
      updatedAt: "2024-01-31T10:13:44.000Z",
      categoryID: 1,
    },
    {
      id: 3,
      name: " GENERAL MANAGER",
      createdAt: "2024-01-31T10:13:49.000Z",
      updatedAt: "2024-01-31T10:13:49.000Z",
      categoryID: 1,
    },
  ];

const KeyManagementPersonnelInner = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      {/* Investors area start */}
      <div className="service-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="service-details-wrap">
              <h2>KEY MANAGEMENT PERSONNEL</h2>
              <div className="row">
                <div className="col-lg-12 align-self-center">
                {section.map((item) => (
                  <div className="service-details-wrap" key={item.id}>
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        {item.name}
                        </h4>
                        <PresidentComponent id={item.id}/>
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

export default KeyManagementPersonnelInner;
