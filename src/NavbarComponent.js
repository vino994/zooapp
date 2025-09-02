import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function NavbarComponent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <Navbar
      expand="lg"
      fixed="top"
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
                >
                  {labels[i]}
                </NavLink>
              );
            })}
          </Nav>
          <div>
            <a
              href="tel:+919380334317"
              className={`${isHome ? "text-white" : "text-dark"} fw-semibold`}
            >
              📞 9380334317
            </a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
