import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as Prev } from '../assets/previous.svg';
import { ReactComponent as Next } from '../assets/next.svg';

const StyledCarousselWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #247ba0;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 0 12px ${({ theme }) => theme.dark};
`;

const StyledCaroussel = styled.div`
  position: relative;
  width: 150px;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
  & svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    fill: ${({ theme }) => theme.dark};
    z-index: 1000;
    cursor: pointer;

    &#prev {
      left: 0;
    }

    &#next {
      right: 0;
    }
  }
`;

const Slider = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  transition: all 0.3s ease-in-out;
  user-select: none;
  & img {
    width: 100%;
    flex-shrink: 0;
  }
`;

const DotsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.div`
  height: 14px;
  width: 14px;
  margin: 0 5px;
  margin-top: 5px;
  flex-shrink: 0;
  background-color: #fff;
  border-radius: 7px;
  transition: all 0.3s ease-in;
  cursor: pointer;
  &.active {
    background-color: #aaa;
  }
`;

const Caroussel: React.FC<{ photos: null | string | string[] }> = ({
  photos,
}) => {
  const [offset, setOffset] = useState(0);
  // const sliderRef = useRef(document.createElement('div'));

  const handlePrevClick = () => {
    console.log('yeee');
    if (offset - 150 < 0) setOffset(150 * ((photos as string[]).length - 1));
    else setOffset((prev) => prev - 150);
  };

  const handleNextClick = () => {
    if (offset + 150 > 150 * ((photos as string[]).length - 1)) {
      console.log('(((');
      setOffset(0);
    } else setOffset((prev) => prev + 150);
  };

  const handleDotClick = (i: number) => {
    setOffset(i * 150);
  };

  return photos && photos.length ? (
    <StyledCarousselWrapper>
      <StyledCaroussel>
        <Prev onClick={handlePrevClick} id='prev' />
        <Next onClick={handleNextClick} id='next' />
        <Slider style={{ transform: `translateX(${-offset}px)` }}>
          {Array.isArray(photos) &&
            photos.map((p, i) => (
              <img
                key={i}
                src={p}
                alt={`pokemon-${i}`}
                className='caroussel-item'
              />
            ))}
        </Slider>
        <DotsWrapper>
          {(photos as string[]).map((_, i) => (
            <Dot
              key={i}
              className={i * 150 === offset ? 'active' : ''}
              onClick={() => handleDotClick(i)}
            />
          ))}
        </DotsWrapper>
      </StyledCaroussel>
    </StyledCarousselWrapper>
  ) : (
    <p>Placeholder</p>
  );
};

export default Caroussel;
