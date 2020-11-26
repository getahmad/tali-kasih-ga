import { Container, Col, Row } from "reactstrap";
import CardCampaign from "./CardCampaign";
import "./newtopic.css";

const NewTopic = () => {
  return (
    <div>
      <Container>
        <p className="title">New</p>
        <h1 className="subtitle">The latest people who need your help</h1>
        <Row style={{ marginBottom: "70px" }}>
          <Col lg={4} xs={6}>
            <CardCampaign />
          </Col>
          <Col lg={4} xs={6}>
            <CardCampaign />
          </Col>
          <Col lg={4} xs={6}>
            <CardCampaign />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NewTopic;
