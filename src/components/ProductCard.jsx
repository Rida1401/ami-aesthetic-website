import { Link } from "react-router-dom";
import ProductSchema from "./ProductSchema";

function ProductCard({ product, vertical = false, onCompare, isSelected }) {

  return (
    <>
      {/* Structured Data for SEO */}
      <ProductSchema product={product} />

      {/* Structured Data for SEO */}

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
              alt={product.alt || product.name}
              className="h-48 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          </div>
        ) : (
          <img
            src={product.image}
            alt={product.alt || product.name}
            className="w-full md:w-1/2 h-56 object-contain"
            loading="lazy"
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

          <Link
            to={`/products/${product.id}`}
            className="inline-block bg-blue-600 text-white px-8 py-2.5 rounded-lg hover:bg-blue-700 transition-all font-bold shadow-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductCard;
