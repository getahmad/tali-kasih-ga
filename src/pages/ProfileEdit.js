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
import Avatar from "react-avatar";
import { useEffect, useState } from "react";
import Axios from "axios";
import Hider from "react-hider";
import "./profile.css";

const ProfileEdit = () => {
  const [show, setShow] = useState(false);
  const [dataBank, setDataBank] = useState([]);
  const [noDataBank, setNoDataBank] = useState("");

  const [name, setName] = useState(Cookies.get("name"));
  const [email, setEmail] = useState(Cookies.get("email"));
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [bankName, setBankName] = useState("");
  const [bankNumber, setBankNumber] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const history = useHistory();

  const [idBank, setIdBank] = useState("");
  const [bankNamePatch, setBankNamePatch] = useState("");
  const [bankNumberPatch, setBankNumberPatch] = useState("");

  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
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
        // console.log(err);
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formdata = new FormData();
    formdata.append("photo", profileImage);
    const urlProfileImage =
      "https://binar8-agus-saputra.nandaworks.com/users/photo";
    const config = {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-type": "multipart/form-data",
      },
    };
    Axios.post(urlProfileImage, formdata, config).then((res) => {
      // console.log(res.data);
      history.push("/profile");
      history.go(0);
    });

    const url = "https://binar8-agus-saputra.nandaworks.com/users";
    const bodyData = {
      name: name,
      email: email,
      // password: password,
    };
    Axios.patch(url, bodyData, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      // console.log(res.data);
      Cookies.set("name", res.data.name);
      Cookies.set("email", res.data.email);
      // Cookies.set("password", res.data.password)
      history.push("/profile");
    });

    const urlPostBank = "https://binar8-agus-saputra.nandaworks.com/bank/info";
    const bodyDataBank = {
      bankName: bankName,
      bankNumber: bankNumber,
    };
    Axios.post(urlPostBank, bodyDataBank, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      // console.log(res.data);
      history.push("/profile");
    });

    const urlPatchBank = "https://binar8-agus-saputra.nandaworks.com/bank/info";
    const bodyDataBankPatch = {
      id: idBank,
      bankName: bankNamePatch,
      bankNumber: bankNumberPatch,
    };
    Axios.patch(urlPatchBank, bodyDataBankPatch, {
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
      },
    }).then((res) => {
      // console.log(res.data);
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
  // };

  return (
    <>
      <TopMenu />
      <Container>
        <div className="border-container" style={{ marginBottom: "70px" }}>
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
              <Col lg={12} className="d-flex justify-content-center mt-3">
                <input
                  style={{ width: "200px" }}
                  type="file"
                  name="profileImage"
                  onChange={(e) => setProfileImage(e.target.files[0])}
                />
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
              </Row>

              {/* <Row className="d-flex justify-content-end">
                <Button
                  onClick={() => setShow(true)}
                  type="button"
                  className="reset-password-btn"
                >
                  Reset password
                </Button>
              </Row>
              <Hider state={show}>
                <Row>
                  <Col lg={6}>
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
                  </Col>
                </Row>
              </Hider> */}

              <Row>
                <Col lg={12}>
                  <p style={{ color: "#A87B14" }}>
                    We need your bank account for campaign purpose
                  </p>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Create Bank Name</Label>
                    <Input
                      className="form-style"
                      type="text"
                      name="text"
                      // placeholder={bankName}
                      // value={bankNameCookies}
                      onChange={(e) => setBankName(e.target.value)}
                    />
                  </FormGroup>
                </Col>
                <Col lg={6}>
                  <FormGroup>
                    <Label for="exampletext">Create Bank Number</Label>
                    <Input
                      className="form-style"
                      type="number"
                      name="number"
                      // placeholder={bankAccountName}
                      // value={bankNumberCookies}
                      onChange={(e) => setBankNumber(e.target.value)}
                    />
                  </FormGroup>
                </Col>
              </Row>

              <Row className="d-flex justify-content-end mb-2">
                <Button
                  onClick={() => setShow(true)}
                  type="button"
                  className="reset-password-btn"
                >
                  Edit Bank Account
                </Button>
              </Row>

              <Hider state={show}>
                <Row>
                  <Col lg={4}>
                    <FormGroup>
                      <Label for="exampletext">Select to change</Label>
                      <Input
                        className="form-style"
                        type="select"
                        name="select"
                        id="exampleSelect"
                        onChange={(e) => setIdBank(e.target.value)}
                      >
                        <option value="" selected disabled>
                          Please select
                        </option>
                        {dataBank.map((dataBank) => (
                          <option value={dataBank.id}>
                            {dataBank.bankName}-{dataBank.bankNumber}
                          </option>
                        ))}
                      </Input>
                      <span>{noDataBank}</span>
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                    <FormGroup>
                      <Label for="exampletext">Change Bank Name</Label>
                      <Input
                        className="form-style"
                        type="text"
                        name="text"
                        onChange={(e) => setBankNamePatch(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                  <Col lg={4}>
                    <FormGroup>
                      <Label for="exampletext">Change Bank Number</Label>
                      <Input
                        className="form-style"
                        type="text"
                        name="text"
                        onChange={(e) => setBankNumberPatch(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Hider>

              <Row>
                <Col className="d-flex justify-content-end mt-5">
                  <Button
                    type="submit"
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
