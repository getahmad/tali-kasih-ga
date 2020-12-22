import React from "react";
import { Container } from "reactstrap";
import Footer from "./layout/Footer";
import TopMenu from "./layout/TopMenu";
import "./admin.css";

const Admin = () => {
  return (
    <>
      <TopMenu />
      <Container className="container-admin">
       <h1>ini halaman admin</h1>
       <h1>test deploy</h1>
      </Container>
      <Footer />
    </>
  );
};

export default Admin;
