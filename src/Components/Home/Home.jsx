import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Type } from "./Type";
import homeLogo from "../Assets/laptop.png";
import Tilt from "react-parallax-tilt";
import "./Home.css";
export const Home = () => {
  return (
    <>
        <Container fluid className="home-section" id="home">
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 10 }} className="heading">
                  Hi There! <span className="wave">👋🏻</span>
                </h1>
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> &nbsp;Tejshree Gund</strong>
                </h1>
                <div style={{ padding: 15, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }} className="homeLogo">
              <Tilt>
              <img src={homeLogo} className="img-fluid myImage" alt="laptop" />
            </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
    </>
  );
};
