import React from "react";
import { Box, Container, Header, Logo } from "./Education";
import ssvm from "../../assets/ssvm.jpg";
import iiita from "../../assets/iiita.png";
import godtal from "../../assets/godtal.jpg";

const Education = () => {
  return (
    <>
      <Header id="education">
        <h1>Education</h1> <hr />
      </Header>
      <Container>
        <Box>
          <Logo>
            <img src={iiita} />
          </Logo>
          <h2>Indian Insitute of Information Technology, Allahabad</h2>
          <h3>B.tech. in Information Technology</h3>
          <h4>2020-2024</h4>
          <ul>
            <li>DSA</li>
            <li>OS</li>
            <li>OOPS</li>
            <li>DBMS</li>
            <li>React</li>
            <li>Javascript</li>
          </ul>
        </Box>
        <Box>
          <Logo>
            <img src={godtal} alt="Godtal" />
          </Logo>
          <h2>Godtal Reigonal HS School</h2>
          <h3>HSCE 12th</h3>
          <h3>2017-2019</h3>
        </Box>
        <Box>
          <Logo>
            <img src={ssvm} alt="SSVM" />
          </Logo>
          <h2>Saraswati Shishu Vidya Mandir</h2>
          <h3>CHSE 10th </h3>
          <h3>2017</h3>
        </Box>
      </Container>
    </>
  );
};

export default Education;
