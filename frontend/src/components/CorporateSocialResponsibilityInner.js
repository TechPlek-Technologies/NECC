import React from "react";
import CorporateSocialResponsibilityPdf from "./CorporateSocialResponsibilityPdf";
import CompositionInner from "./CompositionInner";

const CorporateSocialResponsibilityInner = () => {
    
  return (
    <>
      {/* Start Solution area  */}
      <div className='csr_area text-center'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='section-title   text-center'>
                <span className='subtitles'>Experience</span>
                <h2 className='title'>Our CSR Initiatives</h2>
                <p>
                The Company has its “Corporate Social Responsibility Policy” in consonance with the CSR Policy framework enshrined in Section 135 of the Companies Act, 2013, Companies (Corporate Social Responsibility & Sustainability Policy)Rules, 2014 notified by the Ministry of Corporate Affairs, Government of India.
                </p>
                <p>
                NECC’s CSR policy is aimed at demonstrating care for the community through its focus on education & skill development. Also embedded in this objective is support to the marginalized cross section of the society by providing opportunities to improve their quality of life. In line with the above, the Company ensures carrying out CSR projects/ programs in line with activities prescribed under Schedule VII of the Companies Act, 2013
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Solution area  */}
      {/*Csr initiative area  */}
      <div
        className='features-area-2'
        style={{
          backgroundImage: 'url("/assets/img/bg/project-undertaken.webp")',
        }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-4'>
                <div className='row'>
                    <div className='col-md-6'>
                    <div className='thumb'>
                        <img
                        className='w-100'
                        src='/assets/img/about/child-education.webp'
                        alt='Transpro'
                        />
                    </div>
                    </div>
                    <div className='col-md-6'>
                    <div className='thumb csrimg'>
                        <img
                        className='w-100'
                        src='/assets/img/about/poor-child.webp'
                        alt='Transpro'
                        />
                    </div>
                </div>
              </div>
            </div>
            <div className='col-xl-8 d-flex'>
              <div className='section-title white  text-left m-auto'>
                <h2 className='title'>Overview of the activities/projects undertaken</h2>
                <p>
                The Company supports Sewa Bharati, a NGO working towards the upliftment & empowerment of the neglected and under-privileged sections of the society. Sewa Bharati has numerous hostels for the economically underprivileged children across the country, especially the tribal and the rural poor. The organization supports primary education centers in rural areas and in slums. It also helps students from the remote tribal areas to enroll in schools in different parts of the country and sponsors all their educational and other needs.
                </p>
              
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='service-area pd-top-45 pd-bottom-45'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-8'></div>
      <div className='service-details-wrap'>
                <h2 className="list-Investors">COMPOSITION OF CSR COMMITTEE</h2>
                <p>
                The Company has constituted CSR Committee in accordance with the provisions of Section 135 of the Companies Act, 2013 comprising of the following Members
                </p>

                <CompositionInner/>

              </div>
     
       </div>
      </div>
    </div>



      {/*pdf download area  */}
      <div className='blog-details-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-12'>
              <div className='sidebar-area'>
                <div className='widget widget-recent-post'>
                <div className='widget widget_tags'>
                  <h4 className='widget-title'>
                    DOWNLOADS
                    <span className='dot' />
                  </h4>
                  <CorporateSocialResponsibilityPdf/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/*pdf download area  */}
    </>
  );
};

export default CorporateSocialResponsibilityInner;
