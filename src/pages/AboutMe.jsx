import React from "react";
import HeroAboutMe from "../layouts/heroAboutMe/HeroAboutMe";
import StorySection from "../layouts/StorySection/StorySection";
import FocusSection from "../layouts/FocusSection/FocusSection";

function AboutMe() {
  return (
    <>
      <HeroAboutMe />
      <StorySection />
      <FocusSection />
    </>
  );
}

export default AboutMe;
