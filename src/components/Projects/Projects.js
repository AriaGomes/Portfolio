import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Imports of images here
import afroguide from '../../Assets/Projects/afroguideTextless.png';
import discordShell from '../../Assets/Projects/discordshell.png';
import javachat from '../../Assets/Projects/javachat.png';
import buffer from '../../Assets/Projects/Buffer.jpg';
import scanner from '../../Assets/Projects/Scanner.gif';
import parser from '../../Assets/Projects/Parser.gif';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="red">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Some of the projects I have worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={afroguide}
              isBlog={false}
              title="Afroguide.ca"
              description="Platform for users to easily discover hairstylists & barbers who cater to black hair. Users can book appointments and rate stylists. Stylists can use the platform to expose their skills to new users. The application uses ReactJS and Material UI for the front-end elements, NextJS and react-router-dom for routing pages, Google API with react-places-autocomplete for geolocation, autocomplete and location data."
              link="http://Afroguide.ca"
            />
          </Col>
        
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discordShell}
              isBlog={false}
              title="DiscordShell"
              description="Runs any Linux shell command inside of a Discord text channel.The Application uses node.js and discord.js to execute and connect with discord’s API. child_process is used to pipe commands to the shell and pipe the output back as a discord message. Was created in a couple hours. More features will be added later."
              link="https://github.com/AriaGomes/FigroDiscordBot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={javachat}
              isBlog={false}
              title="Java Client-Server Chat"
              description="Built from the ground up in Java Swing. A functional server and client application that can create a socket and send data back and fourth. The program also cleanly disconnects and destroys the socket so that nothing is left open on the users machine."
              link="https://github.com/AriaGomes/Java-Applications-Programming/tree/master/ClientServerChat"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buffer}
              isBlog={false}
              title="Platypus Buffer"
              description="Built from scratch in ANSI C, my buffer reserves memory cleanly and also frees memory cleanly aswell. The buffer can take an input file along with the mode. The mode determines how the memory will be managed to read the type of file. F being fixed sized of memory, M being multiplicative mode where memory capacity is multiplied when needed, and A for additive which adds on to the memory when needed. The buffer byitself is not very useful as it just takes data and reserves memory but doesnt do anything with the data. It was a good learning experience to understanding how compilers work."
              link="https://github.com/AriaGomes/PerryThePlatypusBuffer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scanner}
              isBlog={false}
              title="Platypus Scanner"
              description="Using the Buffer, the Scanner takes the input from the buffer and reads the data witin it to decide what needs to be done next such as retract backwards or understand what type of error is on the line and what is the cause of it using the state table. The scanner makes our compiler useful in terms that something is being done with the input from the buffer although we cannot see our right and wrong lines."
              link="https://github.com/AriaGomes/PerryThePlatypusScanner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parser}
              isBlog={false}
              title="Platypus Parser"
              description="Built from scratch using the Buffer & Scanner projects. This Parser will detect grammar from the faux language PLATYPUS. It will read a input file and display each type of keyword or type of error and also run print lines from the file. This final piece bring the compiler together into a functional product. With all 3 projects this makes up a complete compiler for faux language PLATYPUS."
              link="https://github.com/AriaGomes/PerryThePlatypusParser"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
