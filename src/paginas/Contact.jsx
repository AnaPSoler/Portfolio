import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_najqido",
        "template_c13xwdh",
        form.current,
        "fCrGx6CY2fccuNzsQ" 
      )
      .then(
        () => {
          alert("Mensaje enviado correctamente");
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar el mensaje");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <Container className="py-5">
        <h2 className="titulo-seccion text-center mb-4">Contacto</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group controlId="nombre" className="mb-3">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" name="user_name" required />
              </Form.Group>

              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="user_email" required />
              </Form.Group>

              <Form.Group controlId="mensaje" className="mb-3">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={5} name="message" required />
              </Form.Group>

              <div className="text-center">
                <Button variant="primary" type="submit">
                  Enviar
                </Button>
              </div>
            </Form>

            <div className="social-icons mt-5 text-center">
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
              <a href="mailto:anasolerdev@gmail.com">
                <FaEnvelope />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
