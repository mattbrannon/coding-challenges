import styled from 'styled-components';

export const Main = styled.main`
  display: grid;
  gap: 16px;
  padding: min(2vw, 16px);
  padding-top: 64px;
  padding-bottom: 64px;
  max-width: 540px;
  margin: 0 auto;
  align-content: center;
  min-height: 100vh;
`;

export const Top = styled.section`
  display: flex;
  flex-direction: column;

  padding: var(--regular) var(--large);
  background: var(--darkGrey);

  @media (max-width: 420px) {
    padding: var(--regular);
  }
`;

export const Bottom = styled.section`
  background: var(--darkGrey);

  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 0 32px 32px;

  min-height: 528px;

  @media (max-width: 420px) {
    padding: 0 16px 16px;
    min-height: 423px;
  }
`;

export const Boxes = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
