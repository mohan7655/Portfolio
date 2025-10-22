import { Form } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  height: 20vh;
  color: white;
  font-weight: bolder;
  font-size: x-large;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10vh;
  margin-bottom: -12vh;
  width: 50vw;
  background-color: #4484e4;
  position: absolute;
  z-index: 2;
`;

export const Container = styled.div`
  height: 80vh;
  display: flex;
  position: relative;
  top: 20vh;
  z-index: 1;
`;

export const LeftContainer = styled.div`
  margin-left: 0;
  display: flex;
  width: 40vw;
  flex-grow: 1;
  background-color: aliceblue;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 100px;
  button {
  }
`;

export const Button = styled.a`
  padding: 30px;
  text-decoration: none;
  color: black;
  border: solid black 2px;
  border-radius: 8px;
  background-color: #4484e4;
  cursor: pointer;
  &:hover {
    opacity: 90%;
    color: white;
  }
`;
export const Social = styled.div`
  display: flex;
  /* background-color: tomato; */
  gap: 20px;
`;

export const StyledA = styled.a`
  text-decoration: none;
  flex-grow: 1;
  cursor: pointer;
  padding: 10px 10px;
  color: black;
  &:hover {
    color: tomato;
  }
`;
export const RightContainer = styled.div`
  background-color: tomato;
  border-radius: 8px;
  width: 45vw;

  /* margin-left: 40vw; */
  display: flex;

  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  border: black solid 2px;
  align-items: center;
  justify-content: space-evenly;
  gap: 2vh;
  height: 60vh;
  width: 70%;
  /* margin-top: 0; */
  /* margin-bottom: auto; */
  > button {
    border: solid #4484e4 2px;
    border-radius: 8px;
    background: none;
    min-height: 35px;
    min-width: 65px;
    color: tomato;
    padding: 5px;
    font-size: larger;
    background-color: white;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  gap: 20px;
  > label {
    width: 15%;
    margin-left: 0;
  }
  > input {
    /* width: 80%; */
    flex-grow: 1;
    flex-basis: 70%;
    border: solid gold 1px;
    height: 30px;
    /* width: 100%; */
  }
  > textarea {
    height: 20vh;
    width: 100%;
    resize: none;
    border: solid gold 1px;
    overflow-y: scroll;
  }
`;
