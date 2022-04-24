import React, { useState } from "react";

import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
  Arrow,
} from "./ProjectsStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleRightArrowClick = () => {
    if (index + 1 >= projects.length) setIndex(0);
    else setIndex(index + 1);
  };

  const handleLeftArrowClick = () => {
    if (index - 1 < 0) setIndex(projects.length - 1);
    else setIndex(index - 1);
  };

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <Arrow direction="left" onClick={handleLeftArrowClick}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Arrow direction="right" onClick={handleRightArrowClick}>
        <AiOutlineArrowRight />
      </Arrow>
      <GridContainer index={index}>
        {projects.map((x) => {
          return (
            <BlogCard key={x.id}>
              <Img src={x.image} />
              <TitleContent>
                <HeaderThree title>{x.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo> {x.description} </CardInfo>
              <div>
                <div style={{ marginTop: "25px" }}> Stack </div>
                <TagList>
                  {x.tags.map((tag, i) => {
                    return <Tag key={i}> {tag} </Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={x.visit} target="_blank">
                  Visit
                </ExternalLinks>
                <ExternalLinks href={x.source} target="_blank">
                  Code
                </ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Projects;
