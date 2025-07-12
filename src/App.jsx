import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./componentes/navbar/Navbar";
import Footer from "./componentes/footer/Footer";
import Home from "./paginas/Home";
import Skills from "./paginas/Skills";
import Projects from "./paginas/Projects";
import Education from "./paginas/Education";
import Contact from "./paginas/Contact";

function App() {
  return (
    <Router>
      <NavigationBar />
      <main style={{ paddingTop: "90px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/formacion" element={<Education />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
