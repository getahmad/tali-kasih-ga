import Footer from "./layout/Footer";
import TopMenu from "./layout/TopMenu";
import { Col, Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import ICmedical from "./images/ic_Medical.png";
import ICdisability from "./images/ic_Disability.png";
import ICdisaster from "./images/ic_Disaster.png";
import ICeducation from "./images/ic_Education.png";
import ICenvironvent from "./images/ic_Environment.png";
import IChumanity from "./images/ic_Humanity.png";
import ICreligious from "./images/ic_Religious.png";
import ICsocioprenuer from "./images/ic_Sociopreneur.png";
import "./discover.css";
import CardCampaign from "../components/CardCampaign";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/Loading";
import Cookies from "js-cookie";

const Discover = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const Category = ['disability','medical', 'education', 'religious','humanity','environment','disaster','sociopreneur']

  useEffect(() => {
    setLoading(true);
    const url =
      "http://ec2-54-251-3-103.ap-southeast-1.compute.amazonaws.com/campaigns";
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
        setLoading(false);
      });

  
  }, []);

  return (
    <>
      <TopMenu />
      <Container>
        <Row style={{ paddingTop: "131px" }}>
          <Col>
            <h1 className="subtitle">Find causes you truly care about</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center ">
          <NavLink
            to={`/discover/${Category[0]}`}
            exact={true}
            className="nav-link inactive-nav menu-category "
            activeClassName="active-nav"
          >
            <img className="img-category" src={ICdisability} alt="" />
            <p className="title-category">Disability</p>
          </NavLink>

          <NavLink
            to={`/discover/${Category[1]}`}
            className="nav-link inactive-nav menu-category"
            activeClassName="active-nav"
          >
            <img className="img-category" src={ICmedical} alt="" />
            <p className="title-category">Medical</p>
          </NavLink>

          <NavLink
            to={`/discover/${Category[2]}`}
            className="nav-link inactive-nav menu-category"
            activeClassName="active-nav"
          >
            <img className="img-category" src={ICeducation} alt="" />
            <p className="title-category">Education</p>
          </NavLink>

          <NavLink
            to={`/discover/${Category[3]}`}
            className="nav-link inactive-nav menu-category"
            activeClassName="active-nav"
          >
            <img className="img-category" src={ICreligious} alt="" />
            <p className="title-category">Religious</p>
          </NavLink>

          <NavLink
            to={`/discover/${Category[4]}`}
            className="nav-link inactive-nav menu-category"
            activeClassName="active-nav"
          >
            <img className="img-category" src={IChumanity} alt="" />
            <p className="title-category">Humanity</p>
          </NavLink>

          <NavLink
            to={`/discover/${Category[5]}`}
            className="nav-link inactive-nav menu-category"
            activeClassName="active-nav"
          >
            <img className="img-category" src={ICenvironvent} alt="" />
            <p className="title-category">Environment</p>
          </NavLink>

          <NavLink
            to={`/discover/${Category[6]}`}
            className="nav-link inactive-nav menu-category"
            activeClassName="active-nav"
          >
            <img className="img-category" src={ICdisaster} alt="" />
            <p className="title-category">Disaster</p>
          </NavLink>

          <NavLink
            to={`/discover/${Category[7]}`}
            className="nav-link inactive-nav menu-category"
            activeClassName="active-nav"
          >
            <img className="img-category" src={ICsocioprenuer} alt="" />
            <p className="title-category">Sociopreneur</p>
          </NavLink>
        </Row>
      </Container>

      <Container style={{ marginTop: "119px", marginBottom: "150px" }}>
        <h1 className="title-discover-all">Newest</h1>
        <Row>
          <Col className="d-flex justify-content-center">
            {loading && <Loading type="spokes" color="#1D94A8" />}
            {!loading && <CardCampaign data={data} />}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Discover;
