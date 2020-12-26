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

  const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
      { minimumFractionDigits: 0 }
    ).format(money);
 }


  return (
    <div>
      <Row>
        {props.data.map((data) => (
          <>
            <Col lg={4}  style={{ marginBottom: "30px" }}>
              <Link
                to={`/campaign/campaign-detail/${data.campaignId}`}
                className="link-card"
              >
                <Card className="card-style" key={data.campaignId}>
                  <CardImg
                    style={{ maxHeight: "230px", minHeight: "230px",objectFit:"cover" }}
                    top
                    width="100%"
                    src={data.headerPhoto}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <button className="subcategory ">{data.category}</button>
                    <CardTitle className="card-title">{data.title}</CardTitle>
                    <CardSubtitle className="card-subtitle">
                      {data.name}
                    </CardSubtitle>
                    <Progress
                      className="progress-value"
                      value={data.raised}
                      max={data.goal}
                    />
                    <CardText>
                      <Row>
                        <Col>
                          <p className="info-text">Raised</p>
                          <p className="info-amount">
                            IDR {data.raised === null ? 0 : formatRupiah(data.raised)}
                          </p>
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
                            IDR {formatRupiah(data.goal)}
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
