
  import { Link } from "react-router-dom";
const InvestorsInnerPdf = ({pages}) => {
   
    return (
     <ul className=' list-inner-wrap list-Investors1' >
      <li><Link to="/AnnualReportAndNoticeOfAGM">ANNUAL REPORT & NOTICE OF AGM</Link></li>
      <li><Link to="/CorporateInformation">CORPORATE INFORMATION</Link></li>
      <li><Link to="/CorporateGovernance">CORPORATE GOVERNANCE</Link></li>
      <li><Link to="/NewspaperPublication">NEWSPAPER PUBLICATION</Link></li>
      <li><Link to="/QuarterlyCompliances">QUARTERLY COMPLIANCES</Link></li>
      <li><Link to="/RightIssues">RIGHT ISSUES</Link></li>
        {pages.map((item) => (
     <li> <Link key={item.id}
     to={item.pdfFilePath}>
    {item.name}{" "}
     </Link></li> ))}
   </ul>
    );
  };
  
  export default InvestorsInnerPdf;
  