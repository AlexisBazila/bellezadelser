import React from "react";
import HeroAboutMe from "../layouts/heroAboutMe/HeroAboutMe";
import StorySection from "../layouts/StorySection/StorySection";
import FocusSection from "../layouts/FocusSection/FocusSection";
import MySelfSection from "../layouts/mySelfSection/MySelfSection";

function AboutMe() {
  return (
    <>
      <HeroAboutMe />
      <MySelfSection />
    </>
  );
}

export default AboutMe;
