import { Helmet } from 'react-helmet-async';

const ProductSchema = ({ product }) => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image, // Ensure this is a full URL in production if possible
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "AMI Aesthetic"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default ProductSchema;