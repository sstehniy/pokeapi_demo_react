import React from 'react';
import styled from 'styled-components';

const SkeletonLine = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-image: linear-gradient(
    -90deg,
    lightgrey 0%,
    grey 50%,
    lightgrey 100%
  );
  background-size: 400% 400%;
  animation: waveAnimation 1.5s ease-in-out infinite;

  @keyframes waveAnimation {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;

const ImageSkeleton = styled.div`
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  margin: 35px;
  overflow: hidden;
`;

const HeadingSkeleton = styled.div`
  position: relative;
  margin: 5px 0;
  height: 24px;
  width: 75%;
  border-radius: 4px;
  overflow: hidden;
`;

const TextSkeleton = styled.div`
  position: relative;
  margin: 4px 0;
  height: 17px;
  width: 55%;
  overflow: hidden;
  border-radius: 2px;
`;

const SkeletonItem = () => {
  return (
    <div
      className='card m-3 shadow-md rounded d-flex flex-column align-items-center'
      style={{ height: '300px', width: '225px' }}>
      <ImageSkeleton>
        <SkeletonLine />
      </ImageSkeleton>
      <div className='w-100 d-flex flex-column px-4 flex-grow-1'>
        <HeadingSkeleton>
          <SkeletonLine />
        </HeadingSkeleton>
        <TextSkeleton>
          <SkeletonLine />
        </TextSkeleton>
        <TextSkeleton>
          <SkeletonLine />
        </TextSkeleton>
        <TextSkeleton>
          <SkeletonLine />
        </TextSkeleton>
      </div>
    </div>
  );
};

export default SkeletonItem;
