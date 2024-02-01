import React from "react";
import CurrentOpeningInnerPdf from "./CurrentOpeningInnerPdf";

const section = [
  {
    id: 1,
    name: "1",
    createdAt: "2024-01-31T09:41:07.000Z",
    updatedAt: "2024-01-31T09:41:07.000Z",
    categoryID: 1,
  },
  {
    id: 2,
    name: "2",
    createdAt: "2024-01-31T10:13:44.000Z",
    updatedAt: "2024-01-31T10:13:44.000Z",
    categoryID: 1,
  },
];

const CurrentOpeningInner = () => {
  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div class="heading text-center mb-50">
              <h2 class="heading__title">CURRENT OPENINGS</h2>
          </div>
          {section.map((item) => (
          <div className='row'>
                  <CurrentOpeningInnerPdf id={item.id}/>
            </div> ))}
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default CurrentOpeningInner;
