import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import "./Navbar.css";

export default function NavbarComponent() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [expanded, setExpanded] = useState(false);

  const handleNavClick = () => setExpanded(false);

  return (
    <Navbar
      expand="lg"
      fixed="top"   // ✅ stays at top
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      className={`px-4 py-2 ${
        isHome
          ? "navbar-dark bg-transparent position-absolute w-100"
          : "navbar-light bg-white shadow-sm"
      }`}
    >
      <Container fluid>
        <Navbar.Brand className={`${isHome ? "text-white" : "text-dark"} fw-bold`}>
          ZOO
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="zoo-navbar-nav" />
        <Navbar.Collapse id="zoo-navbar-nav" className="justify-content-between">
          <Nav className="mx-auto gap-3">
            {["/", "/history", "/animals", "/shows", "/contacts"].map((path, i) => {
              const labels = ["Home", "History", "Animals", "Shows", "Contacts"];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `nav-link custom-link ${isHome ? "home-link" : "page-link"} ${
                      isActive ? "active-link" : ""
                    }`
                  }
                  onClick={handleNavClick} // ✅ auto-close menu
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </Nav>
          <div>
          <a
  href="tel:+919380334317"
  className={`d-flex align-items-center gap-2 px-3 py-2 rounded-pill ${
    isHome ? "text-white border border-light" : "text-dark border border-dark"
  } fw-semibold text-decoration-none`}
  onClick={handleNavClick}
>
  <FaPhoneAlt />
  <span>+91 93803 34317</span>
</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
