import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="red">Aria Gomes </span>
            from <span className="red"> Ottawa, Ontario Canada.</span>
            <br />I am a computer engineering graduate pursuing employment and to further improve on established skills in the computer science industry. 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Running a Home Lab
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "#ffffff" }}>
            "Pee Pee Poo Poo!"{" "}
          </p>
          <footer className="blockquote-footer">Aria Gomes</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
