import {
    FaRegFilePdf,
  } from "react-icons/fa";
const CorporateInformationInnerPdf2 = ({id}) => {
    const vicePresident = [
      {
            serial: 1,
            name: "Rating Letter- India Ratings & Research Private Limited",
            designation: "123123",
            pdfFileName: "e-del-Request-format.pdf",
            pdfFilePath: "./uploads/e-del-Request-format.pdf",
        
      },
      {
        
            serial: 2,
            name: "Rating Letter Revised",
            designation: "123123",
            pageID: 2,
            pdfFileName: "e-del-Request-format.pdf",
            pdfFilePath: "./uploads/e-del-Request-format.pdf",
        
      },
    ];
      return (
        vicePresident.map((item) => (
            <ul className='list-Corporate1' id={item.id} >
                <li> 
                      <a href='item.pdfFilePath'>
                        <FaRegFilePdf className='list-Investors2' />{item.name}
                      </a>
                      </li>
         
          </ul> ))
      );
    };

    export default CorporateInformationInnerPdf2;