import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight, FaPlay, FaTimes, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./ZooSlider.css";

import img1 from "./assets/1.jpg";
import img2 from "./assets/11.jpg";
import img3 from "./assets/111.jpg";
import img4 from "./assets/tiger.jpg";
import video1 from "./assets/zoo1.mp4";
import video2 from "./assets/dear.mp4";
import video3 from "./assets/zoo3.mp4";
import video4 from "./assets/zoo4.mp4";

const slides = [
  {
    name: "ZOO",
    title: "MAGICAL",
    img: img1,
    video: video1,
    stats: [
      { value: "150", label: "Rare animals" },
      { value: "10", label: "Shows every day" },
      { value: "4", label: "Thematic zones" },
      { value: "1", label: "Ticket for only $10" },
    ],
  },
  {
    name: "LION",
    title: "KING OF THE SAVANNAH",
    img: img2,
    video: video3,
    stats: [
      { value: "200", label: "Savannah animals" },
      { value: "8", label: "Predator shows" },
      { value: "6", label: "Huge enclosures" },
      { value: "1", label: "VIP tours available" },
    ],
  },
  {
    name: "PANDA",
    title: "CUTE BEAR",
    img: img3,
    video: video2,
    stats: [
      { value: "100", label: "Bamboo trees" },
      { value: "5", label: "Pandas in the zoo" },
      { value: "3", label: "Panda shows daily" },
      { value: "1", label: "Exclusive tours" },
    ],
  },
  {
    name: "TIGER",
    title: "POWERFUL PREDATOR",
    img: img4,
    video: video4,
    stats: [
      { value: "120", label: "Tigers in the wild" },
      { value: "6", label: "Exhibitions" },
      { value: "3", label: "Conservation programs" },
      { value: "1", label: "Guided tour" },
    ],
  },
];

export default function ZooSlider() {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setShowVideo(false);
  };

  const slide = slides[current];

  return (
    <section className="zoo-slider text-white">
      {/* Background */}
      {showVideo ? (
        <video className="zoo-video" src={slide.video} autoPlay loop muted></video>
      ) : (
        <div className="zoo-background" style={{ backgroundImage: `url(${slide.img})` }}></div>
      )}

      {/* Left vertical bar */}
      <div className="left-bar">
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
        <div className="slide-info">
          <span>0{current + 1} / 0{slides.length}</span>
          <div className="vertical-line"></div>
        </div>
      </div>

      {/* Centered content */}
      <div className="slider-content">
        <h2 className="zoo-subtitle">{slide.name}</h2>
        <h1 className="zoo-title">{slide.title}</h1>
        <div className="d-flex gap-3 mt-3">
          <Button variant="info" className="fw-bold zoom-btn">
            Buy Ticket
          </Button>
          {showVideo ? (
            <Button variant="danger" className="zoom-btn" onClick={() => setShowVideo(false)}>
              <FaTimes className="me-2" />
              Close Video
            </Button>
          ) : (
            <Button variant="outline-light zoom-btn" onClick={() => setShowVideo(true)}>
              <FaPlay className="me-2" />
              Watch Video
            </Button>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="zoo-bottom">
        <div className="zoo-stats">
          {slide.stats.map((stat, index) => (
            <div key={index} className="stat-box">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="bottom-arrows">
          <h6 className="move">Move</h6>
          <button className="arrow blue" onClick={handleNext}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
