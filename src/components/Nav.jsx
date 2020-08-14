import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  padding: 2em 2em 0 2em;
  width: 100%;
`;

const StyledLink = styled(Link)`
  padding: 0.5em;
`;

const Nav = () => {
  return (
    <NavContainer>
      <StyledLink to="/home">/home</StyledLink>
      <StyledLink to="/tips">/tips</StyledLink>
    </NavContainer>
  );
};

export default Nav;
