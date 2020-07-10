import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Checkbox from './Checkbox';
import { DropdownItemProps } from '../types';

const StyledDropdownItem = styled.div`
  height: 40px;
  cursor: pointer;
  position: relative;
  background-color: ${({ theme }) => theme.light};
  transition: all 0.2s ease-in-out;

  & p {
    text-transform: capitalize;

    color: ${({ theme }) => theme.dark};
    transition: all 0.2s ease-in-out;
  }

  &:not(:last-child)::before {
    content: '';
    position: absolute;
    z-index: 3;
    top: 100%;
    width: 83%;
    left: 50%;
    transform: translateX(-50%);
    height: 1px;
    background-color: ${({ theme }) => theme.dark};
  }

  &:hover {
    transform: scale(0.95);
  }
`;

const DropdownItem: React.FC<DropdownItemProps> = ({
  name,
  onSelected,
  selected,
}) => {
  const [showPreChecked, setShowPreChecked] = useState(false);
  const itemRef = useRef<HTMLDivElement>(document.createElement('div'));
  useEffect(() => {
    if (!itemRef.current) return;
    const triggerPreChecked = () => {
      setShowPreChecked(true);
    };
    const resetPreChecked = () => {
      setShowPreChecked(false);
    };
    itemRef.current.addEventListener('mouseover', triggerPreChecked);
    itemRef.current.addEventListener('mouseleave', resetPreChecked);
    return () => {
      itemRef.current.removeEventListener('mouseover', triggerPreChecked);
      itemRef.current.removeEventListener('mouseleave', resetPreChecked);
    };
  }, []);
  return (
    <StyledDropdownItem
      ref={itemRef}
      onClick={() => onSelected(name)}
      className='d-flex align-items-center justify-content-between p-3'>
      <p className='text-left m-0'>{name}</p>
      <Checkbox selected={selected} showPreChecked={showPreChecked} />
    </StyledDropdownItem>
  );
};

export default DropdownItem;
