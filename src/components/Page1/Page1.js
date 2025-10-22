import styled from "styled-components";

export const Bg1 = styled.div`
  /* max-width: 80%; */
  background-color: tomato;
  min-height: 80%;
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;
`;

export const Bg2 = styled.div`
  background-color: #4484e4;
  z-index: -1;
  position: absolute;
  top: 275px;
  right: 50px;
  min-height: 500px;
  min-width: 400px;
`;

export const Left = styled.div`
  float: left;
  min-width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bolder;
`;

export const Right = styled.div`
  float: right;
  > img {
    margin: 1rem;
    /* align-self: center; */
    width: 90%;
    height: fit-content;
    border-radius: 8px;
    border: solid gold 4px;
  }
`;
