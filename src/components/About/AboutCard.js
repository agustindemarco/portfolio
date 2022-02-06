import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi Everyone, I am <span className="purple">Agustin Demarco </span>
            from <span className="purple"> Rosario, Argentina. </span>
            <br />
            <br />
            I am System Analist.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
