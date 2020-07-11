import React from 'react';
import styled from 'styled-components';

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

type ResetButton = {
  onClick: () => void;
};

const ResetButton: React.FC<ResetButton> = ({ onClick }) => {
  return (
    <StyledResetButton
      className='d-flex justify-content-center align-items-center flex-shrink-0'
      onClick={onClick}>
      <ButtonText className='m-0'>Reset</ButtonText>
    </StyledResetButton>
  );
};

export default ResetButton;
