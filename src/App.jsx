import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import StickyNavbar from './components/StickyNavbar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import GoogleAnalytics from './components/GoogleAnalytics';
import CookieConsent from './components/CookieConsent';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';

// Lazy load pages for better performance (Code Splitting)
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const InsightsPage = lazy(() => import('./pages/InsightsPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

function App() {
  return (
    <>
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
              <Route path="/products/:id" element={<ProductDetail />} />
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
    </>
  );
}

export default App;
