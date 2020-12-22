import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TopMenu from "./layout/TopMenu";
import Footer from "./layout/Footer";
import JumbotronCategory from "../components/JumbotronCategory";
import CardCampaign from "../components/CardCampaign";
import ICSort from "./images/ic_sort.png";
import "./discovercategory.css";
import axios from "axios";
import Loading from "../components/Loading";
import { useParams } from "react-router-dom";

const DiscoverCategory = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let { category } = useParams();

  useEffect(() => {
    setLoading(true);
    const url = `https://binar8-agus-saputra.nandaworks.com/campaigns/category?category=${category}`;
    axios.get(url).then((res) => {
      setData(res.data.reverse());
      setLoading(false);
    });
  }, [category]);

  const sortNewest = (e) => {
    const url = `https://binar8-agus-saputra.nandaworks.com/campaigns/category?category=${category}`;
    axios.get(url).then((res) => {
      setData(res.data.reverse());
      setLoading(false);
    });
  };

  const sortUrgent = (e) => {
    e.preventDefault();
    const urlDataUrgent="https://binar8-agus-saputra.nandaworks.com/campaigns/urgent/more"
    axios.get(urlDataUrgent).then((res) => {
      setData(res.data.filter((data) => data.category === category));
    });
  };
  const sortLessDonate = (e) => {
    e.preventDefault();
    const urlDataLess ="https://binar8-agus-saputra.nandaworks.com/campaigns/less/donate/more"
    axios.get(urlDataLess).then((res) => {
      setData(res.data.filter((data) => data.category === category));
    });
  };
  const sortPopular = (e) => {
    e.preventDefault();
    const urlDataPupular="https://binar8-agus-saputra.nandaworks.com/campaigns/popular/more"
    axios.get(urlDataPupular).then((res) => {
      setData(res.data.filter((data) => data.category === category));
    });
  };

  return (
    <>
      <TopMenu />
      <JumbotronCategory />
      <Container>
        <Row>
          <Col>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                style={{
                  backgroundColor: "white",
                  color: "black",
                  border: "none",
                }}
              >
                Sort &nbsp; &nbsp;
                <img src={ICSort} alt="" />
              </DropdownToggle>
              <DropdownMenu
                style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.1)" }}
              >
                <DropdownItem onClick={sortNewest}>Newest</DropdownItem>
                <DropdownItem onClick={sortUrgent}>Most urgent</DropdownItem>
                <DropdownItem onClick={sortPopular}>Popular</DropdownItem>
                <DropdownItem onClick={sortLessDonate}>
                  Less donation
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>

        <Row className="mt-5 mb-5">
          <Col className="d-flex justify-content-center ">
            {loading && <Loading type="spokes" color="#1D94A8" />}
            {!loading && <CardCampaign data={data} />}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default DiscoverCategory;
