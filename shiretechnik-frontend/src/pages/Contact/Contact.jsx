
import ConatctMap from "../../feactures/contact/ContactMap";
import ContactInfo from "../../feactures/contact/ContactInfo";
import ContactHeader from "../../feactures/contact/ContactHeader";
import SEO from "../../seo/SEO";
import { seoPages } from "../../seo/seoConfig";
const Contact = () => {
  return (
    <>
     <SEO {...seoPages.Contact} />
   <ContactHeader/>
    <ContactInfo/>
     <ConatctMap/>
      
</>
  )}

export default Contact;