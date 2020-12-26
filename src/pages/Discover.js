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

const Discover = (props) => {
  const [data, setData] = useState([]);
  const [dataLess, setDataLess] = useState([]);
  const [dataUrgent, setDataUrgent] = useState([]);
  const [dataPopular, setDataPopular] = useState([]);
  const [loading, setLoading] = useState(false);
  const Category = ['Disability','Medical', 'Education', 'Religious','Humanity','Environment','Disaster','Sociopreneur']

  useEffect(() => {
    setLoading(true);
    const url="https://binar8-agus-saputra.nandaworks.com/campaigns"
    axios
      .get(url)
      .then((res) => {
        setData(res.data.reverse());
        setLoading(false);
      });

      const urlDataUrgent="https://binar8-agus-saputra.nandaworks.com/campaigns/urgent"
      axios
      .get(urlDataUrgent)
      .then((res)=>{
        setDataUrgent(res.data)
        setLoading(false);
      })

      const urlDataPopular="https://binar8-agus-saputra.nandaworks.com/campaigns/popular"
      axios
      .get(urlDataPopular)
      .then((res)=>{
        setDataPopular(res.data)
        setLoading(false);
      })

      const urlDataLess="https://binar8-agus-saputra.nandaworks.com/campaigns/less/donate"
      axios
      .get(urlDataLess)
      .then((res)=>{
        setDataLess(res.data)
        setLoading(false);
      })

  
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
            {!loading && <CardCampaign data={data.slice(0,3)} />}
          </Col>
        </Row>

        <h1 className="title-discover-all mt-2">Most Urgent  </h1>
        <Row>
          <Col className="d-flex justify-content-center">
            {loading && <Loading type="spokes" color="#1D94A8" />}
            {!loading && <CardCampaign data={dataUrgent.slice(0,3)} />}
          </Col>
        </Row>

        <h1 className="title-discover-all mt-2">Popular  </h1>
        <Row>
          <Col className="d-flex justify-content-center">
            {loading && <Loading type="spokes" color="#1D94A8" />}
            {!loading && <CardCampaign data={dataPopular.slice(0,3)} />}
          </Col>
        </Row>

        <h1 className="title-discover-all mt-2">Less Donate  </h1>
        <Row>
          <Col className="d-flex justify-content-center">
            {loading && <Loading type="spokes" color="#1D94A8" />}
            {!loading && <CardCampaign data={dataLess.slice(0,3)} />}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Discover;
