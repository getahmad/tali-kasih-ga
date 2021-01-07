import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardText,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardBody,
  Progress,
  Row,
  Col,
} from "reactstrap";
import Cookies from "js-cookie";

const CampaignDetailRelatedCampaign = () => {
  let { campaignId } = useParams();
  const [relatedCampaign, setRelatedCampaign] = useState([]);
  useEffect(() => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/campaigns?campaigns.id=${campaignId}`
    ).then((response) => {
      // console.log(response.data);
      Cookies.set(`category`, response.data[0].category);
      getRelatedCampaign();
    });
  }, [campaignId]);

  const getRelatedCampaign = () => {
    Axios.get(
      `https://binar8-agus-saputra.nandaworks.com/campaigns/category?category=${Cookies.get(
        `category`
      )}`
    ).then((response) => {
      // console.log(response.data);
      setRelatedCampaign(response.data);
    });
  };

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(
      money
    );
  };
  return (
    <div className="related-campaign background-biru-related py-5 px-3">
      <div className="container">
        <div className="title mt-3">Related Campaign</div>
        <div className="row">
          {relatedCampaign.slice(0, 3).map((campaignRelated) => (
            <div className="col-lg-4 mb-4" key={campaignRelated.campaignId}>
              <Link
                to={`/campaign/campaign-detail/${campaignRelated.campaignId}`}
                className="link-card"
              >
                <Card className="card-style">
                  <CardImg
                    top
                    width="100%"
                    src={campaignRelated.headerPhoto}
                    alt="Card image cap"
                    style={{
                      maxHeight: "230px",
                      minHeight: "230px",
                      objectFit: "cover",
                    }}
                  />
                  <CardBody>
                    <button className="subcategory ">
                      {campaignRelated.category}
                    </button>
                    <CardTitle className="card-title">
                      {campaignRelated.title}
                    </CardTitle>
                    <CardSubtitle className="card-subtitle">
                      {campaignRelated.name}
                    </CardSubtitle>
                    <Progress
                      className="progress-value"
                      value={campaignRelated.raised}
                      max={campaignRelated.goal}
                    />
                    <CardText>
                      <Row>
                        <Col>
                          <p className="info-text">Raised</p>
                          <p className="info-amount">
                            IDR {formatRupiah(campaignRelated.raised)}
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
                            IDR {formatRupiah(campaignRelated.goal)}
                          </p>
                        </Col>
                      </Row>
                    </CardText>
                  </CardBody>
                </Card>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailRelatedCampaign;
