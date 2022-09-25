import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const Password = styled.input`
  display: block;
  margin: 0;
  padding: 0;
  outline: none;
  background: none;
  border: none;

  width: calc(100% - 28px);

  color: var(--white);
  font-size: var(--medium);
  font-family: JetBrains Mono;

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
  min-height: 24px;
  height: 24px;
`;

// export const Top = styled.section`
//   display: flex;
//   flex-direction: column;

//   padding: var(--regular) var(--large);
//   background: var(--darkGrey);

//   @media (max-width: 420px) {
//     padding: var(--regular);
//   }
// `;

export const Button = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  min-height: 24px;
  display: block;
`;
