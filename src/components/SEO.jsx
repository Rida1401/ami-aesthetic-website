import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, url, image, keywords }) => {
  const siteTitle = "AMI Aesthetic";
  const currentTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const currentDescription = description || "Premium aesthetic laser machines and equipment for clinics in India. High-quality Diode, CO2, and HIFU machines.";
  const currentUrl = url || window.location.href;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{currentTitle}</title>
      <meta name="description" content={currentDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
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
    </Helmet>
  );
};

export default SEO;