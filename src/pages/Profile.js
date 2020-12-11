import {
  Col,
  Container,
  Form,
  FormGroup,
  Row,
  Input,
  Label,
  Card,
  Button,
} from "reactstrap";
import Footer from "./layout/Footer";
import TopMenu from "./layout/TopMenu";
import imgProfile from "./images/profile.png";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./profile.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Loading from "../components/Loading";
import CardCampaign from "../components/CardCampaign";

const Profile = (props) => {
  // const name = Cookies.get("name");
  // const email = Cookies.get("email");
  const bankName = Cookies.get("bankName");
  const bankNumber = Cookies.get("bankNumber");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataUser, setDataUser]= useState([])

  useEffect(() => {
    setLoading(true);
    const url = "https://binar8-agus-saputra.nandaworks.com/campaigns/user";
    Axios.get(url, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });

    const urlDataUser = "https://binar8-agus-saputra.nandaworks.com/users";
    Axios.get(urlDataUser, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      Cookies.set("name", res.data[0].name);
      setDataUser(res.data[0]);
      console.log(res.data);
      setLoading(false);
    });




    // const urlGetBank = "https://binar8-agus-saputra.nandaworks.com/bank/info";
    // Axios.get(urlGetBank, {
    //   headers: {
    //     Authorization: `Bearer ${Cookies.get("token")}`,
    //   },
    // }).then((res) => {
    //   setData(res.data);
    //   Cookies.set("bankName", res.data.bankName);
    //   Cookies.set("bankNumber", res.data.bankNumber);
    //   console.log(res.data);
    // });
  }, []);

  return (
    <>
      <TopMenu />
      <Container style={{ marginTop: "80px" }}>
        <div className="border-container">
          <div style={{ margin: "30px" }}>
            <Row>
              <Col lg={6} className="d-flex justify-content-start">
                <h3 className="style-profile-title">My Profile</h3>
              </Col>
              <Col lg={6} className="d-flex justify-content-end">
                <Link to="/logout" className="style-logout">
                  Logout
                </Link>
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <img src={imgProfile} alt="" />
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                <Link to="/profile/edit" className="style-edit-profile">
                  Edit Profile
                </Link>
              </Col>
            </Row>

            <Form>
              <Row style={{ marginTop: "40px" }}>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Name</Label>
                    <Input
                      disabled
                      style={{ borderBottom: "none" }}
                      value={dataUser.name}
                    />
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Email</Label>
                    <Input
                      disabled
                      style={{ borderBottom: "none" }}
                      value={dataUser.email}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Bank Info</Label>
                    <Input
                      disabled
                      style={{ borderBottom: "none" }}
                      value={`${bankName}-${bankNumber}`}
                    />
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </div>

        <div className="border-container" style={{ marginTop: "70px" }}>
          <div style={{ margin: "30px" }}>
            <h3 className="style-profile-title">My Donations (23)</h3>
            <Row>
              <Col lg={6}>
                <Card className="card-donate" style={{ marginTop: "30px" }}>
                  <div style={{ margin: "20px" }}>
                    <p className="time-donate">12 minutes ago</p>
                    <p className="title-donate">
                      Aid for necessary items to help our country
                    </p>
                    <h1 className="amount-donate">Rp. 320.000</h1>
                    <p className="story-donate">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis nunc pellentesque enim ultrices nunc. Pretium massa,
                      vel viverra id mi sed sit. In faucibus leo etiam cras elit
                      malesuada augue. In faucibus leo etiam cras elit malesuada
                      augue “
                    </p>
                  </div>
                </Card>
              </Col>
              <Col lg={6} style={{ marginTop: "30px" }}>
                <Card className="card-donate">
                  <div style={{ margin: "20px" }}>
                    <p className="time-donate">12 minutes ago</p>
                    <p className="title-donate">
                      Aid for necessary items to help our country
                    </p>
                    <h1 className="amount-donate">Rp. 320.000</h1>
                    <p className="story-donate">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis nunc pellentesque enim ultrices nunc. Pretium massa,
                      vel viverra id mi sed sit. In faucibus leo etiam cras elit
                      malesuada augue. In faucibus leo etiam cras elit malesuada
                      augue “
                    </p>
                  </div>
                </Card>
              </Col>
              <Col lg={6} style={{ marginTop: "30px" }}>
                <Card className="card-donate">
                  <div style={{ margin: "20px" }}>
                    <p className="time-donate">12 minutes ago</p>
                    <p className="title-donate">
                      Aid for necessary items to help our country
                    </p>
                    <h1 className="amount-donate">Rp. 320.000</h1>
                    <p className="story-donate">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis nunc pellentesque enim ultrices nunc. Pretium massa,
                      vel viverra id mi sed sit. In faucibus leo etiam cras elit
                      malesuada augue. In faucibus leo etiam cras elit malesuada
                      augue “
                    </p>
                  </div>
                </Card>
              </Col>
              <Col lg={6} style={{ marginTop: "30px" }}>
                <Card className="card-donate">
                  <div style={{ margin: "20px" }}>
                    <p className="time-donate">12 minutes ago</p>
                    <p className="title-donate">
                      Aid for necessary items to help our country
                    </p>
                    <h1 className="amount-donate">Rp. 320.000</h1>
                    <p className="story-donate">
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Duis nunc pellentesque enim ultrices nunc. Pretium massa,
                      vel viverra id mi sed sit. In faucibus leo etiam cras elit
                      malesuada augue. In faucibus leo etiam cras elit malesuada
                      augue “
                    </p>
                  </div>
                </Card>
              </Col>
              <Col lg={12} className="d-flex justify-content-center mt-5">
                <Button className="load-more">LOAD MORE</Button>
              </Col>
            </Row>
          </div>
        </div>

        <div className="border-container" style={{ marginTop: "70px" }}>
          <div style={{ margin: "30px" }}>
            <h3 className="style-profile-title">My Campaigns ({data.length})</h3>
            <Row style={{ marginTop: "20px" }}>
              <Col className="d-flex justify-content-center">
                {loading && <Loading type="spokes" color="#1D94A8" />}
                {!loading && <CardCampaign data={data} />}
              </Col>
              <Col lg={12} className="d-flex justify-content-center mt-5">
                <Button className="load-more">LOAD MORE</Button>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
