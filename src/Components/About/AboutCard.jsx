import React from "react";
import "./About.css";
import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";
export const AboutCard = () => {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple">Tejshree Gund </span>
            from <span className="purple"> Pune, India.</span>
            <br />
             A passionate full-stack developer.
             Interested in <br/>collaborating and building scalable
             web<br/> applications.seeking to develop 
             software<br/> applications in a growing organization
             ,<br/>as well as enhance and develop individual<br/>
              skills as a coder.
<br/>
<br/>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Solving Data Structures
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning Algorithms
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to Music
            </li>
          </ul>
          <br/>
          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
};
