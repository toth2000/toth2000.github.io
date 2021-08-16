import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <a
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <DiCssdeck size="3rem" />
        <Span>Portfolio</Span>
      </a>
    </Div1>
    <Div2>
      <li>
        <NavLink href="#projects">Projects</NavLink>
      </li>
      <li>
        <NavLink href="#technologies">Technologies</NavLink>
      </li>
      <li>
        <NavLink href="#about">About</NavLink>
      </li>
      <li>
        <NavLink
          href="https://docs.google.com/document/d/1u49-p6otu7UCIHiZaEAniTIW1xcB5vB8HVnnN-g7OYw/edit?usp=sharing"
          target="_blank"
        >
          Resume
        </NavLink>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/toth2000" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/toth2000/" target="_blank">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://twitter.com/tothbh" target="_blank">
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
