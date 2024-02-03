import React from "react";
import { Link } from "react-router-dom";

const FaqOne = () => {
  return (
    <>
      {/*faq-area start*/}
      <div className='pd-bottom-20'>
        <div className='container p-sm-0'>
          <div className='row'>
            {/* <div className='col-xl-6 col-lg-5 order-lg-2'>
              <div className='thumb text-center mb-4 mb-lg-0'>
                <img src='assets/img/faq/1.png' alt='Transpro' />
              </div>
            </div> */}
            <div className='col-xl-12 col-lg-7 order-lg-1'>
              <div className='section-title'>
                <h2 className='title'>FREQUENTLY ASKED ANY QUESTION</h2>
              </div>
              <div className='accordion faq-accordion' id='accordionExample'>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingOne'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      <span>1.</span> What do you know about N.E.C.C. ?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    aria-labelledby='headingOne'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    N.E.C.C. is an ISO certified & IBA approved company. A trusted 45 years old name in the history of Indian Transport Industry, with a brand range of freight management and customized logistics solutions.
                    </div>
                  </div>
                </div>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingTwo'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      <span>2.</span> What are the other companies under N.E.C.C. Group ?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTwo'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    North Eastern Carrying Corporation Ltd., NECC Logistics Ltd. (NX), NECC Packers & Movers, & NECC Telecom. are the Group Companies.
                    </div>
                  </div>
                </div>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingThree'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      <span>3.</span> What do you know about its network ?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingThree'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    N.E.C.C. have a network of more than 200 branches spread all over India , Nepal , Bhutan and Bangladesh . You can get the list of addresses of branch offices from our BRANCH LIST.
                    </div>
                  </div>
                </div>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingFour'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                      <span>4.</span> How can we keep track of consignments booked<br/> through N.E.C.C. ? 
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFour'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    We have an integrated high-tech software system with the help of which our Customer Care Department keep track on the movement of materials booked through our system.
                    </div>
                  </div>
                </div>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingFive'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                      <span>5.</span> What kind of consignment, does N.E.C.C., in normal course, avoid booking. ?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingFive'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    We generally do not book Oil, liquid, inflammable articles, hazardous materials and contraband items which are banned under the law of the land.
                    </div>
                  </div>
                </div>
                 <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingSix'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSix'
                      aria-expanded='false'
                      aria-controls='collapseSix'
                    >
                      <span>6.</span> Why should one need Insurance Cover for goods in transit ?
                    </button>
                  </h2>
                  <div
                    id='collapseSix'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingSix'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    There are inherent risk factors during transit period. For safeguard,, one should need Insurance Cover irrespective of the fact whether the goods are booked under Owner’s Risk (OR) or Carriers Risk (CR).
                    </div>
                  </div>
                </div>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingSeven'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSeven'
                      aria-expanded='false'
                      aria-controls='collapseSeven'
                    >
                      <span>7.</span> When does Storage/ demurrage charges become applicable?
                    </button>
                  </h2>
                  <div
                    id='collapseSeven'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingSeven'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    When a consignment arrives at its destination and delivery of the same is not undertaken by the party within a reasonable time period, the above charges become applicable.
                    </div>
                  </div>
                </div>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingEight'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseEight'
                      aria-expanded='false'
                      aria-controls='collapseEight'
                    >
                      <span>8.</span> Do N.E.C.C. undertake booking of the household consignments ?
                    </button>
                  </h2>
                  <div
                    id='collapseEight'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingEight'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Yes our NECC Packers & Movers division provides specialized services in household and industrial packing & movement.
                    </div>
                  </div>
                </div>
                <div className='accordion-item single-accordion-inner'>
                  <h2 className='accordion-header' id='headingNine'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseNine'
                      aria-expanded='false'
                      aria-controls='collapseNine'
                    >
                      <span>9.</span> What are the prohibited materials which we can not carry? 
                    </button>
                  </h2>
                  <div
                    id='collapseNine'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingNine'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    Please check the link below
                    </div>
                  </div>
                </div>     
                <div className='accordion-item single-accordion-inner mb-0'>
                  <h2 className='accordion-header' id='headingTen'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTen'
                      aria-expanded='false'
                      aria-controls='collapseTen'
                    >
                      <span>10.</span> How can a person lodge complaint online ?
                    </button>
                  </h2>
                  <div
                    id='collapseTen'
                    className='accordion-collapse collapse'
                    aria-labelledby='headingTen'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                    A complaint can be e-mailed at- <Link to='mailto:customercare@neccgroup.com'>
                    customercare@neccgroup.com{" "}
                    </Link> or <Link to='mailto:coadmin@neccgroup.com'>
                    coadmin@neccgroup.com{" "}</Link>
                    </div>
                  </div>
                </div>
                
              </div>

            </div>
          </div>
        </div>

      </div>
      {/*faq-area end*/}
    </>
  );
};

export default FaqOne;
