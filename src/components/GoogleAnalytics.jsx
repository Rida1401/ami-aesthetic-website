import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA4
    if (!window.GA_INITIALIZED) {
      try {
        ReactGA.initialize("G-N34QJHCEPM");
        window.GA_INITIALIZED = true;
      } catch (error) {
        console.error("Google Analytics failed to initialize:", error);
      }
    }
  }, []);

  useEffect(() => {
    // Send pageview with a custom path
    if (window.GA_INITIALIZED) {
      ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;