import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderWrapper, NavWrapper } from './styles';

const Header: React.FC = () => (
  <HeaderWrapper>
    <NavWrapper>
      <Link to="/dogs">Dogs</Link>
      <Link to="/adoptions">Adoptions</Link>
      <Link to="/checkout" className="align-end">
        Checkout
      </Link>
    </NavWrapper>
  </HeaderWrapper>
);

export default Header;
