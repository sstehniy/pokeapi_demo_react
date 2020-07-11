import React from 'react';
import FilterDropdown from './FilterDropdown';
import ResetButton from './ResetButton';
import styled from 'styled-components';
import FilterManage from './FilterManage';
import { useMediaQuery } from '../hooks/useMediaQuery';

const StyledToolBar = styled.div`
  background-color: ${({ theme }) => theme.charcoal};
  height: 65px;
  width: 100%;
`;

const ToolBar: React.FC = () => {
  const isSmall = useMediaQuery('(max-width: 600px)');
  return (
    <StyledToolBar className='m-0 px-5 d-flex justify-content-start align-items-center shadow-lg rounded flex-shrink-0 overflow-scroll'>
      <FilterDropdown />
      <ResetButton />
      {!isSmall && <FilterManage />}
    </StyledToolBar>
  );
};

export default ToolBar;
