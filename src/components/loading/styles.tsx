import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const rotateAfter = keyframes`
  to {
    transform: rotate(-360deg) scale(0.5);
  }
`;

export const LoadingWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  --size: 50px;
  --color1: #8264c3;
  --color2: #1a1a1a;
  width: var(--size);
  height: var(--size);
  border-top: calc(var(--size) / 10) solid transparent;
  border-left: calc(var(--size) / 10) solid transparent;
  border-bottom: calc(var(--size) / 10) solid var(--color1);
  border-right: calc(var(--size) / 10) solid var(--color1);
  border-radius: 999px;
  transform: rotate(0);
  animation: ${rotate} 1s linear infinite;

  &:after {
    content: '';
    position: absolute;
    width: var(--size);
    height: var(--size);
    border-bottom: calc(var(--size) / 10) solid var(--color2);
    border-right: calc(var(--size) / 10) solid var(--color2);
    border-left: calc(var(--size) / 10) solid transparent;
    border-top: calc(var(--size) / 10) solid transparent;
    border-radius: 999px;
    top: -25%;
    left: -25%;
    transform: rotate(0) scale(0.5);
    animation: ${rotateAfter} 0.5s linear infinite;
  }
`;
