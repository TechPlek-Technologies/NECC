import React, { useState } from "react";
import {
  FaRegFilePdf,
} from "react-icons/fa";

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
  {
    name: "Policy-For-Determination-Of-Materiality-Of-Information-Or-Events",
    section: "Policy-For-Determination-Of-Materiality-Of-Information-Or-Events",
    page: "POLICES & CODE",
    pdfFileName: "Report2.pdf",
    pdfFilePath: "/path/to/Report2.pdf",
  },
  {
    name: "Contact details of personnel authorised under Reg 30(5) of SEBI (LODR) Regulations,2015",
    section: "Contact details of personnel authorised under Reg 30(5) of SEBI (LODR) Regulations,2015",
    page: "POLICES & CODE",
    pdfFileName: "Report3.pdf",
    pdfFilePath: "/path/to/Report3.pdf",
  },
  
];

const PolicesInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
     
      {/* <div className='service-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center col-lg-12'>
             <div className='service-details-wrap'>
                <h2 className="list-Investors">POLICES & CODE</h2>
                 <div className='row'>
                  <div className='col-lg-4 align-self-center list-Investors'>
                    <h6 className='subtitle'>Succession Policy for the Board & Senior Management</h6>
                    <ul className=' list-inner-wrap list-Investors1' >
                      <li> <Link to='/CorporateInformation'>
                        CORPORATE INFORMATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                  
                         BUSINESS DETAIL{" "}
                      </Link></li>
                      
                    </ul>
                   
                  </div>
                  <div className='col-lg-4 align-self-center list-Investors'>
                    <h6 className='subtitle'>Succession Policy for the Board & Senior Management</h6>
                    <ul className=' list-inner-wrap list-Investors1' >
                      <li> <Link to='/CorporateInformation'>
                        CORPORATE INFORMATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                  
                         BUSINESS DETAIL{" "}
                      </Link></li>
                      
                    </ul>
                   
                  </div>
                  <div className='col-lg-4 align-self-center list-Investors'>
                    <h6 className='subtitle'>Succession Policy for the Board & Senior Management</h6>
                    <ul className=' list-inner-wrap list-Investors1' >
                      <li> <Link to='/CorporateInformation'>
                        CORPORATE INFORMATION{" "}
                      </Link></li>
                      <li> <Link to='#'>
                  
                         BUSINESS DETAIL{" "}
                      </Link></li>
                      
                    </ul>
                   
                  </div>
                </div>
              </div>
    
      <ModalVideo
        channel='youtube'
        autoplay
        isOpen={isOpen}
        videoId='XM6kTQPzzpQ'
        onClose={() => setOpen(false)}
       />
       </div>
       </div>
       </div> */}
       <div className='about-area pd-bottom-120 pd-top-120'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='align-self-center'>
                      <h6 className='subtitle'>Succession Policy for the Board & Senior Management</h6>
                      <ul className='list-Policy' >
                      <li> 
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf className='list-Investors2' />Succession Policy for the Board & Senior Management
                      </a>
                      </li>
                      <li> 
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf className='list-Investors2' />Stationery Policy
                      </a>
                      </li>
                
                      </ul>
                    
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='align-self-center'>
                      <h6 className='subtitle'>Policy-For-Determination-Of-Materiality-Of-Information-Or-Events</h6>
                      <ul className='list-Policy' >
                      <li> 
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf className='list-Investors2' /> Policy-For-Determination-Of-Materiality-Of-Information-Or-Events
                      </a>
                      </li>
                      </ul>
                    
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='align-self-center'>
                      <h6 className='subtitle'>Contact details of personnel authorised under Reg 30(5) of SEBI (LODR) Regulations,2015</h6>
                      <ul className='list-Policy' >
                      <li> 
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf className='list-Investors2' /> Contact details of personnel authorised under Reg 30(5) of SEBI (LODR) Regulations,2015
                      </a>
                      </li>
                      </ul>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       
    </>
  );
};

export default PolicesInner;

