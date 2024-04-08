import React from "react";

const WhyChooseUsTwo = () => {
  return (
    <>
      {/*wcu-area start*/}
      <div
        className='wcu-area-2 pd-top-60'
        style={{ backgroundImage:' url("/assets/img/wcu/why-choose-us (2).png")' }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <div className='section-title style-white text-center'>
                <h2 className='title1'>WHY CHOOSE US</h2>
                <p className='content para'>
                North Eastern Carrying Corporation Limited is among the leading Logistics Company with Pan India Presence and offering various services under one roof to meet the client’s needs in the most cost-effective solutions.
                </p>
              </div>
            </div>
          </div>
          <div className='row mg-top-20'>
            <div className='col-lg-4'>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='/assets/img/wcu/we-listen.webp' alt='Transpro' />
                </div>
                <div className='details1'>
                  <h6>WE LISTEN</h6>
                  <p>
                  Understand client's needs, tailoring logistics solutions for efficiency.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='/assets/img/wcu/walk.webp' alt='Transpro' />
                </div>
                <div className='details1'>
                  <h6>WE WALK WITH CLIENTS</h6>
                  <p>
                  Collaborate closely, navigating logistics challenges for seamless operations.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='thumb text-center'>
                <img src='/assets/img/about/why-choose-us (1).webp' alt='Transpro' />
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='/assets/img/wcu/solution.webp' alt='Transpro' />
                </div>
                <div className='details1'>
                  <h6>WE CREATE SOLUTIONS</h6>
                  <p>
                  Innovate customized logistics strategies integrating automated ERP software solutions.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap style-2'>
                <div className='icon'>
                  <img src='/assets/img/wcu/future.webp' alt='Transpro' />
                </div>
                <div className='details1'>
                  <h6>WE LOOK INTO THE FUTURE</h6>
                  <p>
                  Anticipate trends, leveraging technology for agile supply chain management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*wcu-area end*/}
    </>
  );
};

export default WhyChooseUsTwo;
