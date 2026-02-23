import SEO from "../components/SEO";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <SEO 
        title="Contact Us" 
        description="Get in touch with AMI Aesthetic for inquiries about laser machines, rentals, or technical support. We are here to help your clinic grow."
      />
      
      
      <div className="relative z-10 pt-32 pb-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Contact Us
        </h1>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Got questions? Don’t hesitate to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 7093627596</p>
                    <p className="text-gray-600">+91 7780176643</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">ami.aesthetic.in@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need Urgent Support?</h3>
              <p className="text-gray-600 mb-4">We’ve prepared a quick troubleshooting guide for you.</p>
              <a 
                href="https://wa.me/917093627596" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline flex items-center gap-2"
              >
                Book Technical Support <span>→</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 bg-white/90 backdrop-blur-md p-4 rounded-xl inline-block shadow-sm">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;