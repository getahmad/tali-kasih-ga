import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Progress,
} from "reactstrap";
import Medical from "./images/medical.png";
import "./cardcampaign.css";

import { Link } from "react-router-dom";

const CardCampaign = () => {
  return (
    <div>
      <Link to="/campaign/campaign-detail" className="link-card">
        <Card className="card-style">
          <CardImg top width="100%" src={Medical} alt="Card image cap" />
          <CardBody>
            <button className="subcategory ">Medical</button>
            <CardTitle className="card-title">
              Aid for necessary items to help our country
            </CardTitle>
            <CardSubtitle className="card-subtitle">
              Aksi Cepat Tanggap
            </CardSubtitle>
            <Progress className="progress-value" value={75} max={100} />
            <CardText>
              <Row>
                <Col>
                  <p className="info-text">Raised</p>
                  <p className="info-amount">IDR 30.000.000</p>
                </Col>
                <Col>
                  <p style={{ textAlign: "right" }} className="info-text">
                    Goal
                  </p>
                  <p
                    style={{
                      textAlign: "right",
                      fontSize: "14px",
                      color: "black",
                    }}
                  >
                    IDR 50.000.000
                  </p>
                </Col>
              </Row>
            </CardText>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
};

export default CardCampaign;
