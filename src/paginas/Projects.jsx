import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <Container className="py-5">
        <h2 className="titulo-seccion text-center mb-4">Proyectos</h2>
        <Row className="justify-content-center">
          {/* Patitas Felices */}
          <Col md={10} lg={8}>
            <Card className="project-card mb-4">
              <Card.Body>
                <Card.Title>Patitas Felices</Card.Title>
                <Card.Text>
                  Patitas Felices es una clínica veterinaria que ofrece
                  servicios médicos para mascotas, destacando consultas
                  generales, emergencias, cirugías, vacunación y esterilización.
                  La web incluye un listado detallado de tratamientos,
                  formulario de contacto, ubicación, y un diseño intuitivo con
                  imágenes y testimonios. Su objetivo es conectar a dueños de
                  mascotas con profesionales veterinarios, combinando atención
                  médica con venta de productos.
                </Card.Text>
                <div className="project-links">
                  <Button
                    variant="outline-primary"
                    href="https://patitas-felices-ten.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Sitio
                  </Button>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/AnaPSoler/PatitasFelices"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Front
                  </Button>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/AnaPSoler/Patitas-Felices-Backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Back
                  </Button>
                </div>
                <p className="tech-stack mt-3">
                  <strong>Tecnologías:</strong> HTML, CSS, JavaScript, React,
                  Vite, Node.js, Express.js, Postman, MongoDB
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Algorithm */}
          <Col md={10} lg={8}>
            <Card className="project-card mb-4">
              <Card.Body>
                <Card.Title>Algorithm</Card.Title>
                <Card.Text>
                  Sitio educativo interactivo sobre algoritmos. Está diseñado
                  para que estudiantes puedan visualizar y comprender el
                  funcionamiento de distintos tipos de algoritmos a través de
                  una interfaz clara y amigable.
                </Card.Text>
                <div className="project-links">
                  <Button
                    variant="outline-primary"
                    href="https://algorithmg3.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Sitio
                  </Button>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/Miskevish/Algoritmos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                </div>
                <p className="tech-stack mt-3">
                  <strong>Tecnologías:</strong> HTML, CSS, JavaScript, React,
                  Vite
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* HardTech */}
          <Col md={10} lg={8}>
            <Card className="project-card mb-4">
              <Card.Body>
                <Card.Title>HardTech</Card.Title>
                <Card.Text>
                  Plataforma informativa sobre hardware y gaming. Ofrece
                  contenido sobre componentes, lanzamientos, y consejos para
                  entusiastas del mundo gamer y tecnológico, con diseño moderno
                  y responsive.
                </Card.Text>
                <div className="project-links">
                  <Button
                    variant="outline-primary"
                    href="https://hardtech2.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Sitio
                  </Button>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/Miskevish/HardTech-Fron-End"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                </div>
                <p className="tech-stack mt-3">
                  <strong>Tecnologías:</strong> HTML, CSS, JavaScript, React,
                  Vite
                </p>
              </Card.Body>
            </Card>
          </Col>

          {/* Checkpoint Blog */}
          <Col md={10} lg={8}>
            <Card className="project-card mb-4">
              <Card.Body>
                <Card.Title>Checkpoint Blog</Card.Title>
                <Card.Text>
                  Blog temático sobre programación, tecnología y videojuegos.
                  Desarrollado con HTML y CSS, ofrece artículos y contenido de
                  interés para entusiastas tech y gamers, con diseño adaptable a
                  diferentes dispositivos.
                </Card.Text>
                <div className="project-links">
                  <Button
                    variant="outline-primary"
                    href="https://checkpointblog.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ver Sitio
                  </Button>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/AnaPSoler/Checkpoint-Blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </Button>
                </div>
                <p className="tech-stack mt-3">
                  <strong>Tecnologías:</strong> HTML, CSS
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
