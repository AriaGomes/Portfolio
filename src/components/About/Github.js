import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#cd5c5c",
    grade3: "#960018",
    grade2: "#a45a52",
    grade1: "#ea3c53",
    grade0: "#000000",
  };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
       My <strong className="red">Github</strong> Calendar 
      </h1>
      <GitHubCalendar
        username="AriaGomes"
        blockSize={15}
        blockMargin={5}
        theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
