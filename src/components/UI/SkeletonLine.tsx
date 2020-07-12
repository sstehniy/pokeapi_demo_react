import styled from 'styled-components';

export const SkeletonLine = styled.div`
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
