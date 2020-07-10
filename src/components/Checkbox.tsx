import React from 'react';
import styled from 'styled-components';

type CheckboxProps = {
  selected: boolean;
  showPreChecked: boolean;
};

const StyledCheckbox = styled.div`
  position: relative;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 1px solid black;
`;

const CheckedPoint = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.pumpkin};
  animation: zoomIn 0.1s ease-in forwards;

  @keyframes zoomIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const PreCheckedPoint = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: #f7bbb6;
`;

const Checkbox: React.FC<CheckboxProps> = ({
  selected = false,
  showPreChecked = false,
}) => {
  return (
    <StyledCheckbox className='d-flex justify-content-center align-items-center flex-shrink-0'>
      {selected && <CheckedPoint />}
      {showPreChecked && !selected && <PreCheckedPoint />}
    </StyledCheckbox>
  );
};

export default Checkbox;
