
import BusinessAwards from "../../feactures/business-awards/BusinessAwards";
import EngineeringChallenges from "../../feactures/challenges/EngineeringChallenges";
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

      <WhyShiretechnik/>
      <BusinessAwards/>
    </>
  );
};

export default Home;