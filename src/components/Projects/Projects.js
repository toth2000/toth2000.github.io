import React from "react";

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
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
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

export default Projects;
