import { useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import articles from "../data/articles";

function ProductCard({ product, isLink = false, vertical = false, onCompare, isSelected }) {
  const [showModal, setShowModal] = useState(false);

  // Filter related articles based on product name/type
  const relatedArticles = articles.filter(article => {
    const name = product.name.toLowerCase();
    const id = article.id;

    // Diode Laser -> Hair Removal (1), Choosing Laser (3)
    if (name.includes("diode") && (id === 1 || id === 3)) return true;

    // Nd:YAG -> IPL vs Laser (2), Choosing Laser (3)
    if (name.includes("nd:yag") && (id === 2 || id === 3)) return true;

    // IPL -> IPL vs Laser (2)
    if (name.includes("ipl") && id === 2) return true;

    // RF / HIFU / Microneedling -> RF Skin Tightening (4)
    if ((name.includes("rf") || name.includes("hifu")) && id === 4) return true;

    // Cryolipolysis / Cavitation -> Fat Reduction (5)
    if ((name.includes("cryolipolysis") || name.includes("cavitation")) && id === 5) return true;
    
    // Emerging Tech -> Vaginal, Blue Light, LLLT, Fractional
    if ((name.includes("vaginal") || name.includes("blue light") || name.includes("lllt") || name.includes("fractional")) && id === 7) return true;

    return false;
  });

  return (
    <>
      <div className={`w-full mx-auto bg-white flex flex-col h-full transition-all duration-300 relative ${
        vertical 
          ? "group max-w-xs rounded-2xl p-4 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2" 
          : "group max-w-sm md:max-w-2xl rounded-2xl p-6 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      }`}>
        
      {/* Compare Button */}
      {onCompare && (
        <div className="absolute top-4 left-4 z-20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCompare(product);
            }}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full shadow-sm border transition-all ${
              isSelected 
                ? "bg-blue-600 text-white border-blue-600" 
                : "bg-white/90 text-gray-600 border-gray-200 hover:border-blue-400"
            }`}
          >
            <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? "border-white" : "border-gray-400"}`}>
              {isSelected && <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
            </span>
            <span className="text-xs font-bold">Compare</span>
          </button>
        </div>
      )}

      <div className={`flex flex-col ${vertical ? '' : 'md:flex-row'} items-center gap-6`}>
        
        {/* Image */}
        {vertical ? (
          <div className="w-full h-56 flex items-center justify-center mb-4 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-full md:w-1/2 h-56 object-contain"
          />
        )}

        {/* Divider (desktop only) */}
        {!vertical && <div className="hidden md:block w-px h-40 bg-gray-200" />}

        {/* Text */}
        <div className={`w-full ${vertical ? '' : 'md:w-1/2'} text-center ${vertical ? '' : 'md:text-left'}`}>
          <h3 className={`${vertical ? 'text-xl' : 'text-2xl'} font-semibold text-gray-800 mb-3`}>
            {product.name}
          </h3>
          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          {isLink ? (
            <Link
              to="/products"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium"
            >
              Learn More
            </Link>
          ) : (
            <button
              onClick={() => setShowModal(true)}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-medium"
            >
              Learn More
            </button>
          )}
        </div>

      </div>
    </div>

    {/* Modal */}
    {showModal && createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setShowModal(false)}>
        <div className="bg-white rounded-2xl p-6 md:p-8 max-w-5xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          
          <button 
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>

          <div className="flex flex-col md:flex-row gap-8 md:items-start">
            <div className="w-full md:w-1/2 flex flex-col">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{product.name}</h3>
              <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="max-h-96 object-contain mx-auto" />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">✅ Available for Sale</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full border border-blue-200">🔁 Available for Rent</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-full border border-yellow-200">🚚 Delivery Available</span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>

              {product.howItWorks && (
                <div className="mb-6 bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                  <h4 className="text-lg font-bold text-blue-800 mb-2 flex items-center gap-2">
                    ⚙️ How It Works
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {product.howItWorks}
                  </p>
                </div>
              )}

              {product.benefits && (
                <div className="mb-8 bg-green-50 p-4 rounded-lg border border-green-100">
                  <h4 className="text-lg font-bold text-green-800 mb-2 flex items-center gap-2">
                    ✨ Client Benefits
                  </h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {product.benefits}
                  </p>
                </div>
              )}

              {/* Business-in-a-Box Downloads */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a 
                  href={`https://wa.me/917093627596?text=Hi, I would like to request the technical brochure for the ${product.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm border border-gray-200"
                >
                  <span>📄</span> Request Brochure
                </a>
                <a 
                  href={`https://wa.me/917093627596?text=Hi, I am interested in the Marketing Kit (social media posts/photos) for the ${product.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition text-sm border border-gray-200"
                >
                  <span>🎨</span> Request Marketing Kit
                </a>
              </div>

              <div className="mt-8">
                <a
                  href={`https://wa.me/917093627596?text=Hi, I am interested in the ${product.name} machine.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
                >
                  Enquire on WhatsApp
                </a>
                <p className="text-center text-xs text-gray-400 mt-3">
                  *Financing & EMI options available upon request.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles Section */}
          {relatedArticles.length > 0 && (
            <div className="mt-10 pt-8 border-t border-gray-100">
              <h4 className="text-lg font-bold text-gray-800 mb-4">Related Insights</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {relatedArticles.map((article) => (
                  <Link key={article.id} to="/insights" className="block p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition border border-gray-200">
                    <h5 className="font-bold text-gray-900 text-sm mb-1">{article.title}</h5>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {article.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    , document.body)}
    </>
  );
}

export default ProductCard;
