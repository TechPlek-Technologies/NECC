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
import CurrentOpening from "./pages/CurrentOpening";
import NewspaperPublication from "./pages/NewspaperPublication";
import Content from "./pages/Dashboard/pages/Content";
import CodeOfConduct from "./pages/CodeOfConduct";
import NewsEvents from "./pages/News&Events";
import RightIssues from "./pages/RightIssues";
import NECCPackers from "./pages/NECCPackers";
import GetDetails from "./pages/GetDetails";
import Magazines from "./pages/Magazines";
import CorporateSocialResponsibility from "./pages/CorporateSocialResponsibility";
import Network from "./pages/Network";
import BranchLocater from "./elements/demo";
import Award from "./pages/Award";
import PickupAndDelivery from "./pages/PickupAndDelivery";
import PageSection from "./pages/Dashboard/pages/pageSection";
import AdminContent from "./pages/Dashboard/pages/AdminContent";
import InvestorsDynamic from "./pages/InvestorsDynamic";
import CsrCoommitte from "./pages/Dashboard/pages/CsrCommittee";
import CsrDownloads from "./pages/Dashboard/pages/CsrDownloads";
import AdminCorporateInformation from "./pages/Dashboard/pages/AdminCorporateInformation";
import CiDirectors from "./pages/Dashboard/pages/CiDirectors";
import AdminKeyPersonnel from "./pages/Dashboard/pages/AdminKeyPersonnel";
import CiCoommitte from "./pages/Dashboard/pages/CiCommittee";
import CiPdf from "./pages/Dashboard/pages/CiPdf";
import InvestorFeedback from "./pages/InvestorFeedback";
import ListingInformation from "./pages/ListingInformation";
import CustomerCare from "./pages/CustomerCare";
import SARCcountry from "./pages/SARCcountry";
import AdminBranch from "./pages/Dashboard/pages/AdminBranch";
import Terms from "./pages/Terms";

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
      {/* <RouteScrollToTop /> */}
      {/* <BranchLocater/> */}

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
          <Route exact path="/History" element={<History />} />
          <Route
            exact
            path="/ConsignmentTrackingaAndEnquiry"
            element={<ConsignmentTrackingaAndEnquiry />}
          />
          <Route exact path="/NeccGroup" element={<NeccGroup />} />
          <Route exact path="/NeccLogistics" element={<NeccLogistics />} />
          <Route exact path="/NeccTelecom" element={<NeccTelecom />} />
          <Route exact path="/Necc" element={<Necc />} />
          <Route
            exact
            path="/NeccEcomSolution"
            element={<NeccEcomSolution />}
          />
          <Route
            exact
            path="/KeyManagementPersonnel"
            element={<KeyManagementPersonnel />}
          />
          <Route exact path="/ServiceDetail1" element={<ServiceDetail1 />} />
          <Route exact path="/ServiceDetail2" element={<ServiceDetail2 />} />
          <Route exact path="/ServiceDetail3" element={<ServiceDetail3 />} />
          <Route exact path="/ServiceDetail4" element={<ServiceDetail4 />} />
          <Route exact path="/ServiceDetail5" element={<ServiceDetail5 />} />
          <Route
            exact
            path="/BoardOfDirectors"
            element={<BoardOfDirectors />}
          />
          <Route exact path="/SiteMap" element={<SiteMap />} />
          <Route
            exact
            path="/CorporateGovernance"
            element={<CorporateGovernance />}
          />
          <Route
            exact
            path="/AnnualReportAndNoticeOfAGM"
            element={<AnnualReport />}
          />
          <Route
            exact
            path="/QuarterlyCompliances"
            element={<QuarterlyCompliances />}
          />
          <Route exact path="/Download" element={<Download />} />
          <Route exact path="/Polices" element={<Polices />} />
          <Route
            exact
            path="/AnnualReportFinancial"
            element={<AnnualReportFinancial />}
          />
          <Route exact path="/CurrentOpening" element={<CurrentOpening />} />
          <Route
            exact
            path="/NewspaperPublication"
            element={<NewspaperPublication />}
          />
          <Route exact path="/CodeOfConduct" element={<CodeOfConduct />} />
          <Route exact path="/NewsEvents" element={<NewsEvents />} />
          <Route exact path="/RightIssues" element={<RightIssues />} />
          <Route exact path="/NeccPackers&Movers" element={<NECCPackers />} />
          <Route exact path="/GetDetails" element={<GetDetails />} />
          <Route exact path="/Magazines" element={<Magazines />} />
          <Route
            exact
            path="/CorporateSocialResponsibility"
            element={<CorporateSocialResponsibility />}
          />
          <Route exact path="/Network" element={<Network />} />
          <Route exact path="/Awards&Recognition" element={<Award />} />
          <Route
            exact
            path="/Pickup&Delivery"
            element={<PickupAndDelivery />}
          />
          <Route
            exact
            path="/:pagename/:id"
            element={<InvestorsDynamic />}
          ></Route>
          <Route
            exact
            path="/InvestorFeedback"
            element={<InvestorFeedback />}
          ></Route>
          <Route
            exact
            path="/ListingInformation"
            element={<ListingInformation />}
          ></Route>
          <Route exact path="/CustomerCare" element={<CustomerCare />}></Route>
          <Route exact path="/SARCcountry" element={<SARCcountry />}></Route>
          <Route
            exact
            path="/CorporateInformation"
            element={<CorporateInformation />}
          />
          <Route exact path="/Terms-and-condition" element={<Terms />}></Route>

          {/* Admin Section */}
          <Route exact path="/admin" element={<SignIn />} />

          <Route exact path="/admin" element={<ProtectedRoute />}>
            <Route exact path="/admin/dashboard" element={<Home />} />
            <Route exact path="/admin/branch" element={<AdminBranch />} />
            <Route exact path="/admin/career" element={<Carrier />}></Route>
            <Route exact path="/admin/content" element={<Content />}></Route>
            <Route
              exact
              path="/admin/content/:pagename/:id"
              element={<PageSection />}
            ></Route>
            <Route exact path="/admin/office" element={<Office />}></Route>
            <Route
              exact
              path="/admin/contact"
              element={<OfficeContact />}
            ></Route>
            <Route
              exact
              path="/admin/investor"
              element={<InvestorsTab />}
            ></Route>
            <Route
              exact
              path="/admin/:pagename/:id"
              element={<AdminQuaterlyCompliance />}
            ></Route>
            <Route
              exact
              path="/admin/magazines"
              element={<AdminMagazines />}
            ></Route>
            <Route
              exact
              path="/admin/downloads"
              element={<AdminDownloads />}
            ></Route>
            <Route exact path="/admin/csr" element={<AdminDownloads />}></Route>
            <Route
              exact
              path="/admin/corporateInformation"
              element={<AdminCorporateInformation />}
            ></Route>
            <Route
              exact
              path="/admin/Keypersonnel"
              element={<AdminKeyPersonnel />}
            ></Route>
            <Route
              exact
              path="/admin/corporateInformation/directors/Entry"
              element={<CiDirectors />}
            ></Route>
            <Route
              exact
              path="/admin/corporateInformation/committee/members"
              element={<CiCoommitte />}
            ></Route>
            <Route
              exact
              path="/admin/corporateInformation/creditRating/pdf"
              element={<CiPdf />}
            ></Route>
            <Route
              exact
              path="/admin/csr/members/committee"
              element={<CsrCoommitte />}
            ></Route>
            <Route
              exact
              path="/admin/csr/downloads/pdf"
              element={<CsrDownloads />}
            ></Route>
            <Route
              path="/admin/pdfReports/:reportName/:id"
              element={<AdminPdfReports />}
            />
            <Route
              path="/admin/content/edit/:reportName/:id"
              element={<AdminContent />}
            />
          </Route>

          {/* Add more protected routes as needed */}
        </Routes>
      </Fragment>
      <ScrollToTop smooth color="#d8251e" />
    </BrowserRouter>
  );
}

export default App;
