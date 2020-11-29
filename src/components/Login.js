import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Modal, ModalBody, Button } from "reactstrap";
import axios from "axios";
import Cookies from "js-cookie";
import ICgoogle from "./images/ic-google.png";
import "./register.css";

const Login = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit =(e)=>{
    e.preventDefault();
    const url ="https://5fad36562ec98b0016048033.mockapi.io/login"
    const bodyData ={
      email:email,
      password : password
    }
    axios.post(url, bodyData)
    .then((res)=>{
      console.log(res)
      Cookies.set("id", res.id)
      Cookies.set("name", res.name)
      Cookies.set("email", res.email)
      Cookies.set("token", res.token)
      history.push("/")
    })
  }

  return (
    <div>
      <NavLink
        to="/"
        onClick={toggle}
        className="nav-link nav-menu"
        style={{ color: "#1D94A8" }}
      >
        Login
      </NavLink>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalBody className="modal-style">
          <Form className="form-modal" onSubmit={handleSubmit}>
            <h1 className="title-modal">Login</h1>
            <p className="subtitle-modal">
              New user? <NavLink to="/">Create an account</NavLink>{" "}
            </p>
            <FormGroup style={{ marginTop: "40px" }}>
              <Input
                className="form-style"
                type="email"
                name="email"
                placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-style"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                required
              />
            </FormGroup>
            <NavLink to="/"><p className="subtitle-modal">forgot password?</p></NavLink>

            <Button className="btn-login">login</Button>

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
