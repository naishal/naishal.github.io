import React from "react";
import Card from "react-bootstrap/Card";
import { GiForkKnifeSpoon, GiGamepad, GiTv } from "react-icons/gi";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Naishal Patel </span>
            and I am a<span className="purple"> Software Developer </span>
            currently pursuing Masters in Computer Science at <span className="purple">Rutgers University</span>, New Jersey, USA.
            <br />
            <br />
            I am passionate about Software Development and 
            <br />Machine Learning; and I also love to:
          </p>
          <ul>
            <li className="about-activity">
              <GiGamepad /> Play Games
            </li>
            <li className="about-activity">
              <GiTv /> Watch Comic Series
            </li>
            <li className="about-activity">
              <GiForkKnifeSpoon /> Cooking and Eating delicious food
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
