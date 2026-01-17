import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll";

function EndToEndSolution() {
  const bgImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsVB26m5iofB24yilLGZHJuVQWhJS9dnEPA&s";

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Organic shapes */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-blue-50/40 via-transparent to-purple-50/40 blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            End-to-End Solutions
          </h3>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            We offer end-to-end solutions for aesthetic clinics, ensuring you have the best technology and support to grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Machine Sales", desc: "High-quality aesthetic lasers available for purchase with warranty." },
            { title: "Rental Options", desc: "Flexible rental plans to suit your clinic's needs and budget." },
            { title: "Pan-India Delivery", desc: "Reliable and insured logistics support across all states." },
            { title: "Technician Support", desc: "24/7 technical assistance, maintenance, and on-site repairs." },
          ].map((item, index) => (
            <RevealOnScroll key={index} delay={index * 200}>
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 border border-white/50 h-full group hover:-translate-y-2">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mb-6 text-blue-600 font-bold text-xl shadow-inner group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition shadow-lg"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EndToEndSolution;