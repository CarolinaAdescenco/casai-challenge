import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: #ffffff;
  -webkit-box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.9);
  box-shadow: 0px 2px 11px 0px rgba(0, 0, 0, 0.9);

  display: flex;

  padding: 24px;
  margin-bottom: 36px;
`;

export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;

  a {
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 16px;
    color: #6e6e6e;
    font-weight: 700;
    transition: 0.2s all;

    &:hover {
      color: #8264c3;
    }

    &.align-end {
      justify-self: flex-end;
    }
  }
`;
