import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import imgNotFound from "./images/notfound.png";
import "./NotFoundMustLogin.css";

const NotFoundMustLogin = () => {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(180deg, #F1EDE4 0%, rgba(241, 237, 228, 0) 100%)",
        }}
      >
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
              <img className="img-notfound" src={imgNotFound} alt="" />
            </Col>
            <Col className="align-content-center text-notfound">
              <h1>OOPS!</h1>
              <h2>Page Not Found You Must Login</h2>
              <div className="d-flex justify-content-center  mt-5">
                <Link to="/">
                  <Button
                    style={{
                      backgroundColor: "#A43F3C",
                      color: "white",
                      borderRadius: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    Back To Home
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default NotFoundMustLogin;
