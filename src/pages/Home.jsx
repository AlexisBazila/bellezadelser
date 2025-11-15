import React from "react";
import HeroSection from "../layouts/heroSection/HeroSection";
import MissionSection from "../layouts/missionSection/MissionSection";
import ExperienceSection from "../layouts/experienceSection/ExperienceSection";
import CoursesSection from "../layouts/coursesSection/CoursesSection";
import ReviewsSection from "../layouts/reviewsSection/ReviewsSection";
import FooterBar from "../layouts/footerBar/FooterBar";
import SessionSection from "../layouts/sessionSection/SessionSection";
function Home() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <ExperienceSection />
      {/* <CoursesSection /> */}
      <SessionSection />
      <ReviewsSection />
    </div>
  );
}

export default Home;
