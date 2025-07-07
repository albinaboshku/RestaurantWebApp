import React from "react";
import "./footer.css";
import { Container, Col, Row } from "reactstrap";
import fb from "../../../Assests/icons/footer/fb.png";
import insta from "../../../Assests/icons/footer/insta.png";

const footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer" className="footer">
      <Container>
        <Row>
          <Col>
            <div className="storage">
              <a href="#footer">About Us</a>

              <a href="#map">Map</a>
            </div>
          </Col>
          <Col>
            <div className="storage2">
              <a href="https://www.instagram.com/bambo_pizza/">
                <img src={insta} alt="Icon" />
              </a>
              <a href="https://www.facebook.com/Bambo-Pizza-Bar-280897071947445/">
                <img src={fb} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="footer-text">
              Nr. kontakti : 069 4884 550
              <br /> Oraret e disponueshmërisë: Çdo ditë 10:00-22:30 <br />
              Adresa: Rruga e Kavajës, Kompleksi "Delijorgji", Tiranë <br />{" "}
              Porosit në: 069 4884 550, 0424 22 222 <br />
              &copy;
              {currentYear} Ergi Kerci.
              <br />
              <br />
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default footer;
