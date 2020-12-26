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
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import "./profile.css";
import { useEffect, useState } from "react";
import Axios from "axios";
import Avatar from "react-avatar";
import CardCampaignUser from "../components/CardCampaignUser";
import dateFormat from "dateformat";

const Profile = (props) => {
  const [data, setData] = useState([]);
  const [dataUser, setDataUser] = useState([]);
  const [dataBank, setDataBank] = useState([]);
  const [noDataBank, setNoDataBank] = useState("");
  const [error, setError] = useState("");
  const [errorDonate, setErrorDonate] = useState("");
  const [dataDonateUser, setDataDonateUser] = useState([]);

  useEffect(() => {
    const url = "https://binar8-agus-saputra.nandaworks.com/campaigns/user";
    Axios.get(url, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => {
        setData(res.data.reverse());
      })
      .catch((err) => {
        setError("No Data");
        console.log(err);
      });

    const urlDataUser = "https://binar8-agus-saputra.nandaworks.com/users";
    Axios.get(urlDataUser, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      setDataUser(res.data[0]);
      Cookies.set("name", res.data[0].name);
    });

    const urlGetBank = "https://binar8-agus-saputra.nandaworks.com/bank/info";
    Axios.get(urlGetBank, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => {
        if (res.status !== 200) {
          setNoDataBank("no bank account");
        } else {
          setDataBank(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    const urlGetDonate = `https://binar8-agus-saputra.nandaworks.com/donations/user`;
    Axios.get(urlGetDonate, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    })
      .then((res) => {
        setDataDonateUser(res.data);
      })
      .catch((err) => {
        setErrorDonate("No Data");
        console.log(err);
      });
  }, []);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
      { minimumFractionDigits: 0 }
    ).format(money);
 }

  return (
    <>
      <TopMenu />
      <Container style={{ marginTop: "80px" }}>
        <div className="border-container">
          <div style={{ margin: "30px" }}>
            <Row>
              <Col lg={6} xs={6} className="d-flex justify-content-start">
                <h3 className="style-profile-title">My Profile</h3>
              </Col>
              <Col lg={6} xs={6} className="d-flex justify-content-end">
                <Link to="/logout" className="style-logout">
                  Logout
                </Link>
              </Col>
              <Col lg={12} className="d-flex justify-content-center">
                {dataUser.photo === null ? (
                  <Avatar name={dataUser.name} size="200" />
                ) : (
                  <img
                    src={dataUser.photo}
                    alt=""
                    style={{
                      width: "200px",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                )}
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
                    <Input type="select" name="select" id="exampleSelect">
                      {dataBank.map((dataBank) => (
                        <option value={dataBank.id}>
                          {dataBank.bankName}-{dataBank.bankNumber}
                        </option>
                      ))}
                    </Input>
                    <p>{noDataBank}</p>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </div>
        </div>

        <div className="border-container" style={{ marginTop: "70px" }}>
          <div style={{ margin: "30px" }}>
            <h3 className="style-profile-title">
              My Donations ({dataDonateUser.length})
            </h3>
            <Row className="d-flex justify-content-center">
              <p>{errorDonate}</p>
              {dataDonateUser.map((DonateUser) => (
                <Col lg={6}>
                  <Card className="card-donate" style={{ marginTop: "30px" }}>
                    <div style={{ margin: "20px" }}>
                      <p className="time-donate">
                        {dateFormat(DonateUser.createdAt)}
                      </p>
                      <p className="title-donate">{DonateUser.campaignTitle}</p>
                      <h1 className="amount-donate">Rp. {formatRupiah(DonateUser.amount)}</h1>
                      <p className="story-donate">“{DonateUser.message}“</p>
                    </div>
                  </Card>
                </Col>
              ))}
              <Col lg={12} className="d-flex justify-content-center mt-5">
                <Button className="load-more">LOAD MORE</Button>
              </Col>
            </Row>
          </div>
        </div>

        <div
          className="border-container"
          style={{ marginTop: "70px", marginBottom: "70px" }}
        >
          <div style={{ margin: "30px" }}>
            <h3 className="style-profile-title">
              My Campaigns ({data.length})
            </h3>
            <Row style={{ marginTop: "20px" }}>
              <Col className="d-flex justify-content-center">
                <p>{error}</p>
                <CardCampaignUser data={data} />
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
