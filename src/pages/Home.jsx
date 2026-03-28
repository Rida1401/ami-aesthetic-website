import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import MachineSlider from "../components/MachineSlider";
import CallToAction from "../components/CallToAction";
import BlogSection from "../components/BlogSection";
import EndToEndSolution from "../components/EndToEndSolution";
import RevealOnScroll from "../components/RevealOnScroll";
import SEO from "../components/SEO";
import heroBg from "../assets/images/hero-bg.jpg";

function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AMI Aesthetic",
    "alternateName": ["AMI Aesthetics", "amiaesthetics", "amiaesthetic"],
    "url": "https://amiaesthetic.com",
    "description": "Leading B2B medical laser machine supplier & aesthetic equipment manufacturer for dermatology clinics in India and UAE.",
    "telephone": "+917093627596",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": ["IN", "AE"]
    },
    "sameAs": [
      "https://www.instagram.com/ami.aesthetic.in/"
    ]
  };

  return (
    <>
      <SEO 
        title="Premium Laser Machines & Clinic Solutions" 
        description="AMI Aesthetic provides gold-standard medical aesthetic laser machines, rental options, and end-to-end clinic solutions in India."
        keywords="AMI Aesthetics, AMI Aesthetic, aesthetic lasers, diode laser, hydrafacial machine, clinic rental, medical equipment India, medical laser treatments, laser skin treatment, advanced laser treatments, cosmetic laser procedures, aesthetic laser clinic, professional laser therapy, clinical laser treatments, medical grade laser treatments, doctor recommended laser treatment, safe laser skin procedures, clinically approved laser treatment, advanced dermatology laser treatment, best laser treatment clinic, trusted laser skin clinic, affordable laser treatments, professional laser clinic, premium aesthetic laser services"
      />
      <Helmet>
        <link rel="preload" as="image" href={heroBg} />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <Hero />
      <RevealOnScroll>
        <EndToEndSolution />
      </RevealOnScroll>
      <RevealOnScroll>
        <MachineSlider />
      </RevealOnScroll>
      <RevealOnScroll>
        <BlogSection isHome={true} />
      </RevealOnScroll>
      <RevealOnScroll>
        <CallToAction />
      </RevealOnScroll>
    </>
  )
}

export default Home;
