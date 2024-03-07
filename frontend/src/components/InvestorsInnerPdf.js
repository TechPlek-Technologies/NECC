
  import { Link } from "react-router-dom";
const InvestorsInnerPdf = ({pages}) => {
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
        {pages.map((item) => (
     <li> <Link key={item.id}
     to={item.pdfFilePath}>
    {item.name}{" "}
     </Link></li> ))}
   </ul>
    );
  };
  
  export default InvestorsInnerPdf;
  