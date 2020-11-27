import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  background-color: #242424;
  justify-content: left;
  height: 60px;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  display: flex;
  font-size: 2rem;
  color: #fff;
  align-items: center;
  text-decoration: none;
  padding: 20px;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

export const NavItems = styled.ul`
  display: flex;
`;

export const NavItem = styled(Link)`
  display: flex;
  font-size: 1rem;
  color: #fff;
  align-items: right;
  text-decoration: none;
  padding: 20px;
`;
