import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const PresidentComponent = ({ vicePresident }) => {
    return (
      <div>
        {vicePresident.map((president) => (
          <div key={president.id} className="service-details-wrap">
            <b>{president.name}</b>
            <p>{president.p1}</p>
            <p>{president.p2}</p>
            <p>{president.p3}</p>
          </div>
        ))}
      </div>
    );
  };

const KeyManagementPersonnelInner = () => {
  const [isOpen, setOpen] = useState(false);

  const vicePresident = [
    {
        id:1,
      name: "Sh. Shyam Lal Yadav",
      p1: "A Graduate in arts from Delhi University and Masters in Arts from Rajasthan University joined the corporation in 1986 and contributed towards the growth of organization. By his efforts, skill and experiences, he assisted the management towards the continuous growth & success of organization.",
      p2: "Having long financial experience he is also engaged in fund procurement, and is incharge of finance and accounts. By the same time he not only leads but also involves himself in the financial planning, its management and overall management, administration and execution of company’s business policies.",  
    },
  ];

  const assistantVicePresident = [
    {
        id:1,
      name: "Sh. Vikash Shekhar",
      p1: "A seasoned professional with more than 24 years of extensive experience in Business management, operations involving sales, marketing, operations, Supply chain management, import, export, international & domestic logistics, network planning, product launches, branding, man power management, compliances of government regulatory with ROI accountability in product as well as service industry.",
      p2: "He is first class graduate added by degree in multi-modal logistics management from Institute of Rail Management, Delhi and supply chain & retail management from IIT, Delhi. He is serving in NECC Ltd as Assistant Vice President based at corporate office and managing business operations with focus on top line as well as bottom line performance.",  
    },
  ];

  const generalManager = [
    {
        id:1,
      name: "Sh. Ravi Gupta",
      p1: "He is Graduate in commerce and joined the company on 09.07.2001 as its General Manager. He handles the services with major clients group, coordinate with the position, movement and delivery of vehicles. He is responsible for identification of various major clients, negotiating and finalization of rates with them and raising revenue of the company in form of freight charges and by reduction in carrying cost and affixing viable and reasonable freight rate. He has to keep vigil on the functioning of the regions and branches deputed under him.",
      
    },
  ];

  const deputyGeneralManager = [
    {
        id:1,
      name: "Sh. R. Balachandran",
      p1: "He is Graduate in commerce from A.V.C. Collage and joined the company on 11.08.2008 as its Dy. GM. He handles the services with major clients group, coordinate with the position, movement and delivery of vehicles. He is responsible for identification of various major clients, negotiating and finalization of rates with them and raising revenue of the company in form of freight charges and by reduction in carrying cost and affixing viable and reasonable freight rate. He has to keep vigil on the functioning of the regions and branches deputed under him.",
      
    },
  ];

  const assistantGeneralManager = [
    {
        id:1,
      name: "Sh. Vinod R. Nair (HR & Legal)",
      p1: "He is Graduate in arts from Delhi University, LL.B. from Kanpur University and PGDM (PM & IR) from Rajendra PD Institute, Delhi. He is a man, coordinating and successfully leading both the legal and HR functionaries of the organization. Contributing through his advices on legal and hr matters, he handles the manpower procurement, deputation, induction, appraisal and their wage structure.",
      p2:"He also formulates the policies regarding both department and contributed in strategic planning of the company, cast reduction in manpower etc.",
      
    },
    {
        id:2,
      name: "Sh. John Vaz   (Business & Operation)",
      p1: "A Graduate in commerce from Mumbai University, have joined the company on 20/10/2001 as its regional manager have expertise in creating new business cliental in the sector. He is executing the Mumbai and Vaapi based business and assisting the director there at in creating new horizon for the company. He is tackling the general business operation and management, planning and controlling all financial issues at regional level.",
      
    },
  ];
  
  const managerAccount = [
    {
        id:1,
      name: "Sh. S.N. Singh",
      p1: "A Commerce graduate from Kolkata University and member of ICWAI since 1997 is heading the accounts department and associated with all financial decision making of the company. He has above 10 years experience in general accounting principals and procedure of the industry. He is handling and responsible for all associated issues and coordinating with branch for minor to major accounting, financial setback.",
      
    },
  ];

  const managerIt = [
    {
        id:1,
      name: "Sh. R.N. Prasad",
      p1: "A Masters in Science from Bhagalpur University (Bihar) have vast experience in It sector especially in software development, hardware and network administration. He is leading the organizations IT department sine induction of IT in the company. He has joined the company in 1997. It was the time when the computer technology was getting little recognition in the industry and he is the man who actually introduces the computers as database for the company. After his various efforts the computers were given true recognition and utilized in general accounting, database and other applications.",
      
    },
  ];

  const managerAdministration = [
    {
        id:1,
      name: "Sh. Prabhajeet Singh",
      p1: "He has joined the corporation in 1984 as Executive administrative officer. A commerce graduate from Delhi University in 1991, he has a multifarious experience not only in office administration but also in claim settlement, liasoning with parties, insurance companies and reaching at reasonable settlement.",
      p2:"He is heading various departments likewise, claim, purchase, stores, dispatch and specially functioning of department issuing duplicate lorry receipts.",
      
    },
  ];

  const companySecretary = [
    {
        id:1,
      name: "Mr. Gaurav Verma",
      p1: "He is Bachelor of Commerce (H) from University of Delhi and 2010 qualified ACS associated with company from 18.07.2011 as youngest member of managerial team of the company. He is responsible for all secretarial issues and to co ordinate with the statutory bodies like MCA, SEBI, RBI and Stock Exchanges.",
    },
  ];
 
  
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
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        VICE PRESIDENT
                        </h4>
                        <PresidentComponent vicePresident={vicePresident}/>
                       
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        ASSISTANT VICE PRESIDENT
                        </h4>
                        <PresidentComponent vicePresident={assistantVicePresident}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        GENERAL MANAGER
                        </h4>
                        <PresidentComponent vicePresident={generalManager}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        DEPUTY GENERAL MANAGER
                        </h4>
                        <PresidentComponent vicePresident={deputyGeneralManager}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        ASSISTANT GENERAL MANAGER
                        </h4>
                        <PresidentComponent vicePresident={assistantGeneralManager}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        MANAGER ACCOUNTS
                        </h4>
                        <PresidentComponent vicePresident={managerAccount}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        MANAGER IT
                        </h4>
                        <PresidentComponent vicePresident={managerIt}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        MANAGER ADMINISTRATION
                        </h4>
                        <PresidentComponent vicePresident={managerAdministration}/>
                      </div>
                    </div>
                  </div>
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        COMPANY SECRETARY
                        </h4>
                        <PresidentComponent vicePresident={companySecretary}/>
                      </div>
                    </div>
                  </div>
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
