import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Services from "../pages/Services/Services";
import Resources from "../pages/Resources/Resources";
import Appointment from "../pages/Appointment/Appointment";
import Contact from "../pages/Contact/Contact";

const AppRouter = () => {
  return (

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/services" element={<Services />} />

          <Route path="/resources" element={<Resources />} />

          <Route path="/appointment" element={<Appointment />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>

  );
};

export default AppRouter;