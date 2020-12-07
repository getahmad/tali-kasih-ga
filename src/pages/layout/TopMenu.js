import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
// import Register from '../../components/Register';
// import Login from '../../components/Login';
import "./topmenu.css"
import { checkLogin } from "../../Helper";


const TopMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar light expand="md" className="shadow-navbar fixed-top">
        <Container>
          <NavbarBrand href="/">
            <img className="logo-brand" src={Logo} alt="" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto nav-style" navbar>
              {checkLogin() && (
                <>
                  <NavItem>
                    <NavLink
                      to="/campaign"
                      className="nav-link nav-menu nav-campaign"
                    >
                      CREATE CAMPAIGN
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      to="/discover"
                      className="nav-link nav-menu nav-donate"
                    >
                      DONATE
                    </NavLink>
                  </NavItem>
                </>
              )}
   

            <div className="search-container">
              <form action="/result" method="get">
                <input className="search expandright" id="searchright" type="search" name="q" placeholder="Search"/>
            
                <label className="button searchbutton" htmlFor="searchright">
                  <img src={ICSearch} alt="" className=""/>
                  </label>
                 
              </form>
            </div>
                      
            {/* <NavItem>
              <NavLink to="/search"  className="nav-link nav-menu" style={{color:"#1D94A8", fontWeight:"normal"}}>
                <img src={ICSearch} alt="" className="mr-2"/>
                Search
                </NavLink>
            </NavItem> */}


              {!checkLogin() && (
                <>
                  <div className="vertical-line"></div>

                  <NavItem>
                    <NavLink to="/"  className="nav-link nav-menu" style={{color:"#1D94A8"}}>Login</NavLink>
                    {/* <Login /> */}
                  </NavItem>
                  <div className="vertical-line"></div>
                  <NavItem>
                    <NavLink to="/"  className="nav-link nav-menu" style={{color:"#1D94A8"}}>Register</NavLink>
                    {/* <Register /> */}
                  </NavItem>
                </>
              )}

              {checkLogin() && (
                <>
                  <div className="vertical-line"></div>

                  <NavItem>
                    <NavLink
                      to="/user"
                      className="nav-link nav-menu"
                      style={{ color: "#1D94A8" }}
                    >
                      My Profile
                    </NavLink>
                  </NavItem>
                </>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopMenu;
