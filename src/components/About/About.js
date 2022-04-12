import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import Toolstack from "./Toolstack";
import WordCloud from "../WordCloud";

function About() {
  return (
    <><Particle /><Container className="about-section">

      <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col
          md={7}
          style={{
            justifyContent: "center",
            paddingTop: "30px",
            paddingBottom: "50px",
          }}
        >
          <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
            Get to know <strong className="red"> me </strong>
          </h1>
          <Aboutcard />
        </Col>
        <Col
          md={5}
          style={{ paddingTop: "120px", paddingBottom: "50px" }}
          className="about-img"
        >
          <Suspense fallback={<h1 style={{ color: "white" }}>Loading...</h1>}>
        <WordCloud />
        </Suspense>
        </Col>
        
      </Row>
      <h1 className="project-heading">
        Professional <strong className="red">skillset </strong>
      </h1>

      <Techstack />

      <h1 className="project-heading">
        <strong className="red">Tehcnologies & tools</strong> I use
      </h1>
      <Toolstack />

      <Github />
    </Container></>
    
  );
}

export default About;
