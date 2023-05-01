import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./AdminPanel/Components/Sidebar";
import SignIn from "./SignIn";
import SignUP from "./SignUP";

// Landing pages
import HomePage from "./LandingPages/HomePage";
import Contact from "./LandingPages/Contact";
import TermsConditions from "./LandingPages/TermsConditions";
import Disclaimer from "./LandingPages/Disclaimer";
import PolicyPrivacy from "./LandingPages/PolicyPrivacy";
import About from "./LandingPages/About";

// admin Pages
import Dashboard from "./AdminPanel/Dashboard";
import Profile from "./AdminPanel/Profile";
import DirectTeam from "./AdminPanel/DirectTeam";
import LevelTeam from "./AdminPanel/LevelTeam";
import ViewTask from "./AdminPanel/ViewTask";
import TaskHistory from "./AdminPanel/TaskHistory";
import ScanPay from "./AdminPanel/ScanPay";
import PaymentHistory from "./AdminPanel/PaymentHistory";
import Support from "./AdminPanel/Support";
import SupportHistory from "./AdminPanel/SupportHistory";
import DirectWithdraw from "./AdminPanel/DirectWithdraw";
import AdsViewWithdraw from "./AdminPanel/AdsViewWithdraw";
import WithdrawHistory from "./AdminPanel/WithdrawHistory";
import Refer from "./AdminPanel/Refer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route
          path="/"
          exact
          element={
            <>
              <HomePage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <>
              <TermsConditions />
            </>
          }
        />
        <Route
          path="/disclaimer"
          element={
            <>
              <Disclaimer />
            </>
          }
        />
        <Route
          path="/policy-privacy"
          element={
            <>
              <PolicyPrivacy />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Sidebar />
              <Dashboard />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Sidebar />
              <Profile />{" "}
            </>
          }
        />
        <Route
          path="/direct-team"
          element={
            <>
              <Sidebar />
              <DirectTeam />{" "}
            </>
          }
        />
        <Route
          path="/level-team"
          element={
            <>
              <Sidebar />
              <LevelTeam />{" "}
            </>
          }
        />
        <Route
          path="/view-task"
          element={
            <>
              <Sidebar />
              <ViewTask />{" "}
            </>
          }
        />
        <Route
          path="/task-history"
          element={
            <>
              <Sidebar />
              <TaskHistory />{" "}
            </>
          }
        />
        <Route
          path="/scan-pay"
          element={
            <>
              <Sidebar />
              <ScanPay />{" "}
            </>
          }
        />
        <Route
          path="/payment-history"
          element={
            <>
              <Sidebar />
              <PaymentHistory />{" "}
            </>
          }
        />
        <Route
          path="/support"
          element={
            <>
              <Sidebar />
              <Support />{" "}
            </>
          }
        />
        <Route
          path="/support-history"
          element={
            <>
              <Sidebar />
              <SupportHistory />{" "}
            </>
          }
        />
        <Route
          path="/direct-withdraw"
          element={
            <>
              <Sidebar />
              <DirectWithdraw />{" "}
            </>
          }
        />
        <Route
          path="/ads-view-withdraw"
          element={
            <>
              <Sidebar />
              <AdsViewWithdraw />{" "}
            </>
          }
        />
        <Route
          path="/withdraw-history"
          element={
            <>
              <Sidebar />
              <WithdrawHistory />{" "}
            </>
          }
        />
        <Route
          path="/refer"
          element={
            <>
              <Sidebar />
              <Refer />{" "}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
