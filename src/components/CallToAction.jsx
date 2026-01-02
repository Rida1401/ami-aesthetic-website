import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="py-20 px-6 bg-gray-800 text-white relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Upgrade Your Clinic?
        </h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
          Join hundreds of successful dermatologists who trust AMI Aesthetics for advanced laser technology. 
          Get premium machines with flexible rental and EMI options today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-blue-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
          >
            Get a Free Consultation
          </Link>
          <a
            href="https://wa.me/917093627596"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;