import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import companyLogo1 from '../assets/img/infosys-logo-PNG.png';
import companyLogo2 from '../assets/img/infosys-logo-PNG.png'
export const Experience = () => {
  return (
    <section className="experience" id="experience">
      <Container>
        <h2 className="experience-heading">Experience</h2>
        <Row>
          <Col md={6}>
            
          </Col>
          <Col md={6}>
            <div className="experience-item1">
              <img className="experience-logo" src={companyLogo2} alt="Company Logo" />
              <h3 className="experience-title">React Developer</h3>
              <p className="experience-company">Infosys</p>
              <p className="experience-dates">July 2022 - Nov 2022</p>
              <ul className="experience-details">
                <li className="experience-detail"> Analyzed new feature requests, translated them into efficient technical designs, coordinated the implementation process, effectively distributed tasks among the team, and maintained elegant and reusable code, following SOLID design principles and Agile practices.</li>
                <li className="experience-detail"> Developed multiple dynamic and browser compatible pages using HTML5, CSS3, JavaScript (React, Redux).</li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
