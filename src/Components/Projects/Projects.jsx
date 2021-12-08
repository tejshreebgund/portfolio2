import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Particle } from "../Home/Particle";
import "./Projects.css";
import sudokologo from "../Assets/S.png";
import Clockifylogo from "../Assets/Internshala.png";
//import Covidlogo from "../Assets/21.png";
//import Travelocitylogo from "../Assets/22.png";
//import Airgaragelogo from "../Assets/23.png";
import { DiReact, DiJavascript, DiGithubBadge, DiHtml5,DiMongodb } from "react-icons/di";
//import { SiRedux, SiStyledComponents, SiMaterialUi } from "react-icons/si";
import { FaLink, FaCss3 } from "react-icons/fa";
export const Projects = () => {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={6} className="project-card">
                        <Card className="project-card-view" style={{ textAlign: "center" }}>
                            <Card.Img variant="top" src={Clockifylogo} alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Internshala Clone
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                INTERNSHALA is a reputed Indian company. A web application to apply for internships
                                and to learn new technologies.Anyone can choose training or internship as their need. 
                                </Card.Text>
                                <div className="Techstacks">
                                   <DiJavascript className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                    <DiMongodb className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    style={{ marginTop: "5%" }}
                                    href="https://github.com/Neha-081/InternshalaClone"
                                    target="_blank"
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://blooming-bastion-29120.herokuapp.com/pages/index.ejs"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="project-card" style={{ textAlign: "center" }}>
                        <Card className="project-card-view">
                            <Card.Img variant="top" src={sudokologo} alt="Clockify Clone" />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: "800" }}>
                                    Seva the food
                                </Card.Title>
                                <Card.Text style={{ textAlign: "justify" }}>
                                This app is build for the people who wants to donate the food. 
                                Built this website in coordination with UI/UX designer.
                                </Card.Text>
                                <div className="Techstacks">
                                    <DiReact className="Techstacks-icons" />
                                    <DiJavascript className="Techstacks-icons" />
                                    <DiMongodb className="Techstacks-icons" />
                                    <FaCss3 className="Techstacks-icons" />
                                    <DiHtml5 className="Techstacks-icons" />
                                </div>
                                <Button
                                    variant="primary"
                                    href="https://github.com/mansisindhu/seva-the-food-sharing-frontend"
                                    target="_blank"
                                    style={{ marginTop: "5%" }}
                                >
                                    {" "}
                                    <DiGithubBadge /> Github
                                </Button>
                                <Button
                                    variant="primary"
                                    style={{ marginLeft: "5%", marginTop: "5%" }}
                                    href="https://seva-the-food-sharing-frontend.vercel.app/"
                                    target="_blank"
                                >
                                    {" "}
                                    <FaLink /> Link
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                                    
                </Row>
            </Container>
        </Container>
    );
};
