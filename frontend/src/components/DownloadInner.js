import React, { useState } from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";

const Data1 = [
    {
      name: "FEEDBACK FORM (Format)",
      section: "CLICK FOLLOWING LINKS TO DOWNLOAD",
      page: "DOWNLOAD",
      pdfFileName: "Report1.pdf",
      pdfFilePath: "/path/to/Report1.pdf",
    },
    {
        name: "INDEMNITY BOND (Format)",
        section: "CLICK FOLLOWING LINKS TO DOWNLOAD",
        page: "DOWNLOAD",
        pdfFileName: "Report1.pdf",
        pdfFilePath: "/path/to/Report1.pdf",
      },
      {
        name: "E-MAIL DELIVERY(Format)",
        section: "CLICK FOLLOWING LINKS TO DOWNLOAD",
        page: "DOWNLOAD",
        pdfFileName: "Report1.pdf",
        pdfFilePath: "/path/to/Report1.pdf",
      },
      {
        name: "NECC PROFILE (2017)",
        section: "CLICK FOLLOWING LINKS TO DOWNLOAD",
        page: "DOWNLOAD",
        pdfFileName: "Report1.pdf",
        pdfFilePath: "/path/to/Report1.pdf",
      },
  ];

const DownloadInner = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* service area start */}
      <div className='service-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <h2 className='title'>DOWNLOAD</h2>
            {/* <div className='col-lg-12'>
              <div className='sidebar-area'>
                <div className='widget widget_catagory'>
                  <h4 className='widget-title'>
                  DOWNLOAD
                    <span className='dot' />
                  </h4>
                  <ul className='catagory-items'>
                    <li>
                      <Link to='/blog'>
                        Air Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Sea Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Warehouse{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Road Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Train Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link to='/blog'>
                        Land Transportation{" "}
                        <span>
                          <FaArrowRight />
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            <div className='col-lg-12'>
                <div className='sidebar-area'>
                    <div className='widget widget_catagory'>
                    <h4 className='widget-title'>
                    CLICK FOLLOWING LINKS TO DOWNLOAD
                        <span className='dot' />
                    </h4>
                    <ul className='catagory-items'>
                        {Data1.map((item, index) => (
                        <li key={index}>
                            <Link to={`/download/${item.pdfFileName}`}>
                            {item.name}
                            <span>
                                <FaArrowRight />
                            </span>
                            </Link>
                        </li>
                        ))}
                    </ul>
                    </div>
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

export default DownloadInner;
