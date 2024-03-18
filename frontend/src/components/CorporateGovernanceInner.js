import React from "react";
import CorporateGovernanceInnerPdf from "./CorporateGovernanceInnerPdf";

const section = [
   {
     id: 1,
     name: "12345",
     createdAt: "2024-01-31T09:41:07.000Z",
     updatedAt: "2024-01-31T09:41:07.000Z",
     categoryID: 1,
   },
 ];

const CorporateGovernanceInner = () => {

   
  return (
    <>
      {/* blog-details area start */}
      <div className="blog-details-area pd-top-130 pd-bottom-120">
        <div className="container">
          <div className="row justify-content-center">
            <h2 className="title">CORPORATE GOVERNANCE</h2>

            <div className="col-lg-12">
              <div className="sidebar-area">
                {section.map((item) => (
                  <div className="widget widget_tags" key={item.id}>
                    <h4 className="widget-title">
                      {item.name}
                      <span className="dot" />
                    </h4>
                    <CorporateGovernanceInnerPdf id={item.id}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* blog-details area end */}
    </>
  );
};

export default CorporateGovernanceInner;
