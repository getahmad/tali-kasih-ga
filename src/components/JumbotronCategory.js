// import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import ImgDiscCategory from "./images/discover-category.png";
import "font-awesome/css/font-awesome.min.css";
import "./jumbotroncategory.css";

const JumbotronCategory = (props) => {

  let {category} = useParams();
  return (
    <div style={{ marginTop: "70px" }}>
      <Jumbotron
        style={{
          background:
            "linear-gradient(180deg, #FAF8F3 0%, rgba(250, 248, 243, 0) 100%)",
        }}
      >
        <Container>
          <Row>
            <Col lg={8}>
              <button className="subcategory" style={{ marginTop: "70px" }}>
                {category}
              </button>
              <h1 className="subtitle">Your little kindness is precious</h1>
              <Link
                to="/discover"
                className="d-flex align-items-center link-back"
              >
                <i class="fa fa-long-arrow-left"></i>
                &nbsp; &nbsp;
                <p style={{ marginTop: "15px" }}>See all categories</p>
              </Link>
            </Col>
            <Col>
              <img src={ImgDiscCategory} style={{ width: "100%" }} alt="" />
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronCategory;
