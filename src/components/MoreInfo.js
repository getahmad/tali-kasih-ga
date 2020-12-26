import { Col, Container, Row } from "reactstrap";
import ImgInfo from "./images/img-infolain.png";
import MobileStore from "./images/mobile-store.png";
import "./moreinfo.css";

const MoreInfo = () => {
  return (
    <div className="more-info">
      <Container>
        <h1 className="subtitle">Spread kindness anytime, anywhere</h1>
        <Row style={{ paddingBottom: "70px" }}>
          <Col lg={7}>
            <img style={{ width: "100%" }} src={ImgInfo} alt="" />
          </Col>
          <Col lg={5}>
            <h1 className="subtitle" style={{ marginTop: "106px" }}>
              &nbsp; &nbsp;Available now
            </h1>
            <img src={MobileStore} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MoreInfo;
