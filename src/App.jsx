import React from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Page1 from "./components/Page1/Page1.jsx";
import { AppContainer, GlobalStyle } from "./styled.js";
// import "font-awesome/css/font-awesome.min.css";
import Projects from "./components/Projects/Projects.jsx";
import Hobbies from "./components/Page2/Hobbies.jsx";
import Education from "./components/Education/Education.jsx";
import Contact from "./components/ContactMe/Contact.jsx";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      {/* <Header /> */}
      <Navigation />
      <Page1 />
      <Projects />
      <Education />

      <Hobbies />
      <Contact />
      {/* <GitProfile/> */}
      {/* <GithubRepoCard/> */}
    </AppContainer>
  );
}

export default App;
