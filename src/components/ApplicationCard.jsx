import { useState } from "react"
import { Link } from "react-router-dom"

function ApplicationCard({ application }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group h-64 w-full [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] shadow-lg rounded-xl ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-white p-4 flex flex-col justify-center items-center text-center [backface-visibility:hidden] border border-gray-100 gap-3 shadow-lg">
          <h3 className="text-xl font-bold text-blue-700 w-full text-center">
            {application.title}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-4">
            {application.description}
          </p>
          <span className="text-xs text-blue-500 font-medium animate-pulse mt-2">
            Tap to view machines ↻
          </span>
        </div>

        {/* BACK SIDE */}
        <div className="absolute inset-0 h-full w-full rounded-xl bg-gray-800 p-4 flex flex-col justify-center items-center text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <h4 className="text-sm font-semibold mb-1">Recommended Machine:</h4>
          <p className="text-lg font-bold text-yellow-300 mb-4">
            {application.machine}
          </p>
          <Link to="/products" className="bg-white text-gray-800 px-4 py-1 text-sm rounded-full font-bold hover:bg-gray-100 transition">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ApplicationCard
