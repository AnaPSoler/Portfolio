import React from "react";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <BSNavbar expand="lg" className="navbar-custom" fixed="top">
      <Container>
        <BSNavbar.Brand href="/" className="logo">
          Ana Paula Soler
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BSNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
            <NavLink to="/skills" className="nav-link">
              Habilidades
            </NavLink>
            <NavLink to="/proyectos" className="nav-link">
              Proyectos
            </NavLink>
            <NavLink to="/formacion" className="nav-link">
              Formación
            </NavLink>
            <NavLink to="/contacto" className="nav-link">
              Contacto
            </NavLink>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default NavigationBar;
