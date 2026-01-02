import { Link } from "react-router-dom"

// Using the Pexels image as requested to prevent build errors.
const homeBg = "https://images.pexels.com/photos/7254428/pexels-photo-7254428.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

function Hero() {
  return (
    <section 
      id="home" 
      className="relative bg-cover bg-center bg-fixed py-32 px-8 text-center text-white"
      style={{ backgroundImage: `url(${homeBg})` }}
    >
        <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4 border border-blue-200">
            Premium Aesthetic Technology
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            <span className="text-white">Elevate Your Clinic with</span> <span className="text-blue-400">Advanced Lasers</span>
          </h1>
          
          <p className="text-white text-lg md:text-xl mb-10 leading-relaxed">
            We provide gold-standard medical aesthetic devices for hair reduction, slimming, and skin rejuvenation. Trusted by top dermatologists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
            >
              Request a Demo
            </Link>
            <Link
              to="/products"
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg font-semibold hover:bg-white/30 transition"
            >
              Explore Machines
            </Link>
          </div>

          {/* Statistics Section */}
          <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <p className="text-4xl font-bold text-white">8+</p>
              <p className="text-blue-200 text-sm uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">500+</p>
              <p className="text-blue-200 text-sm uppercase tracking-wider mt-1">Machines Installed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">200+</p>
              <p className="text-blue-200 text-sm uppercase tracking-wider mt-1">Happy Clinics</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">100%</p>
              <p className="text-blue-200 text-sm uppercase tracking-wider mt-1">Service Support</p>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Hero;
