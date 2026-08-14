import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE } from "./siteConfig";
import { organizationSchema, breadcrumbSchema } from "./structuredData";

/**
 * Universal SEO component — drops into any page.
 *
 * @param {string} title            Page title (auto-appends site name)
 * @param {string} description      Meta description (150-160 chars ideal)
 * @param {string[]} keywords       Additional keywords
 * @param {string} image            OG image URL (defaults to site og-image)
 * @param {string} canonical        Custom canonical URL (defaults to current path)
 * @param {string} type             OG type: "website" | "article" | "product"
 * @param {object[]} breadcrumbs    [{ name, path }] for breadcrumb schema
 * @param {object|object[]} schema  Extra JSON-LD schema(s) to inject
 * @param {boolean} noindex         Set true to prevent indexing
 */
const SEO = ({
  title,
  description = SITE.description,
  keywords = [],
  image = SITE.ogImage,
  canonical,
  type = "website",
  breadcrumbs,
  schema,
  noindex = false,
}) => {
  const location = useLocation();
  const pageUrl = canonical || `${SITE.url}${location.pathname}`;

  // Compose title
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`;

  // Merge keywords
  const allKeywords = [...SITE.keywords, ...keywords].join(", ");

  // Compose JSON-LD schemas
  const schemas = [organizationSchema()];
  if (breadcrumbs?.length) schemas.push(breadcrumbSchema(breadcrumbs));
  if (schema) {
    if (Array.isArray(schema)) schemas.push(...schema);
    else schemas.push(schema);
  }

  return (
    <Helmet prioritizeSeoTags>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={pageUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {/* Language / Region */}
      <html lang={SITE.language} />
      <meta name="geo.region" content={SITE.region} />
      <meta name="geo.placename" content={SITE.contact.address.city} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || SITE.name} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE.social.twitter} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Theme */}
      <meta name="theme-color" content="#05080d" />
      <meta name="apple-mobile-web-app-title" content={SITE.name} />

      {/* Author / Publisher */}
      <meta name="author" content={SITE.name} />
      <meta name="publisher" content={SITE.name} />

      {/* Structured Data */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;