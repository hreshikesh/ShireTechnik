import AboutSection from "../../feactures/aboutHome/AboutSection";
import BusinessAwards from "../../feactures/business-awards/BusinessAwards";
import EngineeringChallenges from "../../feactures/challenges/EngineeringChallenges";
import ColdStream from "../../feactures/coldstream/ColdStream";
import Hero from "../../feactures/hero/Hero";
import Services from "../../feactures/services/Services";
import WhyShiretechnik from "../../feactures/why-shiretechnik/WhyShiretechnik";

const Home = () => {
  return (
    <>
      <Hero />
      <EngineeringChallenges/>
      <Services/>
      <ColdStream/>
      <WhyShiretechnik/>
      <AboutSection/>
      <BusinessAwards/>
    </>
  );
};

export default Home;