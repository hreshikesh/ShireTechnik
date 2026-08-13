import { Outlet } from "react-router-dom";
import Footer from "../feactures/footer/Footer";
import Navbar from "../feactures/navBar/Navbar";
import ChatBot from "../feactures/chatbot/components/Chatbot";
import FloatingWhatsAppButton from "../feactures/floatingButtons/FloatingWhatsAppButton";
import FloatingMeetingButton from "../feactures/floatingButtons/FloatingMeetingButton";
import ScrollToTop from "../common/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />

      {/* <Outlet /> renders whichever sub-route is currently active */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      {/* Floating Action Button Group */}
      <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
        <FloatingMeetingButton />
        <ChatBot />
        <FloatingWhatsAppButton />
      </div>
    </div>
  );
};

export default MainLayout;