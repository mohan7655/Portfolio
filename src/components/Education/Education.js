import styled from "styled-components";

export const Header = styled.div`
  min-height: 20vh;
  text-align: left;
  margin: 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Box = styled.div`
  min-height: 40vh;
  border-bottom: solid black 1px;
  &:hover {
    border-bottom: solid tomato 2px;
    li {
      border: solid tomato 1px;
    }
  }
  color: var(--text);
  > h2 {
    color: black;
  }
  /* color: #aeb3b8;  */
  > ul {
    display: flex;
    /* flex-direction: row; */
    gap: 15px;
    list-style-type: none;
    > li {
      /* display: block; */
      /* text-decoration: none; */
      border: solid grey 1px;
      padding: 5px;
      border-radius: 8px;
    }
  }
`;

export const Logo = styled.div`
  /* height: 100px; */
  margin-top: 20px;
  > img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    object-fit: cover;
  }
`;
