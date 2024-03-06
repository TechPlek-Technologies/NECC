import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const HistoryInner= () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ChairmanDesk area start */}
      <div className='service-area pd-top-45 pd-bottom-45'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                  <h2 className='title'>
                    HISTORY
                    </h2>
                  <p className='content'>
                  Our Company was originally incorporated on December 05, 1984, as a private limited company, under the name and style ‘Prakarima Leasing Private Limited’ under the provisions of the Companies Act, 1956, with the Registrar of Companies, Delhi and Haryana. Our Company was thereafter converted into a public limited company vide shareholders resolution passed at an extra-ordinary general meeting of the Company held on December 17,1984 and the name of our Company was changed to ‘Prakarima Leasing Limited’, and a fresh Certificate of Incorporation was issued by the Registrar of Companies, Delhi and Haryana on  January 16, 1995.
                </p>
                <p className='content'>
                In the subsequent year of 1995, the name of our Company was further changed to ‘N.E.C.C. Finlease Limited’ and a fresh certificate of incorporation consequent upon change of name was issued by the Registrar of Companies, Delhi and Haryana on January 03, 1995. Subsequently, the name of our Company was further changed to ‘North Eastern Carrying Corporation Limited’ and a fresh Certificate of Incorporation pursuant to change of name was issued by the Registrar of Companies, NCT of Delhi and Haryana on October 06, 1999.
                </p>
                <p className='content'>
                Our Company was listed on Delhi Stock Exchange effective from June 13, 1986, however, SEBI had cancelled all non-operational stock exchanges including Delhi Stock Exchange vide its circulars bearing reference numbers ‘MRD/DOP/SE/CIR36/2008 dated December 29, 2008’, ‘CIR/MRD/DSA/14/2012 dated May 30, 2012’, and ‘CIR/MRD/DSA/05/2015 dated April 17, 2015’, in pursuance of which our Company ceased to be listed effective from January 23, 2017. The Company was listed on the BSE Limited effective from August 10, 2012, and on the NSE effective from March 02, 2016, bearing NSE Symbol ‘NECCLTD’ and BSE Scrip ID ‘534615’.
                </p>
                 </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* ChairmanDesk area end */}
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

export default HistoryInner;
