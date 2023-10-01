import React from "react";
import { AiOutlineConsoleSql } from "react-icons/ai";
import {
  SiAndroidstudio,
  SiC,
  SiCplusplus,
  SiCss3,
  SiFirebase,
  SiHtml5,
  SiJava,
  SiJavascript,
  SiMongodb,
  SiNodeDotJs,
  SiPython,
  SiReact,
  SiRedux,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  IconContainer,
} from "./TechnologiesStyles";
import { AboutMeText } from "../../constants/constants";

const Technologies = () => (
  <>
    <Section id="about">
      <SectionDivider />
      <br />
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        {" "}
        {AboutMeText}
      </SectionText>
    </Section>
    <Section id="language">
      <SectionDivider />
      <br />
      <SectionTitle>Programming Languages</SectionTitle>
      <SectionText>
        {" "}
        The programming languages that I know includes:{" "}
      </SectionText>
      <IconContainer>
        <SiC size="3rem" />
        <SiCplusplus size="3rem" />
        <SiJava size="3rem" />
        <SiJavascript size="3rem" />
        <SiPython size="3rem" />
      </IconContainer>
    </Section>
    <br />
    <Section id="technologies">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        My are of interest includes full stack web and app development. <br />
        The technologies that I work with includes:
      </SectionText>
      <List>
        <ListItem>
          <IconContainer>
            <SiHtml5 size="3rem" />
            <SiCss3 size="3rem" />
            <SiReact size="3rem" />
            <SiRedux size="3rem" />
          </IconContainer>
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>HTML | CSS | React.js | Redux</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <IconContainer>
            <SiNodeDotJs size="3rem" />
            {/* <DiExpress size="3rem"/> */}

            <SiMongodb size="3rem" />
            <SiFirebase size="3rem" />
            <AiOutlineConsoleSql size="3rem" />
          </IconContainer>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Node.js | Express.js | MongoDB | Firebase | SQL | REST
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <IconContainer>
            <SiAndroidstudio size="3rem" />
            <SiReact size="3rem" />
          </IconContainer>
          <ListContainer>
            <ListTitle>Mobile-Development</ListTitle>
            <ListParagraph>Android Studio | ReactNative</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </>
);

export default Technologies;
