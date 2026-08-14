import AboutHero from "../../feactures/about/aboutHero/AboutHero";
import CertificationsSection from "../../feactures/about/companyIntro/CertificationsSection";
import CompanyIntro from "../../feactures/about/companyIntro/CompanyIntro";
import Expertise from "../../feactures/about/Expertise/Expertise";
import Team from "../../feactures/about/team/Team";
import SEO from "../../seo/SEO"
import { seoPages } from "../../seo/seoConfig";
const About = () => {
  return (
    <>
      <SEO {...seoPages.About} />
      <AboutHero />
      <CompanyIntro />
      <CertificationsSection/>
      <Expertise />
      <Team />
    </>
  );
};

export default About;