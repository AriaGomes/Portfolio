import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Who  am<span className="red"> I </span> 
            </h1>
            <p className="home-about-body">
              Since I was young I've always wanted to know what made machines <b className="red">'tick'.</b> This lead to alot of broken machines I couldn't put back together as my 9 year old self. Eventually I <b className="red">learned</b> how to build my first computer and not long after I wanted to <b className="red">make my own games </b> which lead me into <b className="red">programming</b> where  <b className="red">I fell in love with computers.</b>
              <br />
              <br />Today, I am fluent in programming languages like
              <i>
                <b className="red"> C, C++, C#, Java, HTML/CSS, PHP, Javascript, Python and MySQL/PostgreSQL. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="red">Realtime web applications </b>
               </i>
                 and also in areas related to{" "}
                 <i>
                <b className="red">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              <br />
              For fun, I like developing applications
              with <b className="red">Node.js</b> and
              <i>
                <b className="red">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="red"> React.js and Next.js </b>
              </i>
              due to modern features and it's simplicity which makes its faster to create something that works quickly with minimal code needed.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1><b className='red'>Find me </b>on</h1>
            <p>
              Feel free to connect with me 😊.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AriaGomes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aria-gomes-60684a165"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
