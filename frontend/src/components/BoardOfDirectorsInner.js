import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const DirectorComponent = ({ boardDirector }) => {
    return (
      <div>
        {boardDirector.map((director) => (
          <div key={director.id} className="service-details-wrap">
            <h4 className="subtitle CorporateInformation1">{director.name}</h4>
            <p>{director.p1}</p>
            <p>{director.p2}</p>
            <p>{director.p3}</p>
          </div>
        ))}
      </div>
    );
  };

const BoardOfDirectorsInner = () => {
  const [isOpen, setOpen] = useState(false);

  const boardDirector = [
    {
      id:1,
      name: "Mr. Jaswant Rai Jain",
      p1: "A true determined and polite entrepreneur who has given this height of success to the company is born on 13th November 1936. Having being graduate in arts and laws he opted transportation business as his carrier path and establish a partnership firm “North Eastern Carrying Corporation”. After generating vast client base and market goodwill he joined the company on 30.09.1995 as its director and become its Chairman during 1999-2000 after taking over the business of firm by the company.",
      p2: "He has long experience of industry and with his efforts and collective decision making, company performed quite satisfactorily during the recent market downturn. He is contributing toward growth, success and accomplishing client satisfaction.",  
    },
    {
        id:2,
        name: "Mr. Sunil kumar Jain",
        p1: "The Elder son of Sh. Jaswant Rai Jain was born on 21st July, 1962. This was the pre establishment period of “North Eastern Carrying Corporation”. Grown with growing business he has completed his graduation in commerce from university of Delhi and joined his family business in 1980 at an early age of 18 years. On 10.10.1994 he joined the company as its director and started the business with a new vision.",
        p2: "He has versatile experiences of transport, real estate as well as information technology. Presently, he is also a part of the Board of Parsvnath Developers Limited, a real estate giant, Visesh Infotechnics Limited and NECC Logistics limited, companies listed either with BSE, NSE or other regional stock exchanges.",  
        p3:"Since 1999-2000   he leads the company in all sectors vide operation, marketing and finance and had implemented new technologies vide computerization of head office, all regional offices and major branches in 2003. He equipped the vehicles with GPRS system. On his effort the member of the company rewarded him and appointed as new Chairman of the company on 06.06.2009.",
      },
      {
        id:3,
        name: "Mr. Sanjeev Jain",
        p1: "On 02nd July 1969, Sh. Sanjeev Jain born as younger son of Sh. Jaswant Rai Jain. This is the period of post “North Eastern Carrying Corporation”. He has a newly established business with vast experiences and up-n-downs. He completed his education as his elder’s brother and holds degree in commerce from university of Delhi. He also joined the business and become the director of the company on 10.10.1994. He operates the north Indian business of the company.", 
      },
      {
        id:4,
        name: "Mr. Roshan Dabriwal",
        p1: "He is Graduate with 20 years of experience. He is born on 17th July, 1966. He has joined the Company Board on 18th September, 2004 as non-executive & independent Director. He is a chairman cum member of the audit committee of the Company since he joined the board of Director. He is also a director in Prabhatam Colonizers Limited, Metcalfe Developers Limited, Prabhatam Buildwell Limited, Prabhatam Infrastructures Limited and some other private limited Companies.",
      },
      {
        id:5,
        name: "Mr. Manoj Kumar Jain",
        p1: "He has 21 years of experience. He is born on 7th January, 1966. He has joined the Company Board on 24th March, 2009 as non-executive & independent Director. He is the youngest director of the Board of Directors of the Company. He is also member of the audit Committee and the remuneration Committee of the Company. He is also a Director in Goyal Achal Sampatti Vikas And Niyojan Nigam Limited, Optiemus Infracom Limited, N E C C Securities Private Limited, Shubhi Agencies Private Limited and Super Realcon Private Limited.",
      },
      {
        id:6,
        name: "Mr.Ashutosh Kumar Dubey",
        p1: "Mr. Ashutosh Kumar Dubey (DIN: 07621637) is an Independent and Non-Executive Director of the Company . He is a qualified Company Secretary with over 6.5 years of experience in managing legal operations, secretarial operations, documentation, and compliance management. He has expertise in Corporate Governance and Secretarial matters.",
      },
      {
        id:7,
        name: "Mr.Saurav Upadhyay",
        p1: "Mr. Saurav Upadhyay (DIN: 05350001) is an Independent and Non-Executive Director of the Company. He is a qualified Company Secretary with over 10 years of experience in various Companies as a Director and legal operations, secretarial operations, documentation, and compliance management services. He has expertise in Corporate Legal & Secretarial work specifically in the areas of Secretarial Audit, Legal Compliances etc.",
      },
      {
        id:8,
        name: "Ms Priya Singh",
        p1: "Ms. Priya Singh (DIN: 08727539) is an Independent and Non-Executive Women Director of the Company. She is a qualified Company Secretary with over 2 years of experience in the field of Legal and Secretarial Compliances. She has expertise in Legal and Secretarial Compliances.",
      },
  ];
 
  
  return (
    <>
      {/* Investors area start */}
      <div className="service-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="service-details-wrap">
              <h2 className="subtitle">BOARD OF DIRECTORS</h2>
              <div className="row">
                <div className="col-lg-12 align-self-center">
                  <div className="service-details-wrap">
                    <div className="thumb"></div>
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        {/* <h4 className="subtitle CorporateInformation1">
                        VICE PRESIDENT
                        </h4> */}
                        <DirectorComponent boardDirector={boardDirector}/>
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

export default BoardOfDirectorsInner;
