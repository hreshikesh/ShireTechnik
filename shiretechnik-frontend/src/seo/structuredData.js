import { SITE } from "./siteConfig";

// Organization schema — used site-wide
export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE.name,
  legalName: SITE.legalName,
  url: SITE.url,
  logo: SITE.logo,
  description: SITE.description,
  foundingDate: SITE.founded,
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.contact.email,
    telephone: SITE.contact.phone,
    contactType: "customer service",
    areaServed: "Worldwide",
    availableLanguage: ["English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.contact.address.street,
    addressLocality: SITE.contact.address.city,
    addressRegion: SITE.contact.address.region,
    postalCode: SITE.contact.address.postalCode,
    addressCountry: SITE.contact.address.country,
  },
  sameAs: [
    SITE.social.linkedin,
    SITE.social.youtube,
  ].filter(Boolean),
});

// Website + SearchAction schema — for homepage
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE.url}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

// Breadcrumb schema
export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE.url}${item.path}`,
  })),
});

// Service schema — for CAE, HVAC pages
export const serviceSchema = ({ name, description, url, serviceType }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType,
  url: `${SITE.url}${url}`,
  provider: {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
});

// Article/Whitepaper schema
export const articleSchema = ({
  title,
  description,
  url,
  image,
  datePublished,
  author = SITE.name,
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  image: image || SITE.ogImage,
  datePublished,
  author: {
    "@type": "Organization",
    name: author,
  },
  publisher: {
    "@type": "Organization",
    name: SITE.name,
    logo: {
      "@type": "ImageObject",
      url: SITE.logo,
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE.url}${url}`,
  },
});

// FAQ schema — great for contact/about pages
export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});