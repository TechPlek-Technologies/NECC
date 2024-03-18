import React from "react";

import CurrentOpeningInnerPdf from "./CurrentOpeningInnerPdf";



const CurrentOpeningInner = () => {

  


  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-90 pd-bottom-45'>
        <div className='container'>
          <div class="heading text-center mb-50">
              <h2 class="heading__title">CURRENT OPENINGS</h2>
          </div>
       
          <div className='row'>
                  <CurrentOpeningInnerPdf/>
            </div> 
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default CurrentOpeningInner;
