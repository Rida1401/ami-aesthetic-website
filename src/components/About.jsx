import { useState } from "react"
import { Link } from "react-router-dom"

function About() {
  const [openIndex, setOpenIndex] = useState(null)
  const bgImage = "https://neonest.in/wp-content/uploads/2024/03/240_F_748589104_gwv8VXxmGZODJDv2tkwMUslnGRHyXoap.jpg";
  const sideImage = "https://hanizeini.net/wp-content/uploads/2023/12/2023-Trends-10-Medical-Devices-Shaping-Aesthetic-Dermatology-930x620.png";

  const faqs = [
    {
      question: "Do you provide training for the machines?",
      answer: "Yes, we provide comprehensive onsite training and certification for your staff with every machine purchase to ensure safe and effective usage."
    },
    {
      question: "What is the warranty period?",
      answer: "All our machines come with a standard 1-year warranty covering parts and service. We also offer extended warranty packages and lifetime technical support."
    },
    {
      question: "Do you offer rental options?",
      answer: "Yes, we have flexible rental plans for select machines like Cryolipolysis and Diode Lasers, allowing you to introduce new treatments with lower initial investment."
    },
    {
      question: "How long does delivery and installation take?",
      answer: "We offer Pan-India delivery. Typically, machines are delivered and installed within 5-7 business days, depending on your location."
    },
    {
      question: "Do you provide after-sales service?",
      answer: "Absolutely. We have a dedicated team of technicians for maintenance and repairs. We ensure minimum downtime for your clinic."
    }
  ]

  return (
    <section id="about" className="relative px-6 py-20 bg-gray-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <img 
          src={bgImage} 
          alt="Abstract technology background" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header & Intro with Image */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={sideImage} 
                alt="About Us" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
            <p className="text-xl text-blue-600 font-medium mb-6">
              Your Partner in Advanced Aesthetic & Laser Solutions
            </p>
            <div className="text-gray-700 text-lg leading-relaxed space-y-6">
              <p className="text-black">
                We specialize in providing advanced laser and aesthetic machines tailored to meet the evolving needs of modern dermatology and aesthetic clinics. Our focus is on delivering reliable, clinically effective, and high-performance equipment that supports professionals in achieving safe and consistent treatment outcomes.
              </p>
              <p>
                With a strong understanding of the aesthetic industry, we aim to be more than just a supplier — we work as a trusted long-term partner for clinics at every stage of their growth.
              </p>
            </div>
          </div>
        </div>

        {/* What We Do */}
        <div className="bg-white/60 backdrop-blur-md p-8 rounded-xl shadow-sm border border-gray-100 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Do</h3>
          <p className="text-gray-700 mb-4">
            We offer end-to-end solutions designed to support clinics operationally and technologically, including:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 mb-6">
            {["Sale of advanced laser and aesthetic machines", "Flexible rental options for clinics and practitioners", "Pan-India delivery with secure handling", "Installation, training, and technician support"].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="text-blue-500 mt-1 font-bold">›</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700">
            Our services are structured to help clinics expand their treatment offerings efficiently, without unnecessary complexity.
          </p>
        </div>

        {/* Trusted by Clinics */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Clinics Across India</h3>
          <div className="text-gray-700 space-y-4">
            <p>
              Over the years, we have worked with numerous dermatology, cosmetology, aesthetic, and wellness clinics across multiple cities. Our machines are trusted for their quality, durability, and performance, while our service is valued for its responsiveness and reliability.
            </p>
            <p>
              We believe lasting relationships are built on consistency, transparency, and dependable support, and we take pride in the confidence our clients place in us.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us</h3>
            <ul className="space-y-3">
              {["Clinically trusted machines", "Flexible sales and rental models", "Timely delivery and professional installation", "Dedicated technician and after-sales support", "Honest guidance and clear communication"].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <span className="h-2 w-2 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-6 italic">
              Every solution we provide is guided by a single goal — supporting clinics in delivering safe and effective treatments.
            </p>
          </div>
          
          {/* Our Commitment */}
          <div className="bg-gray-800/80 backdrop-blur-md text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
            <p className="leading-relaxed opacity-90">
              We are committed to continuously improving our offerings by staying aligned with advancements in aesthetic technology and industry standards. Through reliable equipment and ongoing support, we help clinics operate with confidence and long-term stability.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/60 backdrop-blur-md rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-800">{faq.question}</span>
                  <span className={`text-blue-600 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                <div 
                  className={`px-6 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index ? 'max-h-40 py-4 border-t border-gray-100' : 'max-h-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-white/60 backdrop-blur-md p-10 rounded-2xl shadow-sm border border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Let’s Work Together</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Whether you are setting up a new clinic, upgrading existing equipment, or exploring rental options, we are here to support you with dependable solutions and professional service.
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
          >
            Contact Us for a Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default About
