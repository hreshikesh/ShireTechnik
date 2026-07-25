import Footer from "../feactures/footer/Footer";
import Navbar from "../feactures/navBar/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer/>
    </>
  );
};

export default MainLayout;