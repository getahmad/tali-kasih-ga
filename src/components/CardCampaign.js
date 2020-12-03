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
import "./cardcampaign.css";
import { Link } from "react-router-dom";

const CardCampaign = (props) => {

  return (
    <div>
      <Row>
        {props.data.map((data) => (
          <>
            <Col lg={4} xs={6} style={{marginBottom:"30px"}}>
              <Link to="/detail/donate" className="link-card">
                <Card className="card-style">
                  <CardImg
                    style={{maxHeight:"250px"}}
                    top
                    width="100%"
                    src={data.image}
                    alt="Card image cap"
                  />
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
                          <p
                            style={{ textAlign: "right" }}
                            className="info-text"
                          >
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
            </Col>
          </>
        ))}
      </Row>
    </div>
  );
};

export default CardCampaign;
