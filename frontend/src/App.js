import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import ChairmanDesk from "./pages/ChairmanDesk";
import CorporateOverview from "./pages/CorporateOverview";
import VisionAndQualityPolicy from "./pages/VisionAndQualityPolicy";
import Career from "./pages/Career";
import Feedback from "./pages/Feedback";
import Faq from "./pages/Faq";
import "./custum-css/style.css";
import Investors from "./pages/Investors";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Dashboard/pages/Home";
import CorporateInformation from "./pages/CorporateInformation";
import Carrier from "./pages/Dashboard/pages/Carrier";
import History from "./pages/History";
import ConsignmentTrackingaAndEnquiry from "./pages/ConsignmentTrackingaAndEnquiry";
import Office from "./pages/Dashboard/pages/Office";
import OfficeContact from "./pages/Dashboard/pages/Contact";
import InvestorsTab from "./pages/Dashboard/pages/InvestorsTab";
import AdminQuaterlyCompliance from "./pages/Dashboard/pages/AdminQuaterlyCompliance";
import AdminMagazines from "./pages/Dashboard/pages/AdminMagazines";
import AdminDownloads from "./pages/Dashboard/pages/AdminDownloads";
import NeccGroup from "./pages/NeccGroup";
import NeccLogistics from "./pages/NeccLogistics";
import NeccTelecom from "./pages/NeccTelecom";
import Necc from "./pages/Necc";
import NeccEcomSolution from "./pages/NeccEcomSolution";
import KeyManagementPersonnel from "./pages/KeyManagementPersonnel";
import ServiceDetail1 from "./pages/ServiceDetail1";
import ServiceDetail2 from "./pages/ServiceDetail2";
import ServiceDetail3 from "./pages/ServiceDetail3";
import ServiceDetail4 from "./pages/ServiceDetail4";
import ServiceDetail5 from "./pages/ServiceDetail5";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import SiteMap from "./pages/SiteMap";
import CorporateGovernance from "./pages/CorporateGovernance";
import AnnualReport from "./pages/AnnualReport";
import QuarterlyCompliances from "./pages/QuarterlyCompliances";
import AdminPdfReports from "./pages/Dashboard/pages/AdminPdfReports";
import Download from "./pages/Download";
import Polices from "./pages/Polices";
import AnnualReportFinancial from "./pages/AnnualReportFinancial";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Fragment>
        <Routes>
          <Route exact path="/" element={<HomeOne />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/faq" element={<Faq />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/ChairmanDesk" element={<ChairmanDesk />} />
          <Route
            exact
            path="/CorporateOverview"
            element={<CorporateOverview />}
          />
          <Route
            exact
            path="/VisionAndQualityPolicy"
            element={<VisionAndQualityPolicy />}
          />
          <Route exact path="/Career" element={<Career />} />
          <Route exact path="/Feedback" element={<Feedback />} />
          <Route exact path="/Investors" element={<Investors />} />
          <Route exact path="/History" element={<History/>} />
          <Route exact path="/ConsignmentTrackingaAndEnquiry" element={<ConsignmentTrackingaAndEnquiry/>} />
          <Route exact path="/NeccGroup" element={<NeccGroup/>} />
          <Route exact path="/NeccLogistics" element={<NeccLogistics/>} />
          <Route exact path="/NeccTelecom" element={<NeccTelecom/>} />
          <Route exact path="/Necc" element={<Necc/>} />
          <Route exact path="/NeccEcomSolution" element={<NeccEcomSolution/>} />
          <Route exact path="/KeyManagementPersonnel" element={<KeyManagementPersonnel/>} />
          <Route exact path="/ServiceDetail1" element={<ServiceDetail1/>} />
          <Route exact path="/ServiceDetail2" element={<ServiceDetail2/>} />
          <Route exact path="/ServiceDetail3" element={<ServiceDetail3/>} />
          <Route exact path="/ServiceDetail4" element={<ServiceDetail4/>} />
          <Route exact path="/ServiceDetail5" element={<ServiceDetail5/>} />
          <Route exact path="/BoardOfDirectors" element={<BoardOfDirectors/>} />
          <Route exact path="/SiteMap" element={<SiteMap/>} />
          <Route exact path="/CorporateGovernance" element={<CorporateGovernance/>} />
          <Route exact path="/AnnualReport" element={<AnnualReport/>} />
          <Route exact path="/QuarterlyCompliances" element={<QuarterlyCompliances/>} />
          <Route exact path="/Download" element={<Download/>} />
          <Route exact path="/Polices" element={<Polices/>} />
          <Route exact path="/AnnualReportFinancial" element={<AnnualReportFinancial/>} />
          <Route
            exact
            path="/CorporateInformation"
            element={<CorporateInformation />}
          />

          {/* Admin Section */}
          <Route exact path="/admin" element={<SignIn />} />

          <Route exact path="/admin" element={<ProtectedRoute />}>
            <Route exact path="/admin/dashboard" element={<Home />} />
            <Route exact path="/admin/career" element={<Carrier />}></Route>
            <Route exact path="/admin/office" element={<Office />}></Route>
            <Route exact path="/admin/contact" element={<OfficeContact />}></Route>
            <Route exact path="/admin/investor" element={<InvestorsTab />}></Route>
            <Route exact path="/admin/:pagename/:id" element={<AdminQuaterlyCompliance />}></Route>
            <Route exact path="/admin/magazines" element={<AdminMagazines />}></Route>
            <Route exact path="/admin/downloads" element={<AdminDownloads />}></Route>
            <Route path="/admin/pdfReports/:reportName/:id" element={<AdminPdfReports />} />
          </Route>

          {/* Add more protected routes as needed */}
        </Routes>
      </Fragment>
      <ScrollToTop smooth color="#FA4318" />
    </BrowserRouter>
  );
}

export default App;
