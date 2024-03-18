import React from "react";

const ListingInformationInner = () => {
  return (
    <>
      {/* Start Services area  */}
      <div className='service-area pd-top-130 pd-bottom-45 '>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-11 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                <h2 className='title'>LISTING INFORMATION</h2>
             
          <h4 style={{marginTop:"20px",marginBottom:"20px"}}>STOCK EXCHANGE</h4>
           <p> <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                              style={{marginRight:"5px"}}
                            /><b>We are listed with</b></p>
                <div className='row'>
                      <div className='col-xl-6 col-lg-12 col-md-6'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                          1. National Stock Exchange of India Limited<br/>
                          SYMBOL:NECC LTD.
                          </li>
                          <li>
                           2. BSE  Ltd.<br/>
                           SCRIP CODE:534615<br/>
                           ISIN- INE553C01016
                          </li>
                        </ul>
                      </div>
                    </div>
                   
                        <div className='row' style={{marginTop:"10px"}}>
                            <div className='col-xl-6 col-lg-12 col-md-6'>
                           
                            <p> <img
                              src='./assets/img/icon/check.png'
                              alt='Transpro'
                              style={{marginRight:"5px"}}
                            /><b>Depositories</b></p>
                                <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                                <li>
                                1. Central Depository Services (India) Limited<br/>
                                P.J.Towers, Dalal Street,<br/>
                                16th & 17th Floor, Fort,<br/>
                                Mumbai – 400 001

                                </li>
                                <li>
                               2. National Securities Depository Limited<br/>
                            Trade World, A wing, 4th & 5th Floors,<br/>
                            Kamala Mills Compound, Senapati Bapat Marg<br/>
                            Lower Parel, Mumbai – 400 013
                                </li>
                                </ul>
                            </div>
                            </div>
                 </div>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* End Services area  */}
    </>
  );
};

export default ListingInformationInner;
