import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import CAESoftware from "../pages/solutions/CAESoftware";
import Resources from "../pages/Resources/Resources";
import CAEServices from "../pages/solutions/CAEServices";
import CAESES from "../pages/caeses/Caeses";
import PyroSim from "../pages/pyrosim/Pyrosim";
import Pathfinder from "../pages/pathfinder/Pathfinder";
import Ventus from "../pages/ventus/Ventus";
import ThermalDesign from "../pages/Thermal/Thermal";
import HVACDesign from "../pages/havc/havc";
import MechanicalDesign from "../pages/mechanical/Mechanical";
import StructuralAnalysis from "../pages/structure/Structure";
import Careers from "../pages/carrer/Career";
import WebinarsPage from "../pages/webnair/Webnair";
import CaseStudies from "../pages/caseStudy/CaseStudy";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/notFound/PageNotFound";
import Meeting from "../pages/meeting/Meeting";

import { Toaster } from "sonner";
import SessionTimeout from "../feactures/auth/SessionTimeout";
import AuthManager from "../feactures/auth/AuthManager";

// Admin Imports
import AdminRoute from "./AdminRoutes";
import AdminLayout from "../admin/layout/AdminLayout";
import Dashboard from "../admin/pages/Dashboard";
import Users from "../admin/pages/Users";
import Meetings from "../admin/pages/Meetings";
import Contacts from "../admin/pages/Contacts";
import Downloads from "../admin/pages/Download";

const AppRouter = () => {
  const location = useLocation();

  return (
    <>
      <Toaster position="bottom-right" />
      <SessionTimeout />
      <AuthManager />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* Main Layout Wrapped Routes */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />

            {/* CAE Software */}
            <Route path="/solutions/cae-software" element={<CAESoftware />} />
            <Route path="/solutions/cae-software/caeses" element={<CAESES />} />
            <Route path="/solutions/cae-software/pyrosim" element={<PyroSim />} />
            <Route path="/solutions/cae-software/pathfinder" element={<Pathfinder />} />
            <Route path="/solutions/cae-software/ventus" element={<Ventus />} />

            {/* CAE Services */}
            <Route path="/solutions/cae-services" element={<CAEServices />} />
            <Route path="/solutions/cae-services/thermal-design" element={<ThermalDesign />} />
            <Route path="/solutions/cae-services/hvac-design" element={<HVACDesign />} />
            <Route path="/solutions/cae-services/mechanical-design" element={<MechanicalDesign />} />
            <Route path="/solutions/cae-services/structural-design" element={<StructuralAnalysis />} />

            {/* Resources */}
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/webinar" element={<WebinarsPage />} />
            <Route path="/resources/whitepapers" element={<CaseStudies />} />

            {/* Utility Pages */}
            <Route path="/meeting" element={<Meeting />} />
            <Route path="/contact" element={<Contact />} />

            {/* 404 Catch-All */}
            <Route path="*" element={<NotFound />} />
          </Route>

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminLayout />
              </AdminRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="meetings" element={<Meetings />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="downloads" element={<Downloads />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AppRouter;