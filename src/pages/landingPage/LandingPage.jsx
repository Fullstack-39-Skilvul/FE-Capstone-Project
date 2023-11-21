import React from "react";
import Hero from "./Hero";
import About from "./About";
import TryKonseling from "./TryKonseling";
import Konselor from "./Konselor";
import Media from "./Media";

function LandingPage() {
  return (
    <div>
      <Hero />
      <About />
      <TryKonseling />
      <Konselor />
      <Media />
    </div>
  );
}

export default LandingPage;
