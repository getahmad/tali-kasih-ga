import { NavLink } from "react-router-dom";
import { Col, Row } from "reactstrap";
import Carousel1 from "./images/carousel1.png";
import Carousel2 from "./images/carousel2.png";
import Carousel3 from "./images/carousel3.png";
import ImgCaoruselMobile from "./images/img-carousel-mobile.png"
import ImgCaoruselMobile2 from "./images/img-carousel-mobile2.png"
import ImgCaoruselMobile3 from "./images/img-carousel-mobile3.png"
import "./CarouselHomepage.css";

const CarouselHomepage = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleCaptions"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
      </ol>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Carousel1} className=" w-100 img-carousel-dekstop" alt="..." />
          <img src={ImgCaoruselMobile} className="w-100 img-carousel-mobile" alt=""/>
          <div className="carousel-caption d-none d-md-block">
            <Row className="d-flex justify-content-start">
              <Col lg={7}>
                <h1>#EducationForEveryone</h1>
                <h2>Proper education is not just a dream</h2>
                <div className="link-carousel d-flex justify-content-start">
                  <NavLink
                    to="/discover"
                    className="nav-link nav-menu nav-donate"
                  >
                    DONATE
                  </NavLink>

                  <NavLink
                    to="/campaign/create"
                    className="nav-link nav-menu nav-campaign"
                  >
                    CREATE CAMPAIGN
                  </NavLink>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Carousel2} className=" w-100 img-carousel-dekstop" alt="..." />
          <img src={ImgCaoruselMobile2} className="w-100 img-carousel-mobile" alt=""/>
          <div className="carousel-caption d-none d-md-block">
            <Row className="d-flex justify-content-start">
              <Col lg={7}>
                <h1>#HealthCareForEveryone</h1>
                <h2>Help them to get speedy recovery</h2>
                <div className="link-carousel d-flex justify-content-start">
                  <NavLink
                    to="/discover"
                    className="nav-link nav-menu nav-donate"
                  >
                    DONATE
                  </NavLink>

                  <NavLink
                    to="/campaign/create"
                    className="nav-link nav-menu nav-campaign"
                  >
                    CREATE CAMPAIGN
                  </NavLink>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Carousel3} className=" w-100 img-carousel-dekstop" alt="..." />
          <img src={ImgCaoruselMobile3} className="w-100 img-carousel-mobile" alt=""/>
          <div className="carousel-caption d-none d-md-block">
            <Row className="d-flex justify-content-start">
              <Col lg={7}>
                <h1>#CleanAirForEveryone</h1>
                <h2>Together to solve enviromental problem</h2>
                <div className="link-carousel d-flex justify-content-start">
                  <NavLink
                    to="/discover"
                    className="nav-link nav-menu nav-donate"
                  >
                    DONATE
                  </NavLink>
                  <NavLink
                    to="/campaign"
                    className="nav-link nav-menu nav-campaign"
                  >
                    CREATE CAMPAIGN
                  </NavLink>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselHomepage;
