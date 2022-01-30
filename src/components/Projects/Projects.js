import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import img1 from "../../Assets/Projects/4.png";
import TSP from "../../Assets/Projects/TSP.png";
import houseprice2 from "../../Assets/Projects/house-price2.png";
import warehouse from "../../Assets/Projects/warehouse.png";
import hair from "../../Assets/Projects/hair.PNG";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={img1}
              isBlog={false}
              title="Voyage into the Unknown"
              description="A semester-long project for the coursework: Intro to AI; where I designed and implemented algorithms, using A* as base and Machine Learning, for different variants of target finding agent in the given gridworld with obstacles, where the agent has no prior knowledge of the environment and learns about it as it traverses along the gridworld."
              link="https://github.com/naishal/Voyage-into-the-Unknown"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TSP}
              isBlog={false}
              title="Travelling Salesman Problem Variations"
              description="Implemented three genetic algorithms: Ant Colony Optimization, Black Hole Optimization, Particle Swarm Optimization; to find a
              polynomial-time solution of an NP-Hard problem and analyzed the space and time complexity along with optimality of the solutions.
              Developed UI for taking user inputs and visualizing the output of resulting suboptimal shortest tour from a starting point traversing all cities."
              link="https://github.com/naishal/TSP-variants"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={houseprice2}
              isBlog={false}
              title="Ames Housing Dataset Analysis and Prediction"
              description="Analyzed and predicted the asset value relating to different features present in the Ames housing Dataset. Performed various analysis techniques to find interesting observations about the data. Also, applied techniques like log-transformation, removing outliers, making models robust against outliers, feature selection, feature engineering, label encoding and modelling to improve the performance of linear regression models on Ames dataset."
              link="https://github.com/naishal/Ames-Housing-Dataset-Analysis-and-Prediction"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hair}
              isBlog={false}
              title="Real Time Hair Detection System"
              description="Trained a Neural Network model (PSP ResNet) using PyTorch to detect hair with over 96% accuracy.
              Designed an application impacting the fashion industry using our trained model which detects the hair of the user in real-time. Users can also
              alter hair color using this application and check results in real-time."
              link="https://github.com/naishal/Hair-detection-and-segmentation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warehouse}
              isBlog={false}
              title="Web Application for Warehouse Management System"
              description="Designed and implemented a full-stack web application that allows the manager to keep track of goods and orders in multiple warehouses, and also customers can check the status of their orders. Designed a separate portal for both managers and customers. Used PostgreSQL to manage our database. Created tables and implemented detailed functionalities like generating Goods Receipt Note and Sales Invoice, managing purchase order and sales order. Implemented account ledger that allows inventory manager to keep track of bills and payments of both purchase and sales scenario."
              link="https://github.com/naishal/Warehouse-Management-System"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
