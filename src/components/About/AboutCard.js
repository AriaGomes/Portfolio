import React from "react";
import Card from "react-bootstrap/Card";
import { ImCircleRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Thanks for visiting my website 😊. My name is <span className="red">Aria Gomes </span>
            and I live in <span className="red"> Ottawa, Ontario Canada.</span>
            <br />I am a computer engineering graduate pursuing employment and to further improve on established skills in the computer science industry. 
            <br />
            <br />
            When I am not coding, activities that I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImCircleRight />  &nbsp; Playing Video Games
            </li>
            <li className="about-activity">
              <ImCircleRight /> &nbsp; Running a Home Lab
            </li>
            <li className="about-activity">
              <ImCircleRight /> &nbsp; Cooking
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
