import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import articles from "../data/articles";
import blogTrends from "../assets/images/blog-trends.png";
import blogCryo from "../assets/images/blog-cryo.png";
import blogHair from "../assets/images/blog-hair.png";
import blogRf from "../assets/images/blog-rf.png";
import blogIpl from "../assets/images/blog-ipl.png";
import blogChoose from "../assets/images/blog-choose.png";
import blogSafety from "../assets/images/blog-safety.png";
import blogDefault from "../assets/images/blog-default.png";

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
    if (t.includes("emerging trends")) return blogTrends;
    if (t.includes("cryolipolysis")) return blogCryo;
    if (t.includes("hair removal")) return blogHair;
    if (t.includes("rf") || t.includes("microneedling")) return blogRf;
    if (t.includes("ipl vs laser")) return blogIpl;
    if (t.includes("choosing")) return blogChoose;
    if (t.includes("safety")) return blogSafety;
    return blogDefault;
  };

  return (
    <>
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-6">
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
          {visibleArticles.map((article, index) => (
            <div 
              key={article.id} 
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-video w-full overflow-hidden relative bg-gray-100">
                <img 
                  src={getArticleImage(article.title)} 
                  alt={article.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading={index < 3 ? "eager" : "lazy"}
                  fetchPriority={index < 3 ? "high" : "auto"}
                  width="800"
                  height="450"
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
        </div>
      </div>
    , document.body)}
    </>
  );
}

export default BlogSection;