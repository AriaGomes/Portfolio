import React, { Suspense } from "react";
import { Button } from "react-bootstrap";
import Particle from "../Particle";
import Space from "../Space";
import Home2 from "./Home2";
import Type from "./Type";
import { AiFillCaretDown } from "react-icons/ai";

function Home() {
  return (
    <>
      <Particle />
      <main className="scroll-container">
      
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
        <div style={{right: '20vw', position: 'absolute', zIndex: '10000', top: '300px'}}>
        <Button onClick={handleScroll} style={{ borderRadius: '50px', height: '50px', width: '50px'}} >
          <AiFillCaretDown style={{ color: 'white' }}  fontSize={'1.1em'} />
        </Button>
      </div>

      </div>

      <section >
      <div style={{ height: '1000px'}}>
        <Suspense fallback={<h1 style={{ color: "white" }}>Loading...</h1>}>
        <Space linear shadows />
        </Suspense>
      </div>
      </section>

      <div style={{ position: "relative", paddingTop: '200px' }}>
        <Home2 />
      
      </div>
        
<section></section>
</main>
    </>
  );
}

export default Home;


function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}