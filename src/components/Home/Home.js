import React from "react";
import Particle from "../Particle";
import Space from "../Space";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <>
      <Particle />
      <div style={{ position: "absolute", top: 100, textAlign: "center", paddingBottom: '300px', width: '100%' }}>
        <div>
          <h1 style={{ color: "white" }} >
            Welcome ! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
          </h1>

          <h1 style={{ color: "white" }}>
            I'm
            <strong className="main-name"> Aria Gomes</strong>
          </h1>
        </div>


        <div style={{ position: 'absolute', width: '100%' }}>
          <Type />
        </div>
      </div>


      <div style={{ height: '1500px', transform: 'translateY(-170px)'}}>

        <Space linear shadows />
      </div>
      <div style={{ position: "relative" }}>
        <Home2 />
      </div>
    </>
  );
}

export default Home;
