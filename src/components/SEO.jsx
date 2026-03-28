import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image, keywords }) => {
  const siteTitle = "AMI Aesthetic";
  const currentTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const currentDescription = description || "Leading medical laser machine supplier & aesthetic equipment manufacturer. Wholesale Diode, CO2, and HIFU machines for clinics in India, UAE, and the Middle East. Request bulk pricing today.";
  const currentUrl = url || "https://amiaesthetic.com" + window.location.pathname; // Ensure canonical URL is absolute
  const defaultKeywords = "Ami aesthetic, Ami aesthetics, amiaesthetic, amiaesthetics, amyaesthetic, amyaesthetics, amia esthetic, amia esthetics, amiaestetic, amiaestetics, medical laser machine supplier, aesthetic laser machine manufacturer, diode laser hair removal machine supplier, CO2 laser machine price, HIFU machine for clinics, IPL machine supplier, aesthetic equipment wholesale, dermatology clinic equipment supplier, medical laser India, UAE, Middle East";

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      <meta name="keywords" content={keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords} />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDescription} />
      <meta property="og:url" content={currentUrl} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentTitle} />
      <meta name="twitter:description" content={currentDescription} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Organization Schema Markup */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "AMI Aesthetic",
            "url": "https://amiaesthetic.com",
            "logo": "https://amiaesthetic.com/logo.png", // Replace with your actual logo URL
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7780176643",
              "contactType": "Customer Service"
            },
            "sameAs": ["https://www.instagram.com/ami.aesthetic.in/"] // Add other social profiles if desired, excluding LinkedIn
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;