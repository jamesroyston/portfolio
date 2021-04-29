import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`
  display: flex;
  padding: 1em 1em 0 1em;
  width: 100%;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

const StyledLink = styled(Link)`
  padding: 0.5em;
`;

const Nav = () => {
  return (
    <NavContainer>
      <StyledLink to="/home">/home</StyledLink>
    </NavContainer>
  );
};

export default Nav;
