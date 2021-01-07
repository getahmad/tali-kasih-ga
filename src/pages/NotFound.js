import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import imgNotFound from "./images/notfound.png";

const NotFound = () => {
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
              {" "}
              <img src={imgNotFound} alt="" style={{ height: "500px" }} />
            </Col>
            <Col className="align-content-center">
              <h1
                style={{
                  fontSize: "200px",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "50px",
                }}
              >
                OOPS!
              </h1>
              <h2
                style={{
                  fontSize: "50px",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Page Not Found
              </h2>
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

export default NotFound;
