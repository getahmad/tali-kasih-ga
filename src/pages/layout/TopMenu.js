import React, { useState } from 'react';
import { NavLink,  } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import Logo from "../images/logo.png"
import ICSearch from "../images/ic-search.png"
import "./topmenu.css"


const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="shadow-navbar">
       <Container>
       <NavbarBrand href="/" className="logo-brand">
         <img src={Logo} alt=""/>
       </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink to="/search"  className="nav-link nav-menu" style={{color:"#1D94A8", fontWeight:"normal"}}>
                <img src={ICSearch} alt="" className="mr-2"/>
                Search
                </NavLink>
            </NavItem>
            <div  className="vertical-line"></div>
            <NavItem>
              <NavLink to="/login"  className="nav-link nav-menu" style={{color:"#1D94A8"}}>Login</NavLink>
            </NavItem>
            <div className="vertical-line"></div>
            <NavItem>
              <NavLink to="/register"  className="nav-link nav-menu" style={{color:"#1D94A8"}}>Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
       </Container>
      </Navbar>
    </div>
  );
}

export default TopMenu;