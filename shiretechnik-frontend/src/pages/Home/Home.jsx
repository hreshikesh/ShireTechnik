import AboutSection from "../../feactures/aboutHome/AboutSection";
import BusinessAwards from "../../feactures/business-awards/BusinessAwards";
import EngineeringChallenges from "../../feactures/challenges/EngineeringChallenges";
import ColdStream from "../../feactures/coldstream/ColdStream";
import Hero from "../../feactures/hero/Hero";
import Services from "../../feactures/services/Services";
import WhyShiretechnik from "../../feactures/why-shiretechnik/WhyShiretechnik";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
import { websiteSchema } from "../../seo/structuredData";
const Home = () => {
  return (
    <>
       <SEO {...seoPages.home} schema={websiteSchema()} />
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