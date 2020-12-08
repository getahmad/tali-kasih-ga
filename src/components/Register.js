import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Modal, ModalBody, Button } from "reactstrap";
import axios from "axios";
import Cookies from "js-cookie";
import ICgoogle from "./images/ic-google.png";
import "./register.css";

const Register = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://ec2-54-251-3-103.ap-southeast-1.compute.amazonaws.com/auth/register";
    const bodyData = {
      name: name,
      email: email,
      password: password,
    };
    axios.post(url, bodyData).then((res) => {
      console.log(res.data);
      Cookies.set("id", res.data.id);
      Cookies.set("name", res.data.name);
      Cookies.set("email", res.data.email);
      Cookies.set("token", res.data.token);
      history.push("/login-proses");
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

  return (
    <div>
      <NavLink
        to="/"
        onClick={toggle}
        className="nav-link nav-menu"
        style={{ color: "#1D94A8" }}
      >
        Register
      </NavLink>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="modal-style">
          <Form className="form-modal" onSubmit={handleSubmit}>
            <h1 className="title-modal">Register</h1>
            <p className="subtitle-modal">
              Already have an account? <NavLink to="/">Sign in</NavLink>
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
                onChange={(e) => setPassword(e.target.value)}
                required
              />
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
                <p className="text-danger" style={{marginBottom:"25px"}}>{errorConfirmPassword}</p>
              )}
            </FormGroup>

            <Button className="btn-login">LOGIN</Button>

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
