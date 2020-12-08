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
                <Card className="card-style" key={data.campaignId}>
                  <CardImg
                    style={{maxHeight:"250px"}}
                    top
                    width="100%"
                    src={data.headerPhoto}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <button className="subcategory ">{data.category}</button>
                    <CardTitle className="card-title">
                      {data.title}
                    </CardTitle>
                    <CardSubtitle className="card-subtitle">
                      {data.name}
                    </CardSubtitle>
                    <Progress className="progress-value" value={data.raised} max={data.goal} />
                    <CardText>
                      <Row>
                        <Col>
                          <p className="info-text">Raised</p>
                          <p className="info-amount">IDR {data.raised}</p>
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
                            IDR {data.goal}
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
