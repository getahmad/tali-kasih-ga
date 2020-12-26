import React, { useState,useEffect } from "react";
import {
  Col,
  Container,
  Row,
  // Dropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap";
import TopMenu from "./layout/TopMenu";
import Footer from "./layout/Footer";
import CardCampaign from "../components/CardCampaign";
// import ICSort from "./images/ic_sort.png";
import { Link, useParams } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import Axios from "axios";
import Loading from "../components/Loading";


const SearchResult = () => {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const toggle = () => setDropdownOpen((prevState) => !prevState);

  const[data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  let {result} = useParams();
  
  useEffect(() => {
    setLoading(true);
    const url = `https://binar8-agus-saputra.nandaworks.com/campaigns/search?title=${result}`
    Axios
    .get(url)
    .then((res)=>{
      setData(res.data)
      console.log(res.data)
      setLoading(false);
    })
  }, [result])


  return (
    <>
      <TopMenu />
      <Container >
        <h1 className="subtitle" style={{marginTop:"140px", marginBottom:"27px"}}> Result for “{result}”</h1>
        <Link to="/discover" className="d-flex align-items-center link-back">
          <i class="fa fa-long-arrow-left"></i>&nbsp; &nbsp;
          <p style={{ marginTop: "15px" }}>See all categories</p>
        </Link>
      </Container>

      <Container style={{marginTop:"70px"}}>
        <Row>
          {/* <Col>
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
          </Col> */}
        </Row>
        <Row className="mt-5 mb-5">
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

export default SearchResult;
