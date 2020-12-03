import React, {useEffect, useState } from "react";
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
import axios from "axios";
import Loading from "../components/Loading";

const DiscoverCategory = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    
    const url = "https://5fad36562ec98b0016048033.mockapi.io/allcampaign";
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

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
          <Col className="d-flex justify-content-center">
            {loading && <Loading type="spokes" color="#1D94A8" />}
            {!loading && <CardCampaign data={data} />}
          </Col>
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
