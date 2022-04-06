import React from "react";
import Particle from "../Particle";
import Space from "../Space";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <>
      <Particle />
      <div style={{ position: "relative", top: 100, textAlign: "center" }}>
        <div>
          <h1 style={{ paddingBottom: 15, color: "white" }} >
            Welcome ! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
          </h1>

          <h1 style={{ color: "white" }}>
            I'm
            <strong className="main-name"> Aria Gomes</strong>
          </h1>
        </div>
        <div style={{ padding: 50, textAlign: "center" }}>
          <Type />
        </div>
      </div>
      <div style={{ position: "relative", textAlign: "center", top: '-250px', height: '100vh' }}>
        <Space linear shadows />
      </div>
      <div style={{ position: "relative", bottom: "100px" }}>
        <Home2 />
      </div>
    </>
  );
}

export default Home;
