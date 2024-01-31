import React from "react";

const Data1 = [
  {
    name: "Before Dispatch of Notice",
    section: "Notice of EGM",
    subsection:"2023-2024",
    page: "NEWSPAPER PUBLICATION",
    pdfFileName: "Report1.pdf",
    pdfFilePath: "/path/to/Report1.pdf",
  },
  {
    name: "After Completion of Dispatch of Notice ",
    section: "Notice of EGM",
    subsection:"2023-2024",
    page: "NEWSPAPER PUBLICATION",
    pdfFileName: "Report1.pdf",
    pdfFilePath: "/path/to/Report1.pdf",
  },
];


const NewspaperPublicationInner= () => {
  return (
    <>
      <div className='blog-details-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
          <h2 className='title'>NEWSPAPER PUBLICATION</h2>
             <div className='col-lg-12'>
                <div className='sidebar-area'>
                    <div className='widget widget_tags'>
                    <h4 className='widget-title'>
                        {Data1[0].section}
                        <span className='dot' />
                    </h4>
                    <h6>{Data1[0].subsection}</h6>
                    <div className='tagcloud'>
                        {Data1.map((item, index) => (
                        <a key={index} href={item.pdfFilePath} target="_blank" rel="noopener noreferrer">
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
       
    </>
  );
};

export default NewspaperPublicationInner;

