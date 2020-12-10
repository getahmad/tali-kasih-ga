import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "./layout/Footer";
import TopMenu from "./layout/TopMenu";
import imgProfile from "./images/profile.png";
import { useState } from "react";
import Axios from "axios";

const ProfileEdit = () => {
  //   const name = Cookies.get("name");
  //   const email = Cookies.get("email");
  const bankNameCookies = Cookies.get("bankName");
  const bankNumberCookies = Cookies.get("bankNumber");

  const [name, setName] = useState(Cookies.get("name"));
  const [email, setEmail] = useState(Cookies.get("email"));
  //   const [password, setPassword] = useState(Cookies.get("password"));
  const [bankName, setBankName] = useState("");
  const [bankNumber, setBankNumber] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://binar8-agus-saputra.nandaworks.com/users";
    const urlPostBank = "https://binar8-agus-saputra.nandaworks.com/bank/info";
    const bodyData = {
      name: name,
      email: email,
      //   password: password,
    };
    const bodyDataBank = {
      bankName: bankName,
      bankNumber: bankNumber,
    };
    Axios.post(urlPostBank, bodyDataBank, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      console.log(res.data);
      Cookies.set("bankName", res.data.bankName);
      Cookies.set("bankNumber", res.data.bankNumber);
      history.push("/profile");
    });

    Axios.patch(url, bodyData, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      console.log(res.data);
      Cookies.set("name", res.data.name);
      Cookies.set("email", res.data.email);
      // Cookies.set("password", res.data.password)
      history.push("/profile");
    });
  };

  // const checkConfirmPassword = (e) => {
  //   const value = e.target.value;
  //   setConfirmPassword(value);
  //   if (!value) {
  //     setErrorConfirmPassword("confirm password tidak boleh kosong");
  //   } else if (password !== value) {
  //     setErrorConfirmPassword("password tidak cocok");
  //   } else {
  //     setErrorConfirmPassword("");
  //   }

  return (
    <>
      <TopMenu />
      <Container>
        <div className="border-container" style={{ marginBottom:"70px"}}>
          <div style={{ margin: "30px", }}>
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
                  Change Image Profile
                </Link>
              </Col>
            </Row>

            <Form onSubmit={handleSubmit}>
              <Row style={{ marginTop: "40px" }}>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Name</Label>
                    <Input
                      className="form-style"
                      type="name"
                      name="name"
                      // placeholder={name}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Email</Label>
                    <Input
                      className="form-style"
                      type="email"
                      name="email"
                      // placeholder={email}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </FormGroup>
                </Col>
                {/* <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Password</Label>
                    <Input
                      className="form-style"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Password</Label>
                    <Input
                      className="form-style"
                      type="password"
                      name="password"
                      value={confirmPassword}
                      onChange={checkConfirmPassword}
                      placeholder="Confirm Password"
                    />
                    {errorConfirmPassword && (
                      <p className="text-danger">{errorConfirmPassword}</p>
                    )}
                  </FormGroup>
                </Col> */}
                <Col lg={12}>
                  <p style={{ color: "#A87B14" }}>
                    We need your bank account for campaign purpose
                  </p>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Bank Name</Label>
                    <Input
                      className="form-style"
                      type="text"
                      name="text"
                      // placeholder={bankName}
                      value={bankNameCookies}
                      onChange={(e) => setBankName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Bank Account Name</Label>
                    <Input
                      className="form-style"
                      type="number"
                      name="number"
                      // placeholder={bankAccountName}
                      value={bankNumberCookies}
                      onChange={(e) => setBankNumber(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col className="d-flex justify-content-end">
                  <Button
                    style={{
                      background: "#A43F3C",
                      color: "#ffffff",
                      fontWeight: "bold",
                    }}
                  >
                    SAVE CHANGES
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default ProfileEdit;
