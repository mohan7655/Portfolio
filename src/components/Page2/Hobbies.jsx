import React from "react";
import {
  Box,
  Box2,
  BoxPad,
  BoxPad2,
  Container,
  Header,
  Left,
  LeftC,
  Right,
} from "./Hobbies";

const Hobbies = () => {
  return (
    <>
      <Header id="page2">
        <h1>Things i Do</h1> <hr />
      </Header>
      <Container>
        <Left>
          <LeftC>
            <Box>
              <h1>Travelling</h1> <hr />
              <p>
                Hi i was just trying to write something. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Delectus distinctio fuga
                eius, culpa totam soluta tenetur quaerat consequuntur et enim
                velit ea ab odio quae magnam. Ut voluptate repudiandae alias!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
                libero ipsa tempora odit velit eius eos accusamus commodi rem
                adipisci veniam, itaque iusto sapiente optio, iste molestias
                ratione mollitia quae. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Atque odit esse consectetur, quaerat pariatur
                adipisci aliquid nam iste ullam accusantium qui doloribus, ab
                nesciunt neque porro commodi possimus? Repudiandae, a?
              </p>
            </Box>
            <BoxPad>
              <h1>Running</h1> <hr />
              <p>Hi i was just trying to write something. </p>
            </BoxPad>
          </LeftC>
          <LeftC>
            <BoxPad2></BoxPad2>
            <Box2>
              <h1>Writing</h1> <hr />
              <p>Hi i was just trying to write something. </p>
            </Box2>
          </LeftC>
        </Left>
        <Right>
          <h1>Prayaas</h1> <hr />
          <p>
            In contrast to the technological changes, the social changes are
            reflected very slowly. Prayaas strives to bring awareness about
            sanitary hygiene,education, self-defence to the nearby residents of
            IIITA by conducting regular campaigns, and organising events. It
            supports financially weaker students and Provides free classes to
            students upto class 12th.{" "}
          </p>
        </Right>
      </Container>
    </>
  );
};
export default Hobbies;
