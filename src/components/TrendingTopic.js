import { Col, Container, Row } from "reactstrap";
import Tranding from "./images/Trending.png";
import Petik from "./images/petik.png";
import Ava from "./images/ava.png";
import "./trendingtopic.css";

const TrandingTopic = () => {
  return (
    <div className="trending">
      <Container>
        <p className="title">Tranding Topic</p>
        <h1 className="subtitle">Clean Water For Country Side Region</h1>
        <Row style={{ marginBottom: "70px" }}>
          <Col lg={7}>
            <img className="img-trending" src={Tranding} alt="" />
          </Col>
          <Col lg={5}>
            <img src={Petik} alt="" />
            <p className="desc-trending"> 
              Id praesent imperdiet lectus scelerisque id. Proin netus amet,
              viverra consequat consequat consectetur dignissim. Erat at
              volutpat et ac. Ullamcorper urna, elementum bibendum donec at
              mauris arcu, quam aenean.
            </p>
            <img className="petik-2" src={Petik} alt="" />
            <Row style={{ marginTop: "80px" }}>
              <Col className="d-flex justify-content-left" lg={2}>
                <img style={{}} src={Ava} alt="" />
              </Col>
              <Col>
                <h1 className="name-user">
                  Dian Endang
                </h1>
                <p className="as-user">Fundraiser</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TrandingTopic;
