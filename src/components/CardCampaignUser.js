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
  
  const CardCampaignUser = (props) => {
    return (
      <div>
        <Row>
          {props.data.map((data) => (
            <>
              <Col lg={6} xs={6} style={{ marginBottom: "30px" }}>
                <Link
                  to={`/campaign/campaign-detail/${data.campaignId}`}
                  className="link-card"
                >
                  <Card className="card-style" key={data.campaignId}>
                    <CardImg
                      style={{ maxHeight: "250px", minHeight: "230px" ,objectFit:"cover" }}
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
                              IDR {data.raised === null ? 0 : data.raised}
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
  
  export default CardCampaignUser;
  