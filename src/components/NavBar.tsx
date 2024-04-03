import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.nav`
  /* Add your styles for the navigation bar */
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <Link to="/">Home</Link>
      <Link to="/academics">Academics</Link>
      <Link to="/admissions">Admissions</Link>
      <Link to="/facilities">Facilities</Link>
    </NavBarContainer>
  );
};

export default NavBar;
