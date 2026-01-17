import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import products from "../data/products.js"
import ProductCard from "./ProductCard"

function Products() {
  useEffect(() => {
    document.title = "Products";
  }, []);

  const [searchTerm, setSearchTerm] = useState("")
  const [compareList, setCompareList] = useState([])
  const [showCompareModal, setShowCompareModal] = useState(false)

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleCompare = (product) => {
    if (compareList.find((p) => p.id === product.id)) {
      setCompareList(compareList.filter((p) => p.id !== product.id))
    } else {
      if (compareList.length < 2) {
        setCompareList([...compareList, product])
      } else {
        alert("You can only compare 2 products at a time. Please remove one to add another.")
      }
    }
  }

  return (
    <>
      {/* Main Content */}
      <section id="products-list" className="relative px-6 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-20 translate-y-1/2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm">
              State-of-the-Art Technology
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-6">
              Our Premium <span className="text-blue-600">Laser Machines</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of aesthetic devices, engineered for precision, safety, and exceptional clinical outcomes.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-150 ease-in-out text-gray-700"
              placeholder="Search for machines (e.g., Diode, HIFU, Slimming)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="grid gap-10 grid-cols-1 lg:grid-cols-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="h-full transform hover:-translate-y-2 transition-transform duration-300">
                  <ProductCard 
                    product={product} 
                    onCompare={toggleCompare}
                    isSelected={!!compareList.find((p) => p.id === product.id)}
                  />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No machines found matching "{searchTerm}".</p>
              </div>
            )}
          </div>
        </div>

        {/* Floating Compare Bar */}
        {compareList.length > 0 && (
          <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 bg-white border border-gray-200 shadow-2xl rounded-full px-6 py-3 flex items-center gap-6 animate-bounce-in">
            <div className="flex items-center gap-2">
              <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                {compareList.length} / 2
              </span>
              <span className="text-gray-700 font-medium text-sm">Selected to Compare</span>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCompareList([])}
                className="text-gray-500 hover:text-red-500 text-sm font-medium underline"
              >
                Clear
              </button>
              <button 
                onClick={() => setShowCompareModal(true)}
                disabled={compareList.length < 2}
                className="bg-blue-600 text-white px-5 py-2 rounded-full font-bold text-sm hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
              >
                Compare Now
              </button>
            </div>
          </div>
        )}

        {/* Comparison Modal */}
        {showCompareModal && createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setShowCompareModal(false)}>
            <div className="bg-white rounded-2xl p-6 md:p-8 max-w-6xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              
              <button 
                onClick={() => setShowCompareModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold z-10"
              >
                ×
              </button>

              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Machine Comparison</h3>

              <div className="grid grid-cols-2 gap-4 md:gap-8 divide-x divide-gray-100">
                {compareList.map((product) => (
                  <div key={product.id} className="flex flex-col h-full">
                    <div className="h-48 flex items-center justify-center mb-6 bg-gray-50 rounded-xl p-4">
                      <img src={product.image} alt={product.name} className="h-full object-contain" />
                    </div>
                    
                    <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">{product.name}</h4>
                    
                    <div className="space-y-6 flex-grow">
                      <div>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">Description</p>
                        <p className="text-sm text-gray-700">{product.description}</p>
                      </div>
                      
                      {product.howItWorks && (
                        <div>
                          <p className="text-xs font-bold text-blue-600 uppercase tracking-wide mb-1">How It Works</p>
                          <p className="text-sm text-gray-700">{product.howItWorks}</p>
                        </div>
                      )}

                      {product.benefits && (
                        <div>
                          <p className="text-xs font-bold text-green-600 uppercase tracking-wide mb-1">Client Benefits</p>
                          <p className="text-sm text-gray-700">{product.benefits}</p>
                        </div>
                      )}
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <a
                        href={`https://wa.me/917093627596?text=Hi, I want to compare ${compareList[0].name} and ${compareList[1]?.name || 'another machine'}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-lg font-bold hover:bg-blue-700 transition"
                      >
                        Enquire About This
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        , document.body)}
      </section>
    </>
  )
}

export default Products
