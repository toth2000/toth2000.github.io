import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { LearnMoreButton, LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I'm Tothagata
      </SectionTitle>
      <SectionText>
        CS student | Developer | Problem Solver |<br />
        <span> Open Source Enthusiast </span>
      </SectionText>
      <LearnMoreButton href="#about">Learn More</LearnMoreButton>
    </LeftSection>
  </Section>
);

export default Hero;
