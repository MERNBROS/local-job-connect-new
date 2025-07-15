import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ApplyJob from "./pages/Applyjob";
import Applications from "./pages/Applications";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";
import Addjob from "./pages/Addjob";
import Dashboard from "./pages/Dashboard";
import Managejobs from "./pages/Managejobs";
import ViewApplications from "./pages/ViewApplications";
import 'quill/dist/quill.snow.css';

const App = () => {
  const { showRecruiterLogin } = React.useContext(AppContext);

  return (
    <>
      <div>
        {showRecruiterLogin && <RecruiterLogin />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apply-job/:id" element={<ApplyJob />} />
          <Route path="/applications" element={<Applications />} />
          
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add-job" element={<Addjob />} />
            <Route path="manage-jobs" element={<Managejobs />} />
            <Route path="view-applications" element={<ViewApplications />} />
          </Route>


        </Routes>
      </div>
    </>
  );
};

export default App;
