import { Col, Container, Row } from "reactstrap";
import Petik from "./images/petik.png";
import Ava from "./images/ava.png";
import "./trendingtopic.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const TrendingTopic = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const url = "https://binar8-agus-saputra.nandaworks.com/campaigns/popular";
    Axios.get(url).then((res) => {
      setData(res.data.slice(0, 1)[0]);
      setLoading(false);
    });
  }, []);

  return (
    <div className="trending">
      <Container>
        <p className="title">Trending Topic</p>
        {loading && (
          <Row className="d-flex justify-content-center">
            <Loading type="spokes" color="#1D94A8" />
          </Row>
        )}
        {!loading && (
          <div>
            <Link to={`/campaign/campaign-detail/${data.campaignId}`} style={{ textDecoration: "none" }}>
              <h1 className="subtitle">{data.title}</h1>
            </Link>
            <Row style={{ marginBottom: "70px" }}>
              <Col lg={7}>
                <Link to={`/campaign/campaign-detail/${data.campaignId}`}>
                  <img className="img-trending" src={data.headerPhoto} alt="" />
                </Link>
              </Col>
              <Col lg={5}>
                <img src={Petik} alt="" />
                <p className="desc-trending">
                  Let's help each other to reach heaven. Don't even knock other
                  people down when you are victorious. On the contrary, take
                  their hands and help those who are falling when you are
                  victorious.
                </p>
                <img className="petik-2" src={Petik} alt="" />
                <Row style={{ marginTop: "80px" }}>
                  <Col lg={3} xs={3}>
                    <img style={{ width: "100%" }} src={Ava} alt="" />
                  </Col>
                  <Col lg={9} xs={9}>
                    <h1 className="name-user">{data.name}</h1>
                    <p className="as-user">Fundraiser</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </Container>
    </div>
  );
};

export default TrendingTopic;
