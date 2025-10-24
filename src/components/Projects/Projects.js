import styled from "styled-components";
import { Circle } from "../../shapes";
export const Header = styled.div`
  min-height: 20vh;
  text-align: left;
  margin: 0;
`;
export const Container = styled.div`
  display: flex;
  /* min-height: 85vh; */
  margin-top: 0;
  color: #3d3e40ff;
  /* overflow: auto; */
  a {
    display: inline-block;
    text-decoration: none;
    margin: 0;
    padding: 20px;
    color: #0969da;
    text-align: left;
    font-weight: bolder;
    font-size: xx-large;
    &:hover {
      opacity: 80%;
    }
  }
  p {
    margin: 0;
    padding: 0 15px;
    color: #aeb3b8;
  }
`;

export const Left = styled.div`
  /* flex-grow: 1; */
  display: flex;
  flex-direction: column;
  width: 50vw;
  /* background-color: cyan; */
`;

export const Box = styled.div`
  margin: 4%;
  min-width: 90%;
  min-height: 12rem;
  border-radius: 6px;
  /* border: solid 1px black; */
  box-shadow: 0 5px 10px 5px rgba(238, 238, 238, 1);
  &:hover {
    animation-delay: 50ms;
    box-shadow: 0 5px 10px 5px rgba(214, 214, 214, 1);
  }
  > ul {
    display: flex;
    /* flex-direction: row; */
    gap: 15px;
    font-size: smaller;
    list-style-type: none;
    > li {
      /* display: block; */
      /* text-decoration: none; */
      border: solid #f1e05a 1px;
      padding: 4px;
      border-radius: 6px;
    }
  }
`;

export const Point = styled(Circle)`
  top: 15px;
  display: inline-block;
  position: relative;
  left: 30px;
  min-width: 9px;
  min-height: 9px;
  background-color: gold;
`;
