import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
//import logo from "../Assets/Pslogo.png";
import "./Navbar.css";

import { CgFileDocument } from "react-icons/cg";

import {
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
    AiOutlineContacts
} from "react-icons/ai";

export const Navbarjsx = () => {
    const [expand, setexpand] = React.useState(false);
    const [navColour, setnavColour] = React.useState(false);
    const [pathstate, setpathstate] = React.useState("#home");
    function Scrollhandler() {
        if (window.scrollY >= 20) {
            setnavColour(true);
        } else {
            setnavColour(false);
        }
    }

    React.useEffect(() => {
        if (pathstate === "#resume") {
            const element = document.getElementById("resumelink");
            element.click();
        } else {
            const element = document.getElementById(pathstate);
            if (element) {
                element.scrollIntoView();
            }
        }
    }, [pathstate]);
    window.addEventListener("scroll", Scrollhandler);
    return (
        <Navbar
            expanded={expand}
            fixed="top"
            expand="md"
            className={navColour ? "sticky" : "navbar"}
        >
            <Container>
                <Navbar.Brand href="#home">
                    <span></span>
                    <span></span>
                    <span></span>
                   <b> Tejshree</b>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    onClick={() => setexpand(expand ? false : "expanded")}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto" defaultActiveKey="#home">
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/"
                                onClick={(() => setexpand(false),() => setpathstate("#home"))}
                            >
                                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/about"
                                onClick={(() => setexpand(false), () => setpathstate("#about"))}
                            >
                                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/projects"
                                onClick={
                                    (() => setexpand(false), () => setpathstate("#projects"))
                                }
                            >
                                <AiOutlineFundProjectionScreen
                                    style={{ marginBottom: "2px" }}
                                />{" "}
                                Projects
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/contact"
                                onClick={
                                    (() => setexpand(false), () => setpathstate("#contact"))
                                }
                            >
                                <AiOutlineContacts style={{ marginBottom: "2px" }} /> Contact
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/resume"
                                onClick={
                                    (() => setexpand(false), () => setpathstate("#resume"))
                                }
                            >
                                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
