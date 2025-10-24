import styled from "styled-components";

export const Header = styled.div`
  min-height: 20vh;
  text-align: left;
  margin: 0;
`;
export const Container = styled.div`
  display: flex;
  min-height: 85vh;
  margin-top: 0;
  margin-bottom: 40px;
  overflow: auto;
  h1 {
    margin: 0;
    padding: 0;
    color: white;
    text-align: left;
    font-weight: bolder;
  }
  p {
    padding: 0 15px;
  }
`;

export const Left = styled.div`
  flex-grow: 2;
  margin-right: 7px;
  max-width: 67%;
  display: flex;
`;

export const LeftC = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-width: 50%;
  max-width: 50%;
  overflow: auto;
`;

export const Box = styled.div`
  box-sizing: border-box;
  padding: 10px;
  flex-grow: 1;
  background-color: #4484e4;
  max-height: 43%;
  overflow: auto;
  /* max-width: 50%; */
`;

export const BoxPad = styled.div`
  flex-grow: 1;
  margin-top: 10%;
  margin-right: 10%;
  background-color: #4484e4;
  max-height: 50%;
  padding: 10px;
`;

export const BoxPad2 = styled(BoxPad)`
  /* display: none; */
  background-color: white;
  margin-top: 0;
  margin-bottom: 4%;
  margin-left: 4%;
  margin-right: 0;
  /* max-width: 100%; */
  max-height: 40%;
`;

export const Box2 = styled(Box)`
  max-height: 60%;
`;
export const Right = styled.div`
  flex-grow: 1;
  margin-left: 7px;
  background-color: tomato;
`;
