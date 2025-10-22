import React from "react";
import { Nav, Right, Header, StyledA } from "./Navigation";

const Navigation = () => {
  return (
    <>
      <Nav>
        <Header href="#page1">Mohan</Header>
        <StyledA href="#projects">Projects</StyledA>
        <StyledA href="#education">Education</StyledA>
        <StyledA href="#page2">Hobbies</StyledA>
        <StyledA href="#contact">Contact</StyledA>
        {/* <StyledLink to={"/Page2#hpage2"}>about</StyledLink> */}
        {/* <StyledLink to={""}>about</StyledLink> */}
        {/* <StyledLink to={""}>about</StyledLink> */}
        {/* <StyledLink to={""}>about</StyledLink> */}

        {/* <div class="nav " style="flex-grow: 1; cursor: pointer;">
          <a href="about.html">about</a>
        </div>
        <div class="nav sections" style="flex-grow: 1;">
          <a href="">space</a>
          <div class="section_elements">
            <div class="options">
              <a href="physicsspace.html"> Physics</a>
            </div>
            <div class="options">
              <a href="historyspace.html"> History</a>
            </div>
            <div class="options">
              <a href=""> Writings</a>
            </div>
          </div>
        </div>
        <div class=" logo">
          <a href="home.html">Khanabadosh</a>
          <div style="align-self: right; " class="butn3">
            <i class="fa fa-bars"></i>
          </div>
        </div>
        <div class="nav sections" style="flex-grow: 1;">
          <a href="">blogs</a>
          <div class="section_elements">
            <div class="options">
              <a href="physicsblog.html"> Physics</a>
            </div>
            <div class="options">
              <a href="historyblog.html"> History</a>
            </div>
            <div class="options">
              <a href="writingsblog.html"> Writings</a>
            </div>
          </div>
        </div>
        <div class="nav" style="flex-grow: 1;">
          <a href="">search</a>
        </div> */}
      </Nav>
    </>
  );
};
export default Navigation;
