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
    "url": "https://amiaesthetic.com",
    "description": "AMI Aesthetic provides gold-standard medical aesthetic laser machines, rental options, and end-to-end clinic solutions in India.",
    "telephone": "+917093627596",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/ami.aesthetic.in/",
      "https://www.linkedin.com/in/ami-aesthetic"
    ]
  };

  return (
    <>
      <SEO 
        title="Premium Laser Machines & Clinic Solutions" 
        description="AMI Aesthetic provides gold-standard medical aesthetic laser machines, rental options, and end-to-end clinic solutions in India."
        keywords="aesthetic lasers, diode laser, hydrafacial machine, clinic rental, medical equipment India"
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
