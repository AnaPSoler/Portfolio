import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "./Education.css";
import rolling1 from "../assets/certificates/rolling1.png";
import rolling2 from "../assets/certificates/rolling2.png";
import coderhouse from "../assets/certificates/coderhouse.png";

const Education = () => {
  return (
    <div className="education">
      <Container className="py-5">
        <h2 className="titulo-seccion text-center mb-4">
          Formación Académica & Certificaciones
        </h2>
        <Row className="gy-5 justify-content-center">
          
          <Col md={10} lg={8}>
            <Card className="education-card">
              <Card.Body>
                <Card.Title>Ingeniería en Informática</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Universidad Santo Tomás de Aquino
                </Card.Subtitle>
                <Card.Text>2025 – En curso</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={10} lg={8}>
            <Card className="education-card text-center">
              <Card.Body>
                <Card.Title>Programación Web Full Stack</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  RollingCode School
                </Card.Subtitle>
                <Card.Text>Inicio 2024 – Finalizado en 2025</Card.Text>
                <Image
                  src={rolling1}
                  alt="Certificado RollingCode 1"
                  fluid
                  className="cert-img"
                />
              </Card.Body>
            </Card>
          </Col>

          <Col md={10} lg={8}>
            <Card className="education-card text-center">
              <Card.Body>
                <Card.Title>Desarrollo Web con React</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  RollingCode School
                </Card.Subtitle>
                <Card.Text>Finalizado en 2025</Card.Text>
                <Image
                  src={rolling2}
                  alt="Certificado RollingCode 2"
                  fluid
                  className="cert-img"
                />
              </Card.Body>
            </Card>
          </Col>

          <Col md={10} lg={8}>
            <Card className="education-card text-center">
              <Card.Body>
                <Card.Title>Community Manager</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Coderhouse
                </Card.Subtitle>
                <Card.Text>Finalizado en 2025</Card.Text>
                <Image
                  src={coderhouse}
                  alt="Certificado Coderhouse"
                  fluid
                  className="cert-img"
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Education;
