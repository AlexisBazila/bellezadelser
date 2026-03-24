import React from "react";
import HeroSection from "../layouts/heroSection/HeroSection";
import MissionSection from "../layouts/missionSection/MissionSection";
import ExperienceSection from "../layouts/experienceSection/ExperienceSection";
import ReviewsSection from "../layouts/reviewsSection/ReviewsSection";
import SessionSection from "../layouts/sessionSection/SessionSection";
import FQA from "../layouts/FQA/FQA";
function Home() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <ExperienceSection />
      <SessionSection />
      <ReviewsSection />
      <FQA />
    </div>
  );
}

export default Home;
