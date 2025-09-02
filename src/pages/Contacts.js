import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contacts.css";
import contactVideo from "../assets/contacts-hero.mp4"; // ✅ make sure file exists
import "./Animals.css";
export default function Contacts() {
  return (
    <div className="page-wrapper">
      {/* Hero with video */}
      <section className="hero-section">
        <video autoPlay loop muted playsInline className="hero-video">
          <source src={contactVideo} type="video/mp4" />
        </video>
        <div className="overlay">
          <h1 className="hero-title">Contact Us</h1>
          <p className="hero-subtitle">We’d love to hear from you</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="content-section py-5">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <h3>Get In Touch</h3>
              <p>
                Address: 162 Shop Street, Aranthangi, TN 614616 <br />
                Phone: +91 9380334317 <br />
                Email: info@zooapp.com
              </p>
            </Col>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control type="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control as="textarea" rows={4} placeholder="Your Message" required />
                </Form.Group>
                <Button variant="info" type="submit" className="fw-bold w-100">
                  Send Message
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Google Map */}
      <section className="map-section">
 <iframe
    title="zoo-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31416.842289096443!2d78.98513399959663!3d10.17209684776485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b006c989a22c701%3A0xaf50b6bd7bfb093b!2sAranthangi%2C%20Tamil%20Nadu%20614616!5e0!3m2!1sen!2sin!4v1756814593597!5m2!1sen!2sin"
    width="100%"
    height="400"
    style={{ border: 0 }}    // ✅ Correct JSX
    allowFullScreen          // ✅ No quotes in JSX
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
      </section>
    </div>
  );
}
