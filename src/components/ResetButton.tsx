import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../context';

const StyledResetButton = styled.div`
  width: 170px;
  height: 40px;
  font-weight: 500;
  border-radius: 7px;
  box-shadow: 0 0px 1.9px rgba(180, 180, 180, 0.04),
    0 0px 4.8px rgba(180, 180, 180, 0.058),
    0 0px 9.7px rgba(180, 180, 180, 0.072),
    0 0px 20.1px rgba(180, 180, 180, 0.09), 0 0px 55px rgba(255, 255, 255, 0.13);
  margin-left: 10px;
  border: 3px solid ${({ theme }) => theme.pumpkin};
  color: ${({ theme }) => theme.pumpkin};
  cursor: pointer;
  transition: all 0.2s ease-in;

  &:hover {
    color: ${({ theme }) => theme.dark};
    background-color: ${({ theme }) => theme.pumpkin};
  }
`;

const ButtonText = styled.p``;

const ResetButton: React.FC = () => {
  const { toggleFilterHandler } = useContext(Context);

  return (
    <StyledResetButton
      className='d-flex justify-content-center align-items-center'
      onClick={() => toggleFilterHandler('all')}>
      <ButtonText className='m-0'>Reset</ButtonText>
    </StyledResetButton>
  );
};

export default ResetButton;
