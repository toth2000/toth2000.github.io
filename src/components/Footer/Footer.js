import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  ResumeButton,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Discord</LinkTitle>
          <LinkItem href="https://discord.com/app">toth2000#9887</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@tothagata.me">
            contact@tothagata.me
          </LinkItem>
        </LinkColumn>
        <ResumeButton
          href="https://docs.google.com/document/d/1u49-p6otu7UCIHiZaEAniTIW1xcB5vB8HVnnN-g7OYw/edit?usp=sharing"
          target="_blank"
        >
          Resume{" "}
        </ResumeButton>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Learning and Building Things</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/toth2000" target="_blank">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons
            href="https://www.linkedin.com/in/toth2000/"
            target="_blank"
          >
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://twitter.com/tothbh" target="_blank">
            <AiFillTwitterCircle size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
