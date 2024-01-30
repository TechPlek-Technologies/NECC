import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const Data1 = [
    {
      name: "Succession Policy for the Board & Senior Management",
      section: "Succession Policy for the Board & Senior Management",
      page: "POLICES & CODE",
      pdfFileName: "Report1.pdf",
      pdfFilePath: "/path/to/Report1.pdf",
    },
    {
        name: "Stationery Policy",
        section: "Succession Policy for the Board & Senior Management",
        page: "POLICES & CODE",
        pdfFileName: "Report1.pdf",
        pdfFilePath: "/path/to/Report1.pdf",
      },
  ];

const Data2 = [
    {
      name: "Familiarization Programme for Independent Directors 2021-22",
      section: "Familiarization Programme for Independent Directors",
      page: "POLICES & CODE",
      pdfFileName: "Report1.pdf",
      pdfFilePath: "/path/to/Report1.pdf",
    },
    {
        name: "Familiarization Programme for Independent Directors 2020-21",
        section: "Familiarization Programme for Independent Directors",
        page: "POLICES & CODE",
        pdfFileName: "Report1.pdf",
        pdfFilePath: "/path/to/Report1.pdf",
      },
      {
        name: "Familiarization Programme for Independent Directors 2019-20",
        section: "Familiarization Programme for Independent Directors",
        page: "POLICES & CODE",
        pdfFileName: "Report1.pdf",
        pdfFilePath: "/path/to/Report1.pdf",
      },
      {
        name: "Familiarization Programme for Independent Directors 2017-18",
        section: "Familiarization Programme for Independent Directors",
        page: "POLICES & CODE",
        pdfFileName: "Report1.pdf",
        pdfFilePath: "/path/to/Report1.pdf",
      },
  ];

const PolicesInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* Investors area start */} 
      <div className='service-area pd-top-120 pd-bottom-45'>
        <div className='container'>
          <div className='row justify-content-center'>
              <div className='service-details-wrap pd-bottom-20'>
                <h2 className="list-Investors">{Data1[0].page}</h2>
                <div>
                    <div className='col-lg-6 align-self-center list-Investors'>
                    <h6 className='subtitle'>{Data1[0].section}</h6>
                    <ul className='list-inner-wrap list-Investors1'>
                        {Data1.map((item, index) => (
                        <li key={index}>
                            <Link to={item.pdfFilePath}>
                            {item.name}
                            {" "}
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
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

export default PolicesInner;

