import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import articles from "../data/articles";

function BlogSection({ isHome = false }) {
  useEffect(() => {
    if (!isHome) {
      document.title = "Insights";
    }
  }, [isHome]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleArticles = isHome ? articles.slice(0, 3) : filteredArticles;

  const getArticleImage = (title) => {
    const t = title.toLowerCase();
    if (t.includes("emerging trends")) return "https://img.medestheticsmag.com/files/base/allured/all/image/2024/07/AdobeStock_846154258.668c5796544ce.png?auto=format%2Ccompress&q=70&rect=0%2C0%2C2411%2C2411&w=700";
    if (t.includes("cryolipolysis")) return "https://illumeclinics.com/wp-content/uploads/2019/12/1024px-Cryolipolysis_-_A_depiction_of_cryolipolysis_procedure.jpg";
    if (t.includes("hair removal")) return "https://skynnmd.com/wp-content/uploads/2023/04/Understanding-Laser-Hair-Removal-How-It-Works-to-Remove-Hair-Permanently-1024x683.jpeg";
    if (t.includes("rf skin")) return "https://fashiongtonpost.com/wp-content/uploads/2025/04/rfmicroneedling_m.webp";
    if (t.includes("ipl vs laser")) return "https://www.urbana.ie/wp-content/uploads/2021/06/header-How-Laser-is-Different-From-IPL-1600x900px.jpg";
    if (t.includes("choosing")) return "https://www.lineerasermd.com/wp-content/uploads/2025/12/How-to-Choose-the-Right-Laser-for-Your-Skin-Type-Tone-and-Goals-scaled.jpg";
    if (t.includes("safety")) return "https://tri-star-technologies.com/wp-content/uploads/2023/10/cLNYwaIsgj9NI8yNZTjFNaJJC73FfvYJ1694523676.jpg";
    return "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800";
  };

  return (
    <>
    <section className="py-20 bg-gray-50 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Aesthetic Insights & Education
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest in aesthetic technology and clinical best practices.
          </p>
        </div>

        {/* Search Bar (Only on Insights Page) */}
        {!isHome && (
          <div className="max-w-xl mx-auto mb-12 relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 border border-gray-200 rounded-full leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition duration-150 ease-in-out text-gray-700"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleArticles.map((article) => (
            <div 
              key={article.id} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video w-full overflow-hidden relative bg-gray-100">
                <img 
                  src={getArticleImage(article.title)} 
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                  {article.summary}
                </p>
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="text-blue-600 font-semibold hover:text-blue-800 transition-colors flex items-center gap-2 mt-auto self-start group-hover:translate-x-2 duration-300"
                >
                  Read more <span className="text-xl">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {isHome && (
          <div className="mt-12 text-center">
            <Link
              to="/insights"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
            >
              Explore All Insights →
            </Link>
          </div>
        )}
      </div>
    </section>

    {/* Article Modal */}
    {selectedArticle && createPortal(
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm" onClick={() => setSelectedArticle(null)}>
        <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full relative shadow-2xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
          
          <button 
            onClick={() => setSelectedArticle(null)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl font-bold"
          >
            ×
          </button>

          <h3 className="text-2xl font-bold text-gray-900 mb-4 pr-8">{selectedArticle.title}</h3>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-100">
            <p className="text-xs font-bold text-blue-800 uppercase tracking-wide mb-1">Why clinics choose this</p>
            <p className="text-sm text-blue-900 font-medium">{selectedArticle.why}</p>
          </div>

          <div className="prose text-gray-700 leading-relaxed whitespace-pre-line">
            {selectedArticle.content}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Enquire About This
            </Link>
          </div>
        </div>
      </div>
    , document.body)}
    </>
  );
}

export default BlogSection;