import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  
  // Pages with dark background headers where white text is visible
  const isDarkBg = ["/", "/about", "/contact"].includes(location.pathname)

  return (
    <nav className={`flex justify-between items-center px-8 py-4 z-50 absolute top-0 left-0 w-full ${isDarkBg ? 'bg-transparent' : 'bg-white/90 backdrop-blur-md shadow-sm'}`}>
      <Link to="/" className={`text-2xl font-bold ${isDarkBg ? 'text-white' : 'text-blue-600'}`}>
        AMI AESTHETIC
      </Link>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden focus:outline-none ${isDarkBg ? 'text-white' : 'text-gray-700'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-3xl">{isOpen ? "×" : "☰"}</span>
      </button>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row absolute md:static top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none p-4 md:p-0 gap-6 font-medium ${isOpen ? 'text-gray-700' : (isDarkBg ? 'text-white' : 'text-gray-700')}`}
      >
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/products" onClick={() => setIsOpen(false)}>Products</Link></li>
        <li><Link to="/insights" onClick={() => setIsOpen(false)}>Insights</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
