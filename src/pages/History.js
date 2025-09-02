import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./History.css";
import zooOld from "../assets/zoo-old.jpg";  // 🔹 old zoo photo
import zooNew from "../assets/zoo-new.jpg";  // 🔹 new modern zoo photo
import missionImg from "../assets/zoo-1.webp"; // 🔹 mission/vision photo
import "./Animals.css";
export default function History() {
  return (
    <div className="history-page">
      {/* Hero Section */}
      <section className="history-hero">
        <div className="overlay">
          <h1 className="history-title">Our History</h1>
          <p className="history-subtitle">
            From humble beginnings to a world-class wildlife destination.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="history-timeline py-5">
        <Container>
          <h2 className="text-center mb-5">Journey Through Time</h2>
          <Row className="g-4">
            <Col md={6}>
              <Card className="timeline-card">
                <Card.Img variant="top" src={zooOld} />
                <Card.Body>
                  <Card.Title>1960 – The Beginning</Card.Title>
                  <Card.Text>
                    Our zoo was founded in 1960 with a mission to protect rare
                    species and provide a safe home for rescued animals. It
                    started as a small sanctuary with only 50 animals.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="timeline-card">
                <Card.Img variant="top" src={zooNew} />
                <Card.Body>
                  <Card.Title>1990 – Expansion</Card.Title>
                  <Card.Text>
                    By the 1990s, the zoo grew into a landmark attraction with
                    themed zones such as Savannah, Tropical Forest, and Bird
                    Paradise, welcoming thousands of visitors annually.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="timeline-card">
                <Card.Img variant="top" src={missionImg} />
                <Card.Body>
                  <Card.Title>2010 – Conservation Efforts</Card.Title>
                  <Card.Text>
                    We launched dedicated programs for wildlife conservation and
                    partnered with international organizations to protect
                    endangered species like tigers, pandas, and exotic birds.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="timeline-card">
                <Card.Img variant="top" src={zooNew} />
                <Card.Body>
                  <Card.Title>2025 – Present Day</Card.Title>
                  <Card.Text>
                    Today, our zoo is home to more than 500 species, offering
                    interactive shows, educational programs, and eco-friendly
                    experiences for families and researchers alike.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="history-mission py-5 text-center text-white">
        <Container>
          <h2>Our Mission & Vision</h2>
          <p className="mt-3">
            We believe in inspiring people to love and protect wildlife. Our
            mission is to create unforgettable experiences while educating the
            public about the importance of conservation and sustainability.
          </p>
        </Container>
      </section>

      {/* Call To Action */}
      <section className="history-cta py-5 text-center">
        <Container>
          <h2>Visit Us Today</h2>
          <p>
            Explore the magic of wildlife, experience unique animal shows, and
            be part of our conservation journey.
          </p>
          <button className="btn btn-info fw-bold">Buy Ticket</button>
        </Container>
      </section>
    </div>
  );
}
