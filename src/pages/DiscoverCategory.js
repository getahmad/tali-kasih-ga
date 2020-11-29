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
import Pagination from "react-js-pagination";
import "./discovercategory.css"

const DiscoverCategory = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  // const [activePage, setActivePage] = useState(1);

  // const handlePageChange = (page) => {
  //   console.log(page);
  //   const urlAPI = `https://5fa4bcd2732de900162e85ef.mockapi.io/api/${page}`;
  //   getData(urlAPI);
  //   setActivePage(page);
  // };

  // const getData = (url) => {
  //   axios
  //     .get(url)
  //     .then((res) => {
  //       const { total, data } = res.data;
  //       setTotal(total);
  //       setData(data);
  //     })
  //     .catch((err) => console.log(err));
  // };

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


        <Row>
          <Col className="d-flex justify-content-end">
            <Pagination
              activePage={1}
              totalItemsCount={10}
              onChange={2}
              itemsCountPerPage={10}
              innerClass="pagination pagination-sm"
              prevPageText="Previous"
              nextPageText="Next"
              itemClass="page-item"
              linkClass="page-link"
            />
          </Col>
        </Row>

      </Container>
      <Footer />
    </>
  );
};

export default DiscoverCategory;
