import styled from "styled-components";

export const Img = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    object-fit: contain;
  }
`;

export const Arrow = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: grey;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  top: 150px;
  bottom: 0;
  margin: auto;
  left: ${(props) => (props.direction === "left" ? "10px" : null)};
  right: ${(props) => (props.direction === "right" ? "10px" : null)};
  z-index: 2;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;

export const GridContainer = styled.section`
  position: relative;
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  align-items: stretch;
  column-gap: 2rem;
  over-flow: hidden;
  row-gap: 3rem;
  transform: translateX(${(props) => props.index * -450}px);
  transition: all 0.5s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }


`;
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  flex-direction: row;
  display: flex;
  height: 320px;
  padding: 20px 10px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    flex-direction: column;
    height: fit-content;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  margin-top: 10px;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const HeaderFive = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  margin-bottom: 5px;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 10px auto 15px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 10px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  white-space: pre-wrap;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 60px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #6b3030;
  border-radius: 15px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`;
export const Tag = styled.li`
  color: #d8bfbf;
  margin-bottom: 3px;
  font-size: 1.5rem;
`;

export const WrapperContainer = styled.div`
  flex: ${(props) => props.flex_value ? props.flex_value : 1};
  align-self: ${(props) => props.align_self_center ? "center" : "flex-start"};
  height: ${(props) => props.height_fit_content ? "fit-content" : "auto"};
  width: ${(props) => props.width_value ? `${props.width_value}px` : "auto"};
`
