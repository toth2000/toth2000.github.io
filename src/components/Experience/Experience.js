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
  WrapperContainer,
  HeaderFive,
} from "./ExperienceStyles";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { experiences } from "../../constants/constants";

const Experience = () => {
  const [index, setIndex] = useState(0);

  const handleRightArrowClick = () => {
    if (index >= projects.length) setIndex(0);
    else setIndex(index + 1);
  };

  const handleLeftArrowClick = () => {
    if (index <= 0) setIndex(projects.length);
    else setIndex(index - 1);
  };

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Experiences</SectionTitle>
      <Arrow direction="left" onClick={handleLeftArrowClick}>
        <AiOutlineArrowLeft />
      </Arrow>
      <Arrow direction="right" onClick={handleRightArrowClick}>
        <AiOutlineArrowRight />
      </Arrow>
      <GridContainer index={index}>
        {experiences.map((x) => {
          return (
            <BlogCard key={x.id}>
              <WrapperContainer align_self_center={true} height_fit_content={true}>
                <Img src={x.logo} />
              </WrapperContainer>
              <WrapperContainer align_self_center={true} height_fit_content={true} flex_value={2} width_value={400}>
                <TitleContent>
                  <HeaderThree title>{x.company}</HeaderThree>
                  <HeaderFive>{x.position}</HeaderFive>
                  <Tag>{x.Date}</Tag>
                  <a href={x.link} target="_blank"><Tag>{x.link}</Tag></a>
                  <Hr />
                </TitleContent>
                <CardInfo> {x.description} </CardInfo>
                {/* <div>
                  <div style={{ marginTop: "25px" }}> Stack </div>
                  <TagList>
                    {x.tags.map((tag, i) => {
                      return <Tag key={i}> {tag} </Tag>;
                    })}
                  </TagList>
                </div> */}
                {/* <UtilityList>
                  <ExternalLinks href={x.visit} target="_blank">
                    Visit
                  </ExternalLinks>
                  <ExternalLinks href={x.source} target="_blank">
                    Code
                  </ExternalLinks>
                </UtilityList> */}
              </WrapperContainer>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Experience;
