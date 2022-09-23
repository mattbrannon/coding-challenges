import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  height: 76px;
  background: var(--veryDarkGrey);
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const Label = styled.div`
  font-size: var(--regular);
  color: var(--grey);
`;

export const Strength = styled.div`
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