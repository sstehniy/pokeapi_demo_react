import React from 'react';
import { ReactComponent as Logo } from '../assets/pokemon.svg';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.pumpkin};
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.4);
  z-index: 10000;

  & h2.logo-text {
    color: ${({ theme }) => theme.dark};
  }
`;

const Header: React.FC = () => {
  return (
    <StyledHeader className='navbar px-5 d-flex justify-content-start align-items-center fixed-top'>
      <Logo className='navbar-brand' style={{ width: '40px' }} />
      <h2 className='m-0 logo-text'>My Pokedex</h2>
    </StyledHeader>
  );
};

export default Header;
