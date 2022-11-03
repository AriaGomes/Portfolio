import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import ReactTooltip from 'react-tooltip';

function Github() {
  const colourTheme = {
    background: "transparent",
    text: "#ffffff",
    level4: "#960018",
    level3: "#ea3c53",
    level2: "#cd5c5c",
    level1: "#a45a52",
    level0: "#000000",
    tooltip: "<strong>{{count}} contributions</strong> on {{date}}" 
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
      >
      <ReactTooltip html />
      </GitHubCalendar>
      
    </Row>
  );
}

export default Github;
