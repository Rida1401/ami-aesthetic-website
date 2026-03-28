import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import articles from '../data/articles';
import SEO from '../components/SEO';
import ProductSchema from '../components/ProductSchema';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center pt-24">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Machine Not Found</h1>
        <p className="text-gray-600 mb-8">The equipment you are looking for may have been moved or is currently out of stock.</p>
        <Link to="/products" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
          View All Machines
        </Link>
      </div>
    );
  }

  // Related articles logic for B2B cross-linking
  const relatedArticles = (Array.isArray(articles) ? articles : []).filter(article => {
    const name = product.name.toLowerCase();
    const artId = article.id;
    if (name.includes("diode") && (artId === 3 || artId === 6 || artId === 5)) return true;
    if (name.includes("nd:yag") && (artId === 6 || artId === 7)) return true;
    if (name.includes("ipl") && artId === 5) return true;
    if ((name.includes("rf") || name.includes("hifu")) && artId === 4) return true;
    if ((name.includes("cryolipolysis") || name.includes("cavitation")) && artId === 2) return true;
    if ((name.includes("vaginal") || name.includes("blue light") || name.includes("lllt") || name.includes("fractional")) && artId === 1) return true;
    return false;
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://amiaesthetic.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://amiaesthetic.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white pb-20 pt-24 md:pt-32">
      <SEO 
        title={`${product.name} | Medical Grade Equipment`} 
        description={`${product.description} AMI Aesthetic is the leading supplier of ${product.name} for dermatology clinics.`}
        image={product.image}
      />
      <ProductSchema product={product} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Link to="/products" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-bold mb-6 group transition-colors">
          <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
          Back to All Machines
        </Link>

        {/* Breadcrumb for UX and SEO */}
        <nav className="mb-10 flex items-center gap-2 text-sm text-gray-500 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-blue-600 transition">Products</Link>
          <span>/</span>
          <span className="text-gray-900 truncate">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Machine Image Display */}
          <div className="w-full lg:w-1/2">
            <div className="bg-gray-50 rounded-[2.5rem] p-12 flex items-center justify-center border border-gray-100 shadow-inner sticky top-32">
              <img 
                src={product.image} 
                alt={product.alt || product.name} 
                className="max-h-[500px] w-auto object-contain transition-transform duration-700 hover:scale-105" 
              />
            </div>
          </div>

          {/* Commercial Specifications & Inquiry */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="bg-green-100 text-green-800 text-[10px] font-black px-3 py-1 rounded-full border border-green-200 tracking-tighter uppercase">Available for Sale</span>
              <span className="bg-blue-100 text-blue-800 text-[10px] font-black px-3 py-1 rounded-full border border-blue-200 tracking-tighter uppercase">Rental Plans Available</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
              {product.name}
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-medium">
              {product.description}
            </p>

            <div className="space-y-6 mb-12">
              {product.howItWorks && (
                <div className="bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-sm">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">⚡</span> Technology Overview
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {product.howItWorks}
                  </p>
                </div>
              )}

              {product.benefits && (
                <div className="bg-blue-600/5 p-6 rounded-2xl border-2 border-blue-100/50">
                  <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-green-600">📈</span> Clinic ROI & Benefits
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {product.benefits}
                  </p>
                </div>
              )}
            </div>

            {/* B2B Conversion Area */}
            <div className="space-y-4">
              <a
                href={`https://wa.me/917780176643?text=Hi, I am a clinic owner interested in a business quote for the ${product.name}.`}
                target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-600 text-white px-8 py-5 rounded-2xl font-bold hover:bg-green-700 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg uppercase tracking-wide"
              >
                Request Wholesale Pricing
              </a>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href={`https://wa.me/917780176643?text=Requesting technical specs for ${product.name}.`}
                  className="text-center bg-gray-100 text-gray-700 py-4 rounded-xl font-bold hover:bg-gray-200 transition border border-gray-200 text-sm"
                >
                  Download Specs
                </a>
                <Link to="/contact" className="text-center bg-gray-900 text-white py-4 rounded-xl font-bold hover:bg-black transition text-sm">
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Cross-Linking to Insights */}
        {relatedArticles.length > 0 && (
          <div className="mt-32 pt-16 border-t border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">Clinical Research & Practice Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedArticles.map((article) => (
                <Link key={article.id} to="/insights" className="group block p-8 rounded-3xl bg-gray-50 hover:bg-white transition-all duration-500 border border-transparent hover:border-blue-200 hover:shadow-2xl">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600">{article.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3 mb-6 leading-relaxed">{article.summary}</p>
                  <span className="text-blue-600 font-bold text-sm flex items-center gap-2">View Analysis →</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ProductDetail;