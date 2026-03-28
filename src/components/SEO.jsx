import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image, keywords }) => {
  const siteTitle = "AMI Aesthetic";
  const currentTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const currentDescription = description || "India's leading B2B supplier of premium aesthetic laser machines. High-ROI Diode, CO2, & HIFU equipment for dermatology clinics. Request bulk pricing today.";
  const currentUrl = url || "https://amiaesthetic.com" + window.location.pathname; // Ensure canonical URL is absolute
  const defaultKeywords = "AMI Aesthetic, AMI Aesthetics, amiaesthetics, amyaesthetic, medical laser machine supplier, aesthetic laser manufacturer, diode laser supplier India, CO2 laser price, HIFU machine for clinics";

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