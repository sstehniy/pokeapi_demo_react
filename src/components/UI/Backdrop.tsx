import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10000;
`;

const Backdrop: React.FC = ({ children }) => {
  return ReactDOM.createPortal(
    <StyledBackdrop
      className='d-flex justify-content-center align-items-center'
      id='back'>
      {children}
    </StyledBackdrop>,
    document.getElementById('modal') as Element
  );
};

export default Backdrop;
