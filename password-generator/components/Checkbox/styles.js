import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: fit-content;
  cursor: pointer;
`;

export const Box = styled.div.attrs(({ isChecked, isHovering }) => {
  return {
    style: {
      '--background': isChecked ? 'var(--green)' : 'var(--darkGrey)',
      '--borderColor':
        isChecked || isHovering ? 'var(--green)' : 'var(--white)',
    },
  };
})`
  display: grid;
  place-content: center;
  height: 20px;
  width: 20px;
  border: 2px solid var(--borderColor);
  background-color: var(--background);
  -webkit-appearance: none;

  &:hover {
    border: 2px solid var(--green);
  }

  transition: background-color 0.1s ease, border 0.065s ease 0.05s;
`;

export const Span = styled.span`
  font-size: var(--regular);
  color: var(--white);

  margin-left: 24px;
  @media (max-width: 420px) {
    margin-left: 20px;
  }
`;
