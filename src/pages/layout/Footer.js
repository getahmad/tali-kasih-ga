import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer ">
        <Container> 
        <Row className="row-footer">
          <Col lg={6}>
            <div>
              <img className="logo-brand" src={Logo} alt="" />
            </div>
          </Col>
          <Col lg={2} xs={4}>
              <Link to="/" className="title-footer">FUNDRAISE FOR</Link><br/>
              <Link to="/" className="list-footer">Education</Link><br/>
              <Link to="/" className="list-footer">Disabilities</Link><br/>
              <Link to="/" className="list-footer">Hospital Bills</Link><br/>
              <Link to="/" className="list-footer">Religious</Link>
          </Col>
          <Col lg={2} xs={4}>
              <Link to="/" className="title-footer">LEARN MORE</Link><br/>
              <Link to="/" className="list-footer">How we can help</Link><br/>
              <Link to="/" className="list-footer">FAQ</Link><br/>
              <Link to="/" className="list-footer">Blog</Link>
          </Col>
          <Col lg={2} xs={4}>
              <Link to="/" className="title-footer">RESOURCES</Link><br/>
              <Link to="/" className="list-footer">Contact Us</Link><br/>
              <Link to="/" className="list-footer">About</Link><br/>
              <Link to="/" className="list-footer">Careers</Link>
          </Col>
        </Row>        
      </Container>
      <hr/>
       <Container>
       <Row>            
           <Col lg={12}>
             <p style={{fontSize:"12px"}}>TaliKasih © 2020. All rights reserved </p>
           </Col>
        </Row>
       </Container>
    </div>
  );
};

export default Footer;
