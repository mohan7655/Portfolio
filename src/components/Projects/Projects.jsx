import React from "react";
import { Box, Container, Header, Point, Left } from "./Projects";

const Projects = () => {
  return (
    <>
      <Header id="projects">
        <h1>Projects</h1> <hr />
      </Header>
      <Container>
        <Left>
          <Box>
            <a href="https://github.com/mohan7655/School2025">
              Allumni Connect{" "}
            </a>
            <p>
              A full stack MERN application where Alumnis can register
              themselves and share their memories and experiences.
              <ul>
                <li>Implemented Dark Theme using useContext</li>
                <li>Form Validation</li>
                <li>Login and Register using JWT</li>
              </ul>
            </p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </Box>
          
        </Left>
        <Left>
          <Box>
            <a href="https://github.com/mohan7655/New-blog">
              Blogging Website{" "}
            </a>
            <p>
              Developed a full stack blogging platform where user can register
              themselves, and after logging in they can post their blogs. They
              can view blogs posted by other users as well.
              <ul>
                <li>Implemented user Authentication, Pagination</li>
                <li>Form Validation</li>
              </ul>
            </p>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
              <li>MongoDB</li>
              <li>Express</li>
              <li>Node</li>
            </ul>
          </Box>
          
        </Left>
      </Container>
    </>
  );
};
export default Projects;
