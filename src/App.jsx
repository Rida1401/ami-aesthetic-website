import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StickyNavbar from './components/StickyNavbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import ProductsPage from './pages/ProductsPage';
import InsightsPage from './pages/InsightsPage';
import Treatments from './pages/Treatments';
import BackToTop from './components/BackToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <StickyNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Add these new routes */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTop />
      <FloatingWhatsApp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
