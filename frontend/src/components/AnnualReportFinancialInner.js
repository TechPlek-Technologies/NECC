import React from "react";

const Data1 = [
    {
          name:"Appointment-letter-Ms Priya Singh",
          section:"APPOINTMENT LETTER OF INDEPENDENT DIRECTORS REPORT",
          page:"ANNUAL REPORT & FINANCIALS",
          pdfFileName:"Report1.pdf",
          pdfFilePath:"/path/to/Report1.pdf",
       },
       {
        name:"Appointment-letter-Mr Ashutosh-Dubey",
        section:"APPOINTMENT LETTER OF INDEPENDENT DIRECTORS REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"Appointment-Letter-Mr Saurav-Upadhyay",
        section:"APPOINTMENT LETTER OF INDEPENDENT DIRECTORS REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"Letters",
        section:"APPOINTMENT LETTER OF INDEPENDENT DIRECTORS REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
      
 ];

 const Data2 = [
    {
        name:"2021- 2022",
        section:"SCRUTINIZER'S REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2021- 2022",
        section:"SCRUTINIZER'S REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2021- 2022",
        section:"SCRUTINIZER'S REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2021- 2022",
        section:"SCRUTINIZER'S REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2021- 2022",
        section:"SCRUTINIZER'S REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2021- 2022",
        section:"SCRUTINIZER'S REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2021- 2022",
        section:"SCRUTINIZER'S REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2021- 2022",
        section:"SCRUTINIZER'S REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"2021- 2022",
        section:"SCRUTINIZER'S REPORT",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
 ];

 const Data3 = [
    {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
     {
        name:"30.09.2023 Standalone",
        section:"QUARTERLY AND HALF YEARLY RESULTS",
        page:"ANNUAL REPORT & FINANCIALS",
        pdfFileName:"Report1.pdf",
        pdfFilePath:"/path/to/Report1.pdf",
     },
 ];


const AnnualReportFinancialInner = () => {

   
  return (
    <>
      {/* blog-details area start */}
      <div className='blog-details-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
          <h2 className='title'>ANNUAL REPORT & FINANCIALS</h2>
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
            <div className='col-lg-12'>
                <div className='sidebar-area'>
                    <div className='widget widget_tags'>
                    <h4 className='widget-title'>
                        {Data2[0].section}
                        <span className='dot' />
                    </h4>
                    <div className='tagcloud'>
                        {Data2.map((item, index) => (
                        <a key={index} href={item.pdfFilePath} target="_blank" rel="noopener noreferrer">
                            {item.name}
                        </a>
                        ))}
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-12'>
                <div className='sidebar-area'>
                    <div className='widget widget_tags'>
                    <h4 className='widget-title'>
                        {Data3[0].section}
                        <span className='dot' />
                    </h4>
                    <div className='tagcloud'>
                        {Data3.map((item, index) => (
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

export default AnnualReportFinancialInner;
