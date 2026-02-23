import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import StickyNavbar from './components/StickyNavbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import GoogleAnalytics from './components/GoogleAnalytics';
import CookieConsent from './components/CookieConsent';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load pages for better performance (Code Splitting)
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const InsightsPage = lazy(() => import('./pages/InsightsPage'));
const Treatments = lazy(() => import('./pages/Treatments'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </Helmet>
      <BrowserRouter>
        <ErrorBoundary>
          <GoogleAnalytics />
          <StickyNavbar />
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-50"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div></div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
              
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/insights" element={<InsightsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <BackToTop />
          <FloatingWhatsApp />
          <CookieConsent />
          <Footer />
        </ErrorBoundary>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
