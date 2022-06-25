import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: pink;
  color: white;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: green;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/products">PRODUCTS</StyledLink>
    </NavbarWrapper>
  );
};

export default Navbar;