import React from "react";
import NewspaperPublicationInnerPdf from "./NewspaperPublicationInnerPdf";

const section = [
  {
    id: 1,
    name: "Notice of EGM",
    subsection:"2023-2024",
    createdAt: "2024-01-31T09:41:07.000Z",
    updatedAt: "2024-01-31T09:41:07.000Z",
    categoryID: 1,
  },
  {
    id: 2,
    name: "1234",
    subsection:"2023-2024",
    createdAt: "2024-01-31T10:13:44.000Z",
    updatedAt: "2024-01-31T10:13:44.000Z",
    categoryID: 1,
  },
  {
    id: 3,
    name: "123456",
    subsection:"2023-2024",
    createdAt: "2024-01-31T10:13:49.000Z",
    updatedAt: "2024-01-31T10:13:49.000Z",
    categoryID: 1,
  },
];


const NewspaperPublicationInner= () => {
  return (
    <>
      <div className='blog-details-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='row justify-content-center'>
          <h2 className='title'>NEWSPAPER PUBLICATION</h2>
          {section.map((item) => (
             <div className='col-lg-12' key={item.id}>
                <div className='sidebar-area'>
                    <div className='widget widget_tags'>
                    <h4 className='widget-title'>
                        {item.name}
                        <span className='dot' />
                    </h4>
                    <h6>{item.subsection}</h6>
                    <NewspaperPublicationInnerPdf id={item.id}/>
                    </div>
                </div>
            </div>
             ))}
          </div>
        </div>
      </div>
       
    </>
  );
};

export default NewspaperPublicationInner;

