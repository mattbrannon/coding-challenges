import styled, { css } from 'styled-components';

const calculateGradient = (stepValue) => {
  const gradient = `linear-gradient(
    90deg, 
    var(--green) 0%, 
    var(--green) ${Math.min(stepValue, 99)}%,
    var(--veryDarkGrey) ${stepValue}%,
    var(--veryDarkGrey) 99%
  )`;

  return gradient;
};

export const Range = styled.input.attrs(({ stepValue }) => {
  return {
    type: 'range',
    style: {
      '--gradient': calculateGradient(stepValue),
    },
  };
})`
  -webkit-appearance: none;
  -moz-appearance: none;
  background: var(--gradient);
  width: 100%;
  height: 8px;

  &::-webkit-slider-thumb {
    ${() => thumb}
  }

  ::-moz-range-thumb {
    ${() => thumb}
  }
`;

export const Wrapper = styled.div`
  display: grid;
  gap: 16px;
  padding: 16px 0;
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  color: var(--white);
  font-size: var(--regular);
`;

export const LengthValue = styled.div`
  color: var(--green);
  font-size: var(--large);
`;

const thumb = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  cursor: pointer;

  height: 28px;
  width: 28px;
  border-radius: 50%;

  background: var(--white);
  &:hover {
    background: var(--green);
  }

  &:active {
    background: var(--veryDarkGrey);
    border: 2px solid var(--green);
  }
`;
