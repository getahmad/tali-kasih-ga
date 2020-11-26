import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Form, FormGroup, Input, Modal, ModalBody, Button } from "reactstrap";
import ICgoogle from "./images/ic-google.png";
import "./register.css";

const Register = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
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
          <Form className="form-modal">
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
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-style"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-style"
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                className="form-style"
                type="password"
                name="password"
                placeholder="Confirm Password"
                required
              />
            </FormGroup>
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

export default Register;
