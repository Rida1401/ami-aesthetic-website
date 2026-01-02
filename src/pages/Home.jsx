import { useEffect } from "react";
import Hero from "../components/Hero";
import MachineSlider from "../components/MachineSlider";
import CallToAction from "../components/CallToAction";
import BlogSection from "../components/BlogSection";
import EndToEndSolution from "../components/EndToEndSolution";
import RevealOnScroll from "../components/RevealOnScroll";

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
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
