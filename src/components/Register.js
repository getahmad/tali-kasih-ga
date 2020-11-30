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

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://5fad36562ec98b0016048033.mockapi.io/Register";
    const bodyData = {
      name: name,
      email: email,
      password: password,
    };
    axios.post(url, bodyData)
    .then((res) => {
      console.log(res);
      Cookies.set("id", res.id);
      Cookies.set("name", res.name);
      Cookies.set("email", res.email);
      Cookies.set("token", res.token);
      history.push("/login-proses");
    });
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
              Already have an account? <NavLink to="/">Sign in</NavLink>{" "}
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
                placeholder="Confirm Password"
              />
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
