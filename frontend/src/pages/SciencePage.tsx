import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FeaturedProjects from "../components/FeaturedProjects";
import Hero from "../components/Hero";
import HowWeTackle from "../components/HowWeTackle";
import WhatAreDynamicalSystems from "../components/WhatAreDynamicalSystems";
import WhyImportant from "../components/WhyImportant";
import { scrollToSection } from "../utils/scrollToSection";

type ScienceLocationState = { scrollToId?: string };

export default function SciencePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const scrollToId = (location.state as ScienceLocationState | null)?.scrollToId;
    if (!scrollToId) return;
    requestAnimationFrame(() => scrollToSection(`#${scrollToId}`));
    navigate(`${location.pathname}${location.search}`, {
      replace: true,
      state: {},
    });
  }, [location.state, location.pathname, location.search, navigate]);

  return (
    <>
      <Hero />
      <WhatAreDynamicalSystems />
      <WhyImportant />
      <HowWeTackle />
      <FeaturedProjects />
    </>
  );
}
