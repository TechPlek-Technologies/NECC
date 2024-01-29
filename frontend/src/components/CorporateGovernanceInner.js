import React from "react";

const Data1 = [
    {
          name:"2013-2014",
          section:"ANNUAL CORPORATE GOVERNANCE REPORT",
          page:"CORPORATE GOVERNANCE",
          pdfFileName:"Report1.pdf",
          pdfFilePath:"/path/to/Report1.pdf",
       },
       {
        name:"2012-2013",
        section:"ANNUAL CORPORATE GOVERNANCE REPORT",
        page:"CORPORATE GOVERNANCE",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2011-2012",
        section:"ANNUAL CORPORATE GOVERNANCE REPORT",
        page:"CORPORATE GOVERNANCE",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2010-2011",
        section:"ANNUAL CORPORATE GOVERNANCE REPORT",
        page:"CORPORATE GOVERNANCE",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2009-2010",
        section:"ANNUAL CORPORATE GOVERNANCE REPORT",
        page:"CORPORATE GOVERNANCE",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2008-2009",
        section:"ANNUAL CORPORATE GOVERNANCE REPORT",
        page:"CORPORATE GOVERNANCE",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
 ];

const CorporateGovernanceInner = () => {

   
  return (
    <>
      {/* blog-details area start */}
      <div className='blog-details-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
          <h2 className='title'>CORPORATE GOVERNANCE</h2>
             <div className='col-lg-12'>
                <div className='sidebar-area'>
                    <div className='widget widget_tags'>
                    <h4 className='widget-title'>
                        {Data1[0].section}
                        <span className='dot' />
                    </h4>
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
      {/* blog-details area end */}
    </>
  );
};

export default CorporateGovernanceInner;
