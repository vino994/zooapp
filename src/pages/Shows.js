import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Shows.css";
import dolphin from "../assets/dolfin.jpg";
import birdShow from "../assets/bird-show.jpg";
import nightSafari from "../assets/night-safari.avif";
import "./Animals.css";
export default function Shows() {
  return (
    <div className="shows-page">
      {/* Hero */}
      <section className="shows-hero">
        <div className="overlay">
          <h1 className="shows-title animate-fade">Our Shows</h1>
          <p className="animate-slide">Unforgettable moments, fun, and learning.</p>
        </div>
      </section>

      {/* Shows List */}
      <section className="shows-list py-5">
        <Container>
          <h2 className="text-center mb-5 text-light animate-fade">Highlights</h2>
          <Row className="g-4">
            {[ 
              { src: dolphin, title: "Dolphin Splash", text: "Watch dolphins perform breathtaking tricks." },
              { src: birdShow, title: "Bird Paradise", text: "Experience exotic birds in a flying spectacle." },
              { src: nightSafari, title: "Night Safari", text: "Explore the wild after dark with guides." },
            ].map((show, i) => (
              <Col md={4} key={i}>
                <Card className="show-card animate-up">
                  <Card.Img variant="top" src={show.src} />
                  <Card.Body>
                    <Card.Title>{show.title}</Card.Title>
                    <Card.Text>{show.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="shows-cta py-5 text-center">
        <Container>
          <h2 className="text-light animate-fade">Book Your Show</h2>
          <p className="text-muted animate-slide">Reserve your spot today for an unforgettable experience.</p>
          <button className="btn btn-primary fw-bold px-4 py-2">Book Now</button>
        </Container>
      </section>
    </div>
  );
}
