import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import "./Animals.css";

import lion from "../assets/lion.jpg";
import panda from "../assets/panda.jpg";
import tiger from "../assets/tiger.jpg";
import birds from "../assets/bird.jpg";
import animalsVideo from "../assets/animals-hero.mp4"; // ✅ make sure file exists

export default function Animals() {
  const animals = [
    { src: lion, title: "Lion", text: "The King of Savannah, strong and majestic." },
    { src: panda, title: "Panda", text: "Gentle bamboo lovers with a playful nature." },
    { src: tiger, title: "Tiger", text: "Powerful predators in our conservation zone." },
    { src: birds, title: "Exotic Birds", text: "Colorful and rare birds from around the world." },
  ];

  return (
    <div className="page-wrapper">
      {/* Hero with video */}
      <section className="hero-section">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={animalsVideo} type="video/mp4" />
        </video>
        <div className="overlay">
          <h1 className="hero-title">Our Animals</h1>
          <p className="hero-subtitle">Explore the wild like never before</p>
        </div>
      </section>

      {/* Gallery with stagger animation */}
      <section className="content-section py-5">
        <Container>
          <h2 className="text-center mb-5">Meet Our Stars</h2>
          <Row className="g-4">
            {animals.map((animal, i) => (
              <Col md={6} lg={3} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2, duration: 0.6 }}
                >
                  <Card className="zoo-card">
                    <Card.Img variant="top" src={animal.src} />
                    <Card.Body>
                      <Card.Title>{animal.title}</Card.Title>
                      <Card.Text>{animal.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA */}
      <section className="cta-section py-5 text-center">
        <Container>
          <h2>Adopt an Animal</h2>
          <p>Support conservation and get closer to your favorite species.</p>
          <button className="btn btn-info fw-bold px-4 py-2">Adopt Now</button>
        </Container>
      </section>
    </div>
  );
}
