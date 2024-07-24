import React from "react";
import styled, { css } from "styled-components";
import { Navbar, Nav } from "react-bootstrap";

interface NavBarProps {
  show: boolean;
}

const StyledNavbar = styled(Navbar)<{ className?: string }>`
  background-color: #343a40;
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
      top: -80px;
    `}
`;

const Logo = styled.img`
  height: 50px;
  width: auto;
  margin-right: 10px;
`;

const NavBar: React.FC<NavBarProps> = ({ show }) => {
  return (
    <StyledNavbar expand="lg" className={show ? "visible" : "hidden"}>
      <Navbar.Brand href="#">
        <Logo src="./favicon.ico" alt="Brand Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#placeholder1">Placeholder1</Nav.Link>
          <Nav.Link href="#placeholder2">Placeholder2</Nav.Link>
          <Nav.Link href="#placeholder3">Placeholder3</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default NavBar;
