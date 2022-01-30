import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import About from "./About";
import Home from"./Home";

function Main() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Home />
        <About />
      </Container>
      
    </section>
  );
}

export default Main;
