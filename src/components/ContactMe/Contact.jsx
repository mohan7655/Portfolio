import React from "react";
import {
  Container,
  FormContainer,
  FormGroup,
  Header,
  LeftContainer,
  RightContainer,
  Social,
  StyledA,
  Button,
} from "./Contact";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Form from "./Form";

const Contact = () => {
  
  return (
    <>
      <Header id="contact"> Contact Me</Header>
      <Container>
        <LeftContainer>
          <Social>
            <StyledA href="https://github.com/mohan7655">
              <FaGithub size={35} />
            </StyledA>
            <StyledA href="https://www.linkedin.com/in/mohan-agarwala-904b88327/">
              <FaLinkedin size={35} />
            </StyledA>
          </Social>
          <Button
            href="https://drive.google.com/file/d/1_Ugy6RzR0Yzf7ITbv_ObQLF9dzdaF07A/view?usp=drive_link"
            target="_blank"
          >
            Download Resume
          </Button>
        </LeftContainer>
        <RightContainer>
          <Form />
        </RightContainer>
      </Container>
    </>
  );
};

export default Contact;
