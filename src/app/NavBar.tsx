import React from "react";
import styled, { css } from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

interface NavBarProps {
  show: boolean;
}

const StyledNavbar = styled(Navbar)<{ className?: string }>`
  background-color: #231C2F;
  color: white;  // Sets default text color to white
  transition: top 0.3s;
  position: fixed;
  width: 100%;
  z-index: 10;

  ${(props) =>
    props.className === "visible" &&
    css`
      top: 0;
    `}

  ${(props) =>
    props.className === "hidden" &&
    css`
      top: -200px;
    `}

  a, .navbar-brand, .nav-link {
    color: white !important;  // Using !important to override default styles
    &:hover, &:focus {
      color: #52d999ff;  // Lighter color on hover for better interaction feedback
    }
  }
`;
const Logo = styled.img`
  height: 100px;
  width: auto;
  margin-right: 10px;
`;
const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const NavBar: React.FC<NavBarProps> = ({ show }) => {
  return (
    <StyledNavbar expand="lg" className={show ? "visible" : "hidden"}>
      <Navbar.Brand href="#">
        <Logo src="./favicon.ico" alt="Brand Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link onClick={() => scrollToSection('services-section')} href="#services-section">Services</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('progress-bar-section')} href="#progress-bar-section">Progress</Nav.Link>
          <Nav.Link onClick={() => scrollToSection('background-section')} href="#background-section">Background</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};
export default NavBar;
