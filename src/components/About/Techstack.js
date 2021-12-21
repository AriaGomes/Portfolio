import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiTensorflow, SiCsharp, SiC, SiCplusplus, SiPhp, SiDotNet, SiJavascript, SiNodeDotJs, SiCss3, SiHtml5, SiMongodb, SiReact, SiPython, SiGit, SiJava, SiMysql, SiPostgresql, SiDocker, SiBootstrap, SiMicrosoftazure  } from "react-icons/si";
import ReactTooltip from "react-tooltip";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="c++">
        <SiCplusplus />
      </Col>
      <ReactTooltip id="c++" ><span>C++</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="js">
        <SiJavascript />
      </Col>
      <ReactTooltip id="js"><span>JavaScript</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="python">
        <SiPython />
      </Col>
      <ReactTooltip id="python"><span>Python</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="html">
        <SiHtml5 />
      </Col>
      <ReactTooltip id="html"><span>HTML5</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="css">
        <SiCss3 />
      </Col>
      <ReactTooltip id="css"><span>CSS3</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="java">
        <SiJava />
      </Col>
      <ReactTooltip id="java"><span>Java</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="c#">
        <SiCsharp />
      </Col>
      <ReactTooltip id="c#"><span>C#</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="c">
        <SiC />
      </Col>
      <ReactTooltip id="c"><span>C</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="php">
        <SiPhp />
      </Col>
      <ReactTooltip id="php"><span>PHP</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for='dotnet'>
        <SiDotNet />
      </Col>
      <ReactTooltip id="dotnet"><span>.NET Framwork & .Net Core</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="node">
        <SiNodeDotJs />
      </Col>
      <ReactTooltip id="node"><span>Node.JS</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="react">
        <SiReact />
      </Col>
      <ReactTooltip id="react"><span>React</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="tensor">
        <SiTensorflow />
      </Col>
      <ReactTooltip id="tensor"><span>TensorFlow</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="bootstrap">
        <SiBootstrap />
      </Col>
      <ReactTooltip id="bootstrap"><span>Bootstrap CSS Framework</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="mysql">
        <SiMysql />
      </Col>
      <ReactTooltip id="mysql"><span>MySQL</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="postgresql">
        <SiPostgresql />
      </Col>
      <ReactTooltip id="postgresql"><span>PostgreSQL</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="mongo">
        <SiMongodb />
      </Col>
      <ReactTooltip id="mongo"><span>MongoDB/NoSQL</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="git">
        <SiGit />
      </Col>
      <ReactTooltip id="git"><span>Git</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="docker">
        <SiDocker />
      </Col>
      <ReactTooltip id="docker"><span>Docker</span></ReactTooltip>
      
      <Col xs={4} md={2} className="tech-icons" data-tip data-for="azure">
        <SiMicrosoftazure />
      </Col>
      <ReactTooltip id="azure"><span>Microsoft Azure Web Services</span></ReactTooltip>

    </Row>
  );
}

export default Techstack;
