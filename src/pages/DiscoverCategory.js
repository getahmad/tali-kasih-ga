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
import JumbotronCategory from "../components/JumbotronCategory";
import CardCampaign from "../components/CardCampaign";
import ICSort from "./images/ic_sort.png";

const DiscoverCategory = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

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

export default DiscoverCategory;
