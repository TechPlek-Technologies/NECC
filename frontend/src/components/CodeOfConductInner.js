import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const CodeOfConductInner = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <>
      {/* Investors area start */}
      <div className="service-area pd-top-130 pd-bottom-45">
        <div className="container">
          <div className="row justify-content-center">
            <div className="service-details-wrap">
              <h2>CODE OF CONDUCT</h2>
              <div className="row">
                <div className="col-lg-12 align-self-center">
               
                  <div className="service-details-wrap">
                    <div className="row">
                      <div className="col-lg-12 align-self-center">
                        <h4 className="subtitle CorporateInformation1">
                        CODE OF CONDUCT FOR DIRECTORS AND SENIOR MANAGEMENT OF THE COMPANY
                        </h4>
                        <div className="service-details-wrap">
                          <b>Philosophy</b>
                          <p>NECC’s commitment to ethical and lawful business conduct is a fundamental shared value of the Board of Directors, the senior management and all employees of the Company. Consistent with its Values and Beliefs, NECC has formulated the following Code of Conduct as a guide. The Code does not attempt to be comprehensive or cover all possible situations. It encourages the NECC team to take positive actions, which are not only commensurate with the Values and Beliefs, but are also perceived to be so. NECC expects all its employees to implement the Code in its true spirit.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Applicability</b>
                          <p>The Code of Conduct shall come into force with immediate effect and it shall apply to –</p>
                          <ul>
                            <li>All Directors of the Company, whether executive or nonexecutive including (if any) Nominee Directors.</li>
                            <li>All Executives of the Company of the rank of General Manager and above including all functional heads.</li>
                          </ul>
                        </div>
                        <div className="service-details-wrap">
                          <b>Quality of Services</b>
                          <p>The Company shall be committed to supply services of the highest quality standards backed by efficient after-sales service consistent with the requirements of the customers to ensure their total satisfaction. The quality standards of the Company’s services should at least meet the required national standards and the Company should Endeavour to achieve international standards.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Protecting Company Assets</b>
                          <p>The assets of the Company should not be misused but employed for the purpose of conducting the business for which they are duly authorized. These include tangible assets such as equipment and machinery, systems, facilities, materials, resources as well as intangible assets such as proprietary information, relationships with customers and suppliers, etc.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Financial records</b>
                          <p>The Company shall prepare and maintain its accounts fairly and accurately in accordance with the accounting and financial reporting standards which represent the generally accepted guidelines, principles, standards, laws and regulations.
                          Internal accounting and audit procedures shall fairly and accurately reflect all of the Company’s business transactions and disposition of assets. All required information shall be accessible to Company auditors and government agencies.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Equal Opportunities Employer</b>
                          <p>The Company shall provide equal opportunities to all its employees and all applicants for employment, without regard to their race, caste, religion, marital status, sex, nationality, disability and veteran status. Employees of the Company shall be treated with dignity and in accordance with the Company’s policy to maintain a work environment free of sexual harassment, whether physical, verbal or psychological. Employee policies and practices shall be administered in a manner that would ensure that in all matters, equal opportunity is provided to those eligible and that decisions are merit-based.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Gifts and Donations</b>
                          <p>The Company, its Directors and Executives shall neither receive nor offer or make, directly or indirectly, any illegal payments, remuneration, gifts, donations or comparable benefits that are intended to, or perceived to obtain business or uncompetitive favours for the conduct of its business. However, the Company and its Directors and Executives may accept and offer nominal gifts which are customarily given and are of commemorative nature for special events.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Ethical conduct</b>
                          <p>The Directors and Executives shall deal on behalf of the Company with professionalism, honesty, integrity as well as high moral and ethical standards. Such conduct shall be fair and transparent and be perceived to be such by third parties. Every Director and Executive of the Company shall, in his business conduct, comply with all applicable laws and regulations, both in letter and in spirit.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Concurrent employment</b>
                          <p>The Executives of the Company shall not, without the prior approval of the Managing Director of the Company, accept employment or a position of responsibility (such as a consultant or a director) with a competitor Company, nor provide “freelance” services to anyone. In the case of a Director or the Managing Director, such prior approval must be obtained from the Board of Directors of the Company.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Confidentiality</b>
                          <p>The Directors and Executives shall maintain the confidentiality of confidential information of the Company or that of any customer, supplier or business associate of the Company to which supplier or business associate of the Company to which Company has a duty to maintain confidentiality, except when disclosure is authorized or legally mandated. The use of confidential information for his/her own advantage or profit is also prohibited.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Shareholders</b>
                          <p>The Company shall be committed to enhance shareholder value and comply with all regulations and laws that govern shareholders’ rights. The board of directors of the Company shall duly and fairly inform its shareholders about all relevant aspects of the Company’s business and disclose such information in accordance with the respective regulations and agreements.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Third-party representation</b>
                          <p>Parties that have business dealings with the Company such as consultants, agents, sales representatives, producers, contractors, suppliers, etc. shall not be authorised to represent this Company if their business conduct and ethics are known to be inconsistent with this Code of Conduct.</p>
                        </div>
                        <div className="service-details-wrap">
                          <b>Conflicts of Interest</b>
                          <p>The Directors and Executives should be scrupulous in avoiding ‘conflicts of interest’ with the Company. In case there is likely to be a conflict of interest, he/she should make full disclosure of all facts and circumstances thereof to the Chairman & Managing Director of the Company and a prior written approval be obtained. A conflict situation can arise in the under-mentioned circumstances:-</p>
                          <ul>
                            <li>When a Director or Executive takes action or has interests that may make it difficult to perform his or her work objectively and effectively.</li>
                            <li>The receipt of improper personal benefits by a member of his or her family as a result of one’s position in the Company.</li>
                            <li>Any outside business activity that detracts an individual’s ability to devote appropriate time and attention to his or her responsibilities with the Company.</li>
                            <li>Any significant ownership interest in any supplier, customer or competitor of the Company.</li>
                            <li>Any consulting or employment relationship with any supplier, customer, business associate or competitor of the Company.</li>
                          </ul>
                        </div>
                        <div className="service-details-wrap">
                          <b>Interpretation of the Code</b>
                          <p>Any question or interpretation under this Code of Conduct will be handled by the Executive Sub-Committee of the Board of Directors of the Company. The Executive Sub-Committee has the authority to waive compliance with this Code of Conduct for any Director or Executive of the Company. The person seeking waiver of this Code shall make full disclosure of the particular circumstances to the Executive Sub-Committee.</p>
                          <p><a target="blank" download={true} href="/assets/pdf/Code-of-Conduct.pdf" style={{color:"#29176d",fontWeight:"bold"}}>Click Here</a> to download Code of Conduct</p>
                        </div>
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

export default CodeOfConductInner;
