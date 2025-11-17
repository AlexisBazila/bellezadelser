import React from "react";
import HeroSection from "../layouts/heroSection/HeroSection";
import MissionSection from "../layouts/missionSection/MissionSection";
import ExperienceSection from "../layouts/experienceSection/ExperienceSection";
import ReviewsSection from "../layouts/reviewsSection/ReviewsSection";
import FooterBar from "../layouts/footerBar/FooterBar";
import SessionSection from "../layouts/sessionSection/SessionSection";
function Home() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <ExperienceSection />
      <SessionSection />
      <ReviewsSection />
    </div>
  );
}

export default Home;
