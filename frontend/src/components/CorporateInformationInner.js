import React, { useState } from "react";
import {
  FaRegFilePdf,
} from "react-icons/fa";
import ModalVideo from "react-modal-video";

const DirectorsComponent = ({ executiveDirectors }) => {
    return (
      <div>
        {executiveDirectors.map((director) => (
          <div key={director.id} className="service-details-wrap">
            <b>{director.name}</b>
            <p>{director.p1}</p>
            <p>{director.p2}</p>
            <p>{director.p3}</p>
          </div>
        ))}
      </div>
    );
  };

const CommitteeBoardComponent = ({ auditCommittee }) => {
    return (
      <div>
        {auditCommittee.map((committee) => (
          <div key={committee.id} className="service-details-wrap">
            <p>{committee.name}</p>
          </div>
        ))}
      </div>
    );
  };

const CorporateInformationInner = () => {
  const [isOpen, setOpen] = useState(false);
  const executiveDirectors = [
    {
        id:1,
      name: "Mr. Sunil Kumar Jain",
      p1: "Mr. Sunil Kumar Jain (DIN: 00010695) is Chairman & Managing Director of North Eastern Carrying Corporation Limited. He has done graduation in Commerce from University of Delhi and joined his family business in 1980 at an early age of 18 years.",
      p2: "With over 37 years of experience in transport, logistics, real estate as well as information technology industries, he has led NECC for achieving accelerated growth. Since 1999-2000 he leads the Company in all sectors vide operation, marketing and finance and had implemented new technologies vide computerization of head office, all regional offices and major branches in 2003. He equipped the vehicles with GPRS system.",
      p3: "Over 37 yearsMr. Jain has been awarded for his notable contribution to the Transport Sector by AITWA and for good business performance by “Inc. India 500” for his winning performance and stellar contribution to the Indian economy in terms of efficient entrepreneurship and growth.",
    
    },
    {
        id:2,
      name: "Mr. Utkarsh Jain",
      p1: "Mr. Sunil Kumar Jain (DIN: 00010695) is Chairman & Managing Director of North Eastern Carrying Corporation Limited. He has done graduation in Commerce from University of Delhi and joined his family business in 1980 at an early age of 18 years.",
      p2: "With over 37 years of experience in transport, logistics, real estate as well as information technology industries, he has led NECC for achieving accelerated growth. Since 1999-2000 he leads the Company in all sectors vide operation, marketing and finance and had implemented new technologies vide computerization of head office, all regional offices and major branches in 2003. He equipped the vehicles with GPRS system.",
      p3: "Over 37 yearsMr. Jain has been awarded for his notable contribution to the Transport Sector by AITWA and for good business performance by “Inc. India 500” for his winning performance and stellar contribution to the Indian economy in terms of efficient entrepreneurship and growth.",
    },
  ];
  
  const nonExecutiveDirectors = [
    {
      id:1,
      name: "Mr. Manoj Kumar Jain",
      p1: "Mr. Manoj Kumar Jain (DIN: 02573858) is an Independent and Non-Executive Director of the Company since 2009. He is the Chairman of Audit Committee, Nomination & Remuneration Committee and Stakeholder Relationship Committee of the Company.",
      p2: "He is an industrialist and business consultant having experience of more than 21 years. He is a self motivated person having a professional approach emphasizing on ethics and integrity. He has been awarded and honored by many social and cultural organizations for his achievements. Mr. Manoj Kumar Jain is also serving as director in other listed Companies including MPS Infotecnics Limited and Advik Laboratories Limited.",
    
    },
    {
      id:2,
      name: "Mr.Ashutosh Kumar Dubey",
      p1: "Mr. Sunil Kumar Jain (DIN: 00010695) is Chairman & Managing Director of North Eastern Carrying Corporation Limited. He has done graduation in Commerce from University of Delhi and joined his family business in 1980 at an early age of 18 years.",
      p2: "With over 37 years of experience in transport, logistics, real estate as well as information technology industries, he has led NECC for achieving accelerated growth. Since 1999-2000 he leads the Company in all sectors vide operation, marketing and finance and had implemented new technologies vide computerization of head office, all regional offices and major branches in 2003. He equipped the vehicles with GPRS system.",
      p3: "Over 37 yearsMr. Jain has been awarded for his notable contribution to the Transport Sector by AITWA and for good business performance by “Inc. India 500” for his winning performance and stellar contribution to the Indian economy in terms of efficient entrepreneurship and growth.",
    },
  ];

  const auditCommittee1 = [
    {
      id:1,
      name: "Mr. Manoj Kumar Jain",
    },
    {
      id:2,
      name: "Mr. Ashutosh Dubey",
    },
    {
        id:3,
        name: "Mr. Saurav Upadhyay",
      },
  ];

  const StakeholdersRelationshipCommittee = [
    {
      id:1,
      name: "Mr. Manoj Kumar Jain",
    },
    {
      id:2,
      name: "Mr. Ashutosh Dubey",
    },
    {
        id:3,
        name: "Mr. Saurav Upadhyay",
      },
  ];

  const NominationandRemunerationCommittee = [
    {
      id:1,
      name: "Mr. Manoj Kumar Jain",
    },
    {
      id:2,
      name: "Mr. Ashutosh Dubey",
    },
    {
        id:3,
        name: "Mr. Saurav Upadhyay",
      },
  ];

  const CorporateSocialResponsibilityCommittee = [
    {
      id:1,
      name: "Mr. Manoj Kumar Jain",
    },
    {
      id:2,
      name: "Mr. Ashutosh Dubey",
    },
    {
        id:3,
        name: "Mr. Saurav Upadhyay",
      },
  ];
  
  return (
    <>
      {/* Investors area start */}
      <div className="service-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="service-details-wrap">
              <h2>Corporate Information</h2>
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <h6 className="subtitle CorporateInformation">
                    BOARD OF DIRECTORS
                  </h6>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                          Executive Directors
                        </h4>
                       <DirectorsComponent executiveDirectors={executiveDirectors}/>
                       
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                          Non-Executive Directors
                        </h4>
                       <DirectorsComponent executiveDirectors={nonExecutiveDirectors}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 align-self-center">
                  <h6 className="subtitle CorporateInformation">
                  COMMITTEES OF BOARD
                  </h6>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h6 className="CorporateInformation2 ">
                        Audit Committee
                        </h6>
                       <CommitteeBoardComponent auditCommittee={auditCommittee1}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h6 className="CorporateInformation2">
                        Stakeholders Relationship Committee
                        </h6>
                        <CommitteeBoardComponent auditCommittee={StakeholdersRelationshipCommittee}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h6 className="CorporateInformation2">
                        Nomination and Remuneration Committee
                        </h6>
                        <CommitteeBoardComponent auditCommittee={NominationandRemunerationCommittee}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h6 className="CorporateInformation2">
                        Corporate Social Responsibility Committee
                        </h6>
                        <CommitteeBoardComponent auditCommittee={CorporateSocialResponsibilityCommittee}/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 align-self-center">
                  <h6 className="subtitle CorporateInformation3">
                  CREDIT RATING INFORMATION
                  </h6>
                  <ul className='list-Corporate1' >
                      <li> 
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf className='list-Investors2' /> Rating Letter- India Ratings & Research Private Limited
                      </a>
                      </li>
                      <li> 
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf className='list-Investors2' /> Rating Letter Revised
                      </a>
                      </li>
                      <li> 
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf className='list-Investors2' />  For Queries Relating To Financial Statements
                      </a>
                      </li>
                      <li>
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf className='list-Investors2' /> For Investor Matters
                      </a> 
                      </li>
                      <li> 
                      <a href='#'>
                        {" "}
                        <FaRegFilePdf className='list-Investors2'/> For All Compliance Matters, Please Contact Our Compliance Officer
                      </a> 
                
                      </li>
                      </ul>
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

export default CorporateInformationInner;
