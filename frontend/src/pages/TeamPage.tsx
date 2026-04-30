import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MeetOurTeam from "../components/MeetOurTeam";
import { scrollToSection } from "../utils/scrollToSection";

type TeamLocationState = { scrollToId?: string };

export default function TeamPage() {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const scrollToId = (location.state as TeamLocationState | null)?.scrollToId;
    if (!scrollToId) return;
    requestAnimationFrame(() => scrollToSection(`#${scrollToId}`));
    navigate(`${location.pathname}${location.search}`, {
      replace: true,
      state: {},
    });
  }, [location.state, location.pathname, location.search, navigate]);

  return <MeetOurTeam />;
}
