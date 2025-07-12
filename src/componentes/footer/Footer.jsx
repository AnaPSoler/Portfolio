import React from "react";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-4">
      <Container className="text-center">
        <div className="footer-icons mb-2">
          <a
            href="https://www.linkedin.com/in/ana-paula-soler/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/AnaPSoler"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/anapaulasoler711/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/ana.paula.soler.104412?locale=es_LA"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
        <p className="footer-text mb-0">
          © {new Date().getFullYear()} Ana Paula Soler. Todos los derechos
          reservados.
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
