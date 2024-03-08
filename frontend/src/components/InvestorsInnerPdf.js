import {
    FaRegFilePdf,
  } from "react-icons/fa";
  import { Link } from "react-router-dom";
const InvestorsInnerPdf = ({pages}) => {

  function replaceSpacesWithHyphens(inputString) {
    // Use the replace method with a regular expression to replace spaces with hyphens
    let replacedString = inputString.replace(/ /g, "-");
    return replacedString;
}
    const data2 = [
      {
        id: 1,
        name: "CORPORATE INFORMATION",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
        eventID: 1,
      },
      {
        id: 2,
        name: "CORPORATE INFORMATION",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
        eventID: 1,
      },
      {
        id: 3,
        name: "CORPORATE INFORMATION",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
        eventID: 1,
      },
      {
        id: 4,
        name: "CORPORATE INFORMATION",
        pdfFileName: "e-del-Request-format.pdf",
        pdfFilePath: "./uploads/e-del-Request-format.pdf",
        eventID: 1,
      },
    ];
    return (
     <ul className=' list-inner-wrap list-Investors1' >
        {data2.map((item) => (
     <li> <Link key={item.id}
     to={item.pdfFilePath}>
     <FaRegFilePdf className='list-Investors2' />{item.name}{" "}
     </Link></li> ))}
     {pages?.map((item) => (
     <li> <Link
     key={item.id}
     to={`/${replaceSpacesWithHyphens(item.name)}/${item.id}`}
     style={{ textDecoration: "none", color: "inherit" }}
   >
    {item.name}{" "}
     </Link></li> ))}
   </ul>
    );
  };
  
  export default InvestorsInnerPdf;
  