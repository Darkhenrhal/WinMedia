import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  // Button,
  // UncontrolledCollapse,
  // DropdownMenu,
  // DropdownItem,
  // DropdownToggle,
  // UncontrolledDropdown,
  // Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  // Row,
  // Col,
  UncontrolledTooltip,
} from "reactstrap";

class DemoNavbar extends React.Component {
  render() {
    return (
      <>
      <header className="header-global">
        <Navbar
          className="navbar-main navbar-transparent navbar-light headroom"
          expand="lg"
          id="navbar-main"
        >
          <Container className="justify-content-between">
            <NavbarBrand className="mr-0" to="/" tag={Link}>
              <img
                alt="..."
                src={require("assets/img/brand/argon-react-white.png")}
              />
            </NavbarBrand>

            <Nav className="mx-auto" navbar>
            <NavItem className="ml-8 mr-4">
                <NavLink to="/our-work" tag={Link}>
                  <span className="nav-link-inner--text">Home</span>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4 mr-4">
                <NavLink to="/our-work" tag={Link}>
                  <span className="nav-link-inner--text">Our Work</span>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4 mr-4">
                <NavLink to="/about-us" tag={Link}>
                  <span className="nav-link-inner--text">About Us</span>
                </NavLink>
              </NavItem>
              <NavItem className="ml-4 mr-8">
                <NavLink to="/contact" tag={Link}>
                  <span className="nav-link-inner--text">Contact</span>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip333589074"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Facebook
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip333589074">
                  Like us on Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.instagram.com/creativetimofficial"
                  id="tooltip356693867"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Instagram
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip356693867">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://twitter.com/creativetim"
                  id="tooltip184698705"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Twitter
                  </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip184698705">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
}
}


export default DemoNavbar;
