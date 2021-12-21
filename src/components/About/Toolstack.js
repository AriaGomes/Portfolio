import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiArduino,
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiYarn, 
  SiNpm,
  SiEslint,
  SiJetbrains,
  SiVisualstudio,
  SiEclipseide,
  SiGithub,
  SiUnity, 
  SiMariadb,
  SiWindows,
  SiAtom,
  SiGradle,
  SiLetsencrypt,
  SiApachenetbeanside,
  SiNginx,
  SiFilezilla,
} from "react-icons/si";
import ReactTooltip from "react-tooltip";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="vscode">
        <SiVisualstudiocode />
      </Col>
      <ReactTooltip id="vscode"><span>Microsoft Visual Studio Code</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="vs">
        <SiVisualstudio />
      </Col>
      <ReactTooltip id="vs"><span>Microsoft Visual Studio 2019 Enterprise</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="arduino">
        <SiArduino />
      </Col>
      <ReactTooltip id="arduino"><span>Arduino IDE</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="jetbrains">
        <SiJetbrains />
      </Col>
      <ReactTooltip id="jetbrains"><span>JetBrains IDE Suite</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="netbeans">
        <SiApachenetbeanside />
      </Col>
      <ReactTooltip id="netbeans"><span>Apache NetBeans IDE</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="eclipse">
        <SiEclipseide />
      </Col>
      <ReactTooltip id="eclipse"><span>Eclipse IDE</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="atom">
        <SiAtom />
      </Col>
      <ReactTooltip id="atom"><span>Atom - Text Editor</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="unity">
        <SiUnity />
      </Col>
      <ReactTooltip id="unity"><span>Unity - Game Engine</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="linux">
        <SiLinux />
      </Col>
      <ReactTooltip id="linux"><span>GNU/Linux</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="win">
        <SiWindows />
      </Col>
      <ReactTooltip id="win"><span>Microsoft Windows 11</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="yarn">
        <SiYarn />
      </Col>
      <ReactTooltip id="yarn"><span>Yarn Package Manager</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="npm">
        <SiNpm />
      </Col>
      <ReactTooltip id="npm"><span>Node Package Manager</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="eslint">
        <SiEslint />
      </Col>
      <ReactTooltip id="eslint"><span>ESLint</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="postman">
        <SiPostman />
      </Col>
      <ReactTooltip id="postman"><span>Postman - API Platform</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="github">
        <SiGithub />
      </Col>
      <ReactTooltip id="github"><span>Github</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="nginx">
        <SiNginx />
      </Col>
      <ReactTooltip id="nginx"><span>Nginx - Web Server</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="filezilla">
        <SiFilezilla />
      </Col>
      <ReactTooltip id="filezilla"><span>FileZilla - FTP Client</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="gradle">
        <SiGradle />
      </Col>
      <ReactTooltip id="gradle"><span>Gradle - Build Automation</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="encrypt">
        <SiLetsencrypt />
      </Col>
      <ReactTooltip id="encrypt"><span>Let's Encrypt - SSL Certificate Authority</span></ReactTooltip>

      <Col xs={4} md={2} className="tech-icons" data-tip data-for="mariadb">
        <SiMariadb />
      </Col>
      <ReactTooltip id="mariadb"><span>MariaDB - MySQL Fork</span></ReactTooltip>

    </Row>
  );
}

export default Toolstack;
