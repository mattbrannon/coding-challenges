import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;

  height: 76px;
  background: var(--veryDarkGrey);
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Label = styled.label`
  font-size: var(--regular);
  color: var(--grey);
`;

export const Strength = styled.output`
  font-size: var(--medium);
  color: var(--white);
  margin-right: 16px;
`;

export const Right = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  @media (max-width: 420px) {
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;
