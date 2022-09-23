import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Password = styled.input`
  margin: 0;
  background: none;
  border: none;
  color: var(--white);
  font-size: var(--medium);

  padding: 0;
  outline: none;
  display: block;
  /* overflow: hidden; */
  width: calc(100% - 28px);

  @media (max-width: 420px) {
    font-size: var(--regular);
  }
`;

export const Text = styled.span`
  display: block;
  padding: 8px 0;

  font-size: var(--regular);
  background: var(--darkGrey);
  color: var(--green);
`;

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: absolute;
  right: 0;
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;

  padding: var(--regular) var(--large);
  background: var(--darkGrey);

  @media (max-width: 420px) {
    padding: var(--regular);
  }
`;

export const Button = styled.button`
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  background: none;
  border: none;

  display: block;
`;
