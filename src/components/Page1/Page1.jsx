import React from "react";
import { Bg1, Bg2, Left, Right } from "./Page1";
import mohan from "/home/kaybe/Documents/WEB DEV/PORTFOLIO/my-app/src/assets/mohan.jpg";
import { Circle, Cubes } from "../../shapes";

const Page1 = () => {
  return (
    <Bg1 id="page1">
      <Left>
        <Bg2></Bg2>
        <Circle style={{ top: "400px", left: "100px" }}></Circle>
        <Cubes style={{ top: "250px", left: "500px" }}></Cubes>
        <h1>Hi, I'm Mohan.</h1>

        <p>Driven by Curiousity, empowered by Dicipline.</p>
      </Left>
      <Right>
        <img src={mohan} alt="Hello" />
      </Right>
    </Bg1>
    //     <div className="">
    //         <div className="aboutp1">
    //             <Bg1>
    //                 <image/>
    //                 <div className="abtext">
    //                     <h1>Hi, I'm Mohan.</h1>
    //                     <p>Driven by Curiousity, empowered by Dicipline.</p>
    //                 </div>
    //             </Bg1>
    //             <div className="bg2">

    //             </div>
    //         </div>
    //     </div>
    //     <div>
    //     <div>

    //     <div>
    //          <div className="aboutp1">

    //     <div className="bg1">
    //         {/* <image/> */}
    //         {/* <Image className="abimg" src="mohan.jpg" alt="Profile"/> */}
    //         <div className="abtxt" style="">
    //             <h1>
    //                 Hi, I'm Mohan.
    //             </h1> <br/>
    //             <p>  </p>
    //         </div>

    //         <div className="cubes" ></div>
    //         <div className="cubes" ></div>
    //         <div className="circles" ></div>
    //         <div className="circles" ></div>
    //         <div className="triangle-left" ></div>
    //     </div>
    //     <div className="bg2"> </div>
    // </div>
  );
};
export default Page1;
