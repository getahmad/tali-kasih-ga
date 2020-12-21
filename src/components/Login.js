import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Modal, ModalBody, Button } from "reactstrap";
import axios from "axios";
import Cookies from "js-cookie";
import ICgoogle from "./images/ic-google.png";
import "./register.css";
import Register from "./Register";

const Login = (props) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "https://binar8-agus-saputra.nandaworks.com/auth/login";
    const bodyData = {
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
        Cookies.set("isAdmin",res.data.isAdmin);
        history.push("/login-proses");
      })
      .catch((err) => {
        setErrorLogin("Email and password do not match");
      });
  };

  return (
    <div>
      <span 
        onClick={toggle}
        style={{ color: "#1D94A8" }}
      >
        Login
      </span>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="modal-style">
          <Form className="form-modal" onSubmit={handleSubmit}>
            <h1 className="title-modal">Login</h1>
            <p className="subtitle-modal d-flex justify-content-start">
              New user? <NavLink to="/"> <Register/> </NavLink>
            </p>
            <FormGroup style={{ marginTop: "40px" }}>
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
            <NavLink to="/login-proses">
              <p className="subtitle-modal">forgot password?</p>
            </NavLink>

            <Button className="btn-login" type="submit">LOGIN</Button>
            <p style={{ textAlign: "center", color: "red" }}>{errorLogin}</p>

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

export default Login;
