import React, { useState } from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import DownloadInnerPdf from "./DownloadInnerPdf";

const section = [
  {
    id: 1,
    name: "12345",
    createdAt: "2024-01-31T09:41:07.000Z",
    updatedAt: "2024-01-31T09:41:07.000Z",
    categoryID: 1,
  },
  {
    id: 2,
    name: "1234",
    createdAt: "2024-01-31T10:13:44.000Z",
    updatedAt: "2024-01-31T10:13:44.000Z",
    categoryID: 1,
  },
  {
    id: 3,
    name: "123456",
    createdAt: "2024-01-31T10:13:49.000Z",
    updatedAt: "2024-01-31T10:13:49.000Z",
    categoryID: 1,
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
                <div className='col-lg-12'>
                  <div className='sidebar-area'>
                    <div className='widget widget_catagory'>
                      <h4 className='widget-title'>
                        CLICK FOLLOWING LINKS TO DOWNLOAD
                        <span className='dot' />
                      </h4>
                      <ul className='catagory-items'>
                        {section.map((item, index) => (
                          <li key={index}>
                            <Link to={`/download/${item.name}`}>
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
