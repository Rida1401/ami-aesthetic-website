import { Link } from "react-router-dom";
import RevealOnScroll from "./RevealOnScroll";

function EndToEndSolution() {
  const bgImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBsVB26m5iofB24yilLGZHJuVQWhJS9dnEPA&s";

  return (
    <section className="relative py-24 bg-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img 
          src={bgImage} 
          alt="Business partnership handshake" 
          className="w-full h-full object-cover"
        />
      </div>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Machine Sales", desc: "High-quality aesthetic lasers available for purchase with warranty." },
            { title: "Rental Options", desc: "Flexible rental plans to suit your clinic's needs and budget." },
            { title: "Pan-India Delivery", desc: "Reliable and insured logistics support across all states." },
            { title: "Technician Support", desc: "24/7 technical assistance, maintenance, and on-site repairs." },
          ].map((item, index) => (
            <RevealOnScroll key={index} delay={index * 200}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition border border-gray-100 h-full">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">
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