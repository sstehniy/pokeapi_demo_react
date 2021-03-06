import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from 'react';
import DropdownItem from './DropdownItem';
import { ReactComponent as Arrow } from '../assets/down-arrow.svg';
import { Context } from '../context';
import styled from 'styled-components';

const SFilterDropdown = styled.div`
  width: 170px;
  height: 40px;
  background-color: ${({ theme }) => theme.pumpkin};
  outline: none;
  z-index: 2000;
  border-radius: 7px;
  box-shadow: 0 0px 1.9px rgba(180, 180, 180, 0.04),
    0 0px 4.8px rgba(180, 180, 180, 0.058),
    0 0px 9.7px rgba(180, 180, 180, 0.072),
    0 0px 20.1px rgba(180, 180, 180, 0.09), 0 0px 55px rgba(255, 255, 255, 0.13);

  & p {
    cursor: pointer;
    width: 100%;
    line-height: 200%;
    text-align: center;
    user-select: none;
    color: ${({ theme }) => theme.dark};
  }
`;

const StyledDropdown = styled.div`
  overflow: scroll;
  position: absolute;
  top: 115%;
  left: 0;
  right: 0;
  max-height: 200px;
  border-radius: 7px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.light};
`;

const FilterDropdown: React.FC = () => {
  const [expendDropdown, setExpendDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(document.createElement('div'));
  const { filters, selectedFilters, toggleFilterHandler } = useContext(Context);

  // An effect to track clicks outside the dropdown container and close it if clicked outside
  useEffect(() => {
    const dropdownRefNode = dropdownRef.current;
    const hideDropdown = () => {
      setExpendDropdown(false);
    };
    dropdownRefNode.addEventListener('focusout', hideDropdown);
    return () => dropdownRefNode.removeEventListener('focusout', hideDropdown);
  }, []);

  const toggleDropdownHandler = useCallback(() => {
    setExpendDropdown((prev) => !prev);
  }, []);

  return (
    <SFilterDropdown
      className='position-relative d-flex align-items-center justify-content-center'
      tabIndex={1}
      ref={dropdownRef}>
      <p className='m-0' onClick={toggleDropdownHandler}>
        Filters
      </p>
      <Arrow
        className='position-absolute  '
        style={{ right: '13px', height: '17px', cursor: 'pointer' }}
      />
      {expendDropdown && (
        <StyledDropdown>
          {filters.map((f, i) => (
            <DropdownItem
              key={i}
              name={f.name}
              selected={
                !!selectedFilters.find((selected) => selected.name === f.name)
              }
              onSelected={() => toggleFilterHandler(f.name)}
            />
          ))}
        </StyledDropdown>
      )}
    </SFilterDropdown>
  );
};

export default FilterDropdown;
