import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
// import DashboardLayout from "layouts/dashboard/DashboardLayout";
const Profile = React.lazy(() => import("pages/Profile"));
const EditVideo = React.lazy(() => import("pages/EditVideo"));
const Searchresult = React.lazy(() => import("pages/Searchresult"));
const Home1 = React.lazy(() => import("pages/Home1"));
const DashboardLayout = React.lazy(() => import("layouts/dashboard/DashboardLayout"));

const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
 <Router>
      <Routes>
        <Route path="/" element={<DashboardLayout />}>
          <Route path="/searchresult" element={<Searchresult />} />
          <Route path="/editvideo" element={<EditVideo />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dhiwise-dashboard" element={<Home1 />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
