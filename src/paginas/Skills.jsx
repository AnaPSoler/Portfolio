
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <Container className="py-5">
        <h2 className="titulo-seccion text-center mb-4">
          Skills Técnicas & Blandas
        </h2>
        <Row className="gy-4">
          <Col md={6}>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>Lenguajes</Card.Title>
                <Card.Text>HTML5, CSS3, JavaScript (ES6+)</Card.Text>
              </Card.Body>
            </Card>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>Frameworks & Librerías</Card.Title>
                <Card.Text>React.js, Node.js, Express.js, Bootstrap</Card.Text>
              </Card.Body>
            </Card>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>Bases de Datos</Card.Title>
                <Card.Text>MongoDB</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>Herramientas</Card.Title>
                <Card.Text>Git, GitHub, Vite, Postman</Card.Text>
              </Card.Body>
            </Card>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>Diseño y UX/UI</Card.Title>
                <Card.Text>Responsive Design, APIs REST</Card.Text>
              </Card.Body>
            </Card>
            <Card className="skill-card">
              <Card.Body>
                <Card.Title>Habilidades Blandas</Card.Title>
                <Card.Text>
                  Creatividad e innovación
                  <br />
                  Resolución de problemas
                  <br />
                  Trabajo en equipo
                  <br />
                  Adaptabilidad al cambio
                  <br />
                  Aprendizaje autónomo
                  <br />
                  Comunicación efectiva
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
