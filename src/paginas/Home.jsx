import { Container } from "react-bootstrap";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Container className="text-center py-5">
        <h1 className="titulo-home">Hola, soy Ana Paula Soler 👋</h1>
        <p className="descripcion-home">
          Desarrolladora web full stack con sólida formación en desarrollo
          front-end y back-end, egresada de RollingCode School y estudiante de
          Ingeniería en Informática. Destacada por la creatividad, resolución de
          problemas y capacidad de aprendizaje autónomo. Experiencia en el
          desarrollo de proyectos web aplicando tecnologías modernas como React,
          Node.js y MongoDB. Busco seguir creciendo en el mundo tech creando
          soluciones eficientes y amigables para los usuarios.
        </p>
      </Container>
    </div>
  );
};

export default Home;
