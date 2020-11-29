import React, { useState } from "react";
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
import CardCampaign from "../components/CardCampaign";
import ICSort from "./images/ic_sort.png";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

const SearchResult = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <>
      <TopMenu />
      <Container >
        <h1 className="subtitle" style={{marginTop:"140px", marginBottom:"27px"}}> Result for “medical help”</h1>
        <Link to="/discover" className="d-flex align-items-center link-back">
          <i class="fa fa-long-arrow-left"></i>&nbsp; &nbsp;
          <p style={{ marginTop: "15px" }}>See all categories</p>
        </Link>
      </Container>

      <Container style={{marginTop:"70px"}}>
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
                <DropdownItem>Newest</DropdownItem>
                <DropdownItem>Most urgent</DropdownItem>
                <DropdownItem>Popular</DropdownItem>
                <DropdownItem>Less donation</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <CardCampaign />
          </Col>
          <Col>
            <CardCampaign />
          </Col>
          <Col>
            <CardCampaign />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SearchResult;
