import { useEffect } from "react";
import AboutComponent from "../components/About";

function About() {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
      <AboutComponent />
    </>
  );
}

export default About;