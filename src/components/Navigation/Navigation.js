import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  position: sticky;
  top: 0;
`;

export const StyledA = styled.a`
  text-decoration: none;
  display: inline-block;
  flex-grow: 1;
  cursor: pointer;
  padding: 10px 10px;
  color: black;
`;

export const Header = styled(StyledA)`
  flex-grow: 2;
  font-size: xx-large;
  margin-left:30px ;
  /* text-align: center; */
`;
export const Right = styled.div`
  margin-left: auto;
  justify-content: space-between;
  display: flex;
  /* align-items: center; */
`;
