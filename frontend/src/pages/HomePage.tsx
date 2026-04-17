import Highlights from "../components/Highlights";
import HomeHero from "../components/HomeHero";
import OurApproachHome from "../components/OurApproachHome";
import WhatTakesPlace from "../components/WhatTakesPlace";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhatTakesPlace />
      <Highlights />
      <OurApproachHome />
    </>
  );
}
