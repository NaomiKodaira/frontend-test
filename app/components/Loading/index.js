// Animação criada por https://codepen.io/saIot/pen/WNjPEXo

import React from 'react';
import styled, { keyframes } from 'styled-components';
import colours from 'config/colours';

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const scaling = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.2);
  }

  100% {
    transform: scale(1);
  }
`;

const LoadingStyled = styled.div`
  width: 100%;
  padding: 25px;

  & > div {
    width: 80px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    animation: ${spinning} 4s linear 0s infinite;

    & > div {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin: 4px;
      animation: ${scaling} 1.5s linear infinite;
      background-color: ${colours.primaryColour};
    }

    & > div:first-child {
      border-bottom-right-radius: 0;
      transform-origin: bottom right;
    }

    & > div:nth-child(2) {
      border-bottom-left-radius: 0;
      transform-origin: bottom left;
      animation-delay: 0.5s;
    }

    & > div:nth-child(3) {
      border-top-right-radius: 0;
      transform-origin: top right;
      animation-delay: 1.5s;
    }

    & > div:last-child {
      border-top-left-radius: 0;
      transform-origin: top left;
      animation-delay: 1s;
    }
  }
`;

function Loading() {
  return (
    <LoadingStyled>
      <div>
        <div />
        <div />
        <div />
        <div />
      </div>
    </LoadingStyled>
  );
}

export default Loading;
