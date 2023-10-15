import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignupPt2 from "./pages/SignupPt2";
import AdminHomepage from "./pages/AdminHomepage";
import AppointmentPage from "./pages/AppointmentPage";
import ExpertisePageAdmin from "./pages/ExpertisePageAdmin";
import ExpertisePage from "./pages/ExpertisePage";
import HomepageUser from "./pages/HomepageUser";
import SignUpUser from "./pages/SignUpUser";
import SignUpExpert from "./pages/SignUpExpert";
import LoginUser from "./pages/LoginUser";
import AdminLogin from "./pages/AdminLogin";
import Login from "./pages/Login";
import ExpertRequestApprove from "./pages/ExpertRequestApprove";
import ExpertAppointmentlist from "./pages/ExpertAppointmentlist";
import ExpertHomepage from "./pages/ExpertHomepage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/signup-pt-2":
        title = "";
        metaDescription = "";
        break;
      case "/admin-homepage":
        title = "";
        metaDescription = "";
        break;
      case "/appointment-page":
        title = "";
        metaDescription = "";
        break;
      case "/expertise-page-admin":
        title = "";
        metaDescription = "";
        break;
      case "/expertise-page":
        title = "";
        metaDescription = "";
        break;
      case "/homepage-user":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-user":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-expert":
        title = "";
        metaDescription = "";
        break;
      case "/login-user":
        title = "";
        metaDescription = "";
        break;
      case "/admin-login":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup-pt-2" element={<SignupPt2 />} />
      <Route path="/admin-homepage" element={<AdminHomepage />} />
      <Route path="/appointment-page" element={<AppointmentPage />} />
      <Route path="/expertise-page-admin" element={<ExpertisePageAdmin />} />
      <Route path="/expertise-page/:expertId" element={<ExpertisePage />} />
      <Route path="/homepage-user" element={<HomepageUser />} />
      <Route path="/sign-up-user" element={<SignUpUser />} />
      <Route path="/sign-up-expert" element={<SignUpExpert />} />
      <Route path="/login-user" element={<LoginUser />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/expert-request-approve"
        element={<ExpertRequestApprove />}
      />
      <Route
        path="/expert-appointmentlist"
        element={<ExpertAppointmentlist />}
      />
      <Route path="/expert-homepage" element={<ExpertHomepage />} />
    </Routes>
  );
}
export default App;
