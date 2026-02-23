import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-900/95 backdrop-blur text-white p-4 z-[100] flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg border-t border-gray-700">
      <div className="text-sm text-gray-300 text-center md:text-left max-w-3xl">
        <p>
          We use cookies to enhance your experience and analyze site traffic. By continuing to visit this site you agree to our use of cookies.
        </p>
      </div>
      <div className="flex gap-3">
        <button 
          onClick={acceptCookies}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-semibold transition shadow-md"
        >
          Accept
        </button>
        <button 
          onClick={() => setIsVisible(false)}
          className="bg-transparent border border-gray-600 hover:bg-gray-800 text-gray-300 px-6 py-2 rounded-lg text-sm font-semibold transition"
        >
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;