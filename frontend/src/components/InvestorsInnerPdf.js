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
  // const data2 = [
  //   {
  //     id: 1,
  //     name: "CORPORATE INFORMATION",
  //     pdfFileName: "e-del-Request-format.pdf",
  //     pdfFilePath: "./uploads/e-del-Request-format.pdf",
  //     eventID: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "CORPORATE INFORMATION",
  //     pdfFileName: "e-del-Request-format.pdf",
  //     pdfFilePath: "./uploads/e-del-Request-format.pdf",
  //     eventID: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "CORPORATE INFORMATION",
  //     pdfFileName: "e-del-Request-format.pdf",
  //     pdfFilePath: "./uploads/e-del-Request-format.pdf",
  //     eventID: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "CORPORATE INFORMATION",
  //     pdfFileName: "e-del-Request-format.pdf",
  //     pdfFilePath: "./uploads/e-del-Request-format.pdf",
  //     eventID: 1,
  //   },
  // ];
  return (
   <ul className=' list-inner-wrap list-Investors1' >
      {/* {data2.map((item) => (
   <li> <Link key={item.id}
   to={item.pdfFilePath}>
   <FaRegFilePdf className='list-Investors2' />{item.name}{" "}
   </Link></li> ))} */}
   {pages?.map((item) => (
   <li> <Link
   key={item.id}
   to={`/${replaceSpacesWithHyphens(item.name)}/${item.id}`}
   style={{ textDecoration: "none", color: "inherit" }}
 >
  {item.name.toUpperCase()}{" "}
   </Link></li> ))}

   <li> <Link  to="/CorporateInformation">CORPORATE INFORMATION {" "}</Link></li>
   <li> <Link  to="/service">BUSINESS DETAIL {" "}</Link></li>
   <li> <Link  to="/CorporateInformation">BOARDS OF DIRECTORS {" "}</Link></li>
   <li> <Link  to="/Annual-Report-&-Financials/33">TERMS AND CONDITIONS OF APPOINTMENT OF INDEPENDENT DIRECTORS {" "}</Link></li>
   <li> <Link  to="/CorporateInformation">COMPOSITION OF VARIOUS COMMITTEES OF BOARD OF DIRECTORS {" "}</Link></li>
   <li> <Link  to="/CorporateInformation"> CREDIT RATING{" "}</Link></li>
   <li> <Link  to="/CorporateInformation">THE EMAIL ADDRESS FOR GRIEVANCE REDRESSAL AND OTHER RELEVANT DETAILS{" "}</Link></li>
   <li> <Link  to="/CodeOfConduct">CODE OF CONDUCT OF BOARD OF DIRECTORS AND SENIOR MANAGEMENT PERSONNEL{" "}</Link></li>
   <li> <Link  to="/POLICES-&-CODE/37">VIGIL MECHANISM POLICY{" "}</Link></li>
   <li> <Link  to="/POLICES-&-CODE/37">POLICY ON DEALING WITH RELATED PARTY TRANSACTIONS{" "}</Link></li>
   <li> <Link  to="/POLICES-&-CODE/37">POLICY FOR DETERMINING ‘MATERIAL’ SUBSIDIARIES{" "}</Link></li>
   <li> <Link  to="/POLICES-&-CODE/37">DETAILS OF FAMILIARIZATION PROGRAMMES IMPARTED TO INDEPENDENT DIRECTORS{" "}</Link></li>
   <li> <Link  to="/POLICES-&-CODE/37">POLICY FOR DETERMINATION OF MATERIALITY OF EVENTS/ INFORMATION{" "}</Link></li>
   <li> <Link  to="/Annual-Report-&-Financials/33">  FINANCIALS  {" "}</Link></li>
   <li> <Link  to="/QUARTERLY-COMPLIANCES/35"> NOTICE OF BOARD MEETING {" "}</Link></li>
   <li> <Link  to="/Annual-Report-&-Financials/33"> FINANCIAL RESULTS {" "}</Link></li>
   <li> <Link  to="/QUARTERLY-COMPLIANCES/35"> SHAREHOLDING PATTERN {" "}</Link></li>
   <li> <Link  to="/QUARTERLY-COMPLIANCES/35"> DISCLOSURE FOR RELATED PARTY TRANSACTIONS {" "}</Link></li>
   <li> <Link  to="/ANNUAL-REPORT-&-NOTICE-OF-AGM/32"> ANNUAL RETURN {" "}</Link></li>
   <li> <Link  to="/ANNUAL-REPORT-&-NOTICE-OF-AGM/32"> SECRETARIAL COMPLIANCE REPORT {" "}</Link></li>
   <li> <Link  to="/Feedback">  INVESTOR FEEDBACK  {" "}</Link></li>
   <li> <Link  to="/POLICES-&-CODE/37"> POLICY {" "}</Link></li>
   <li> <Link  to="/POLICES-&-CODE/37">CONTACT DETAILS OF KEY MANAGERIAL PERSONNEL AUTHORIZED FOR DETERMINING MATERIALITY OF AN EVENT/ INFORMATION{" "}</Link></li>
   <li> <Link  to="/POLICES-&-CODE/37">CRITERIA OF MAKING PAYMENTS TO NON-EXECUTIVE DIRECTORS , IF THE SAME HAS NOT BEEN DISCLOSED IN ANNUAL REPORT{" "}</Link></li>
   <li> <Link  to="/CorporateInformation">CONTACT INFORMATION OF THE DESIGNATED OFFICIALS WHO ARE RESPONSIBLE FOR ASSISTING AND HANDLING INVESTOR GRIEVANCES {" "}</Link></li>
   <li>Details of agreements entered into with the media companies and/or their associates, etc. (Not Applicable)</li>
   <li>Schedule of analyst or institutional investor meet and presentations made by the listed entity to analysts or institutional investors. (No)</li>
   <li>New name and the old name of the listed entity for a continuous period of one year, from the date of the last name change. (No)</li>
   <li>Financials of Foreign Subsidiaries. (Not Applicable)</li>
   <li>Dividend Distribution Policy. (Not Applicable)</li>
   <li>Statement of deviation(s) or variation (s) as specified in regulation 32 of SEBI (LODR) Regulation. (Not Applicable)</li>

 </ul>
  );
};

export default InvestorsInnerPdf;
