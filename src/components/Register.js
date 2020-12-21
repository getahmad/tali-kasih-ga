import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Modal, ModalBody, Button } from "reactstrap";
import axios from "axios";
import Cookies from "js-cookie";
import ICgoogle from "./images/ic-google.png";
import "./register.css";
import Login from "./Login";

const Register = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://binar8-agus-saputra.nandaworks.com/auth/register";
    const bodyData = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post(url, bodyData)
      .then((res) => {
        console.log(res.data);
        Cookies.set("id", res.data.id);
        Cookies.set("name", res.data.name);
        Cookies.set("email", res.data.email);
        Cookies.set("token", res.data.token);
        history.push("/login-proses");
      })
      .catch((err) => {
        setErrorRegister("email already exists");
      });
  };

  const checkConfirmPassword = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (!value) {
      setErrorConfirmPassword("confirm password tidak boleh kosong");
    } else if (password !== value) {
      setErrorConfirmPassword("password tidak cocok");
    } else {
      setErrorConfirmPassword("");
    }
  };

  const passwordformat = /^(?=.*[0-9])(?=.*[A-Z]).{8,32}$/g;
  const [errorPasswodFormat, setErrorPasswordFormat] = useState("");
  const checkPasswordFormat = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (!value.match(passwordformat)) {
      setErrorPasswordFormat(
        "password must be eight characters including one uppercase letter, one special character and alphanumeric characters"
      );
    } else if (value.match(passwordformat)) {
      setPassword(value);
      setErrorPasswordFormat("");
    } else {
      setErrorPasswordFormat("");
    }
  };

  return (
    <div>
      <span onClick={toggle} style={{ color: "#1D94A8" }}>
        Register
      </span>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="modal-style">
          <Form className="form-modal" onSubmit={handleSubmit}>
            <h1 className="title-modal">Register</h1>
            <p className="subtitle-modal d-flex justify-content-start">
              Already have an account?{" "}
              <NavLink to="/">
                {" "}
                <Login />{" "}
              </NavLink>
            </p>
            <FormGroup style={{ marginTop: "40px" }}>
              <Input
                className="form-style"
                type="name"
                name="name"
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-style"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-style"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={checkPasswordFormat}
                required
              />
              {errorPasswodFormat && (
                <p className="text-danger" style={{ marginBottom: "25px" }}>
                  {errorPasswodFormat}
                </p>
              )}
            </FormGroup>

            <FormGroup>
              <Input
                className="form-style"
                type="password"
                name="password"
                value={confirmPassword}
                onChange={checkConfirmPassword}
                placeholder="Confirm Password"
                required
              />
              {errorConfirmPassword && (
                <p className="text-danger" style={{ marginBottom: "25px" }}>
                  {errorConfirmPassword}
                </p>
              )}
            </FormGroup>

            <Button className="btn-login">LOGIN</Button>
            <p style={{ textAlign: "center", color: "red" }}>{errorRegister}</p>
            <div className="login-google d-flex justify-content-center">
              <img className="ic-google" src={ICgoogle} alt="" />
              <p>Continue with Google</p>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default Register;
