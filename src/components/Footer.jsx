import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          
          {/* Brand Info */}
          <div className="max-w-md flex-1">
            <Link to="/" className="text-2xl font-bold text-white tracking-tight">
              AMI AESTHETIC
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              We specialize in providing advanced laser and aesthetic machines tailored to meet the evolving needs of modern dermatology and aesthetic clinics.
            </p>
          </div>

          {/* Contact Info */}
          <div className="md:text-right">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-4">Get in Touch</h3>

            <div className="flex gap-4 mt-6 md:justify-end">
              <a href="https://www.instagram.com/ami.aesthetic.in/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465 1.067-.047 1.407-.06 4.123-.06h.08zm0-2c-2.733 0-3.038.01-4.197.063-1.214.055-2.051.249-2.795.538a6.96 6.96 0 00-2.5 1.624 6.96 6.96 0 00-1.624 2.5c-.289.744-.483 1.581-.538 2.795C.01 8.674 0 8.98 0 11.715v.63c0 2.733.01 3.038.063 4.197.055 1.214.249 2.051.538 2.795a6.96 6.96 0 001.624 2.5 6.96 6.96 0 002.5 1.624c.744.289 1.581.483 2.795.538 1.159.053 1.464.063 4.197.063h.63c2.733 0 3.038-.01 4.197-.063 1.214-.055 2.051-.249 2.795-.538a6.96 6.96 0 002.5-1.624 6.96 6.96 0 001.624-2.5c.289-.744.483-1.581.538-2.795.053-1.159.063-1.464.063-4.197v-.63c0-2.733-.01-3.038-.063-4.197-.055-1.214-.249-2.051-.538-2.795a6.96 6.96 0 00-1.624-2.5 6.96 6.96 0 00-2.5-1.624c-.744-.289-1.581-.483-2.795-.538C15.353.01 15.048 0 12.315 0h-.63zm-.031 5.838c-3.243 0-5.872 2.629-5.872 5.872s2.629 5.872 5.872 5.872 5.872-2.629 5.872-5.872-2.629-5.872-5.872-5.872zm0 10.162c-2.369 0-4.29-1.92-4.29-4.29s1.92-4.29 4.29-4.29 4.29 1.92 4.29 4.29-1.92 4.29-4.29 4.29zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/ami-aesthetic" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="mailto:ami.aesthetic.in@gmail.com" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Gmail</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                </svg>
              </a>
              <a href="https://wa.me/917093627596" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">WhatsApp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} AMI Aesthetic. All rights reserved.
          </p>
          
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-white transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;