import styled from 'styled-components';

export default function PasswordGenerator() {
  return (
    <Mobile>
      <Container>
        <Title>Password Generator</Title>
        <Main></Main>
      </Container>
    </Mobile>
  );
}

const Mobile = styled.div`
  padding: 64px 16px;
  outline: 1px solid yellow;
  min-height: 100vh;
  outline-offset: -1px;
  display: grid;

  font-family: JetBrains Mono;
`;

const Container = styled.div`
  outline: 1px solid yellow;
  max-width: 540px;
  width: 100%;
  margin: 0 auto;
  padding: 64px 16px;
  height: 100%;
`;

const Title = styled.h1`
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 700;
  font-size: var(--medium);
  text-align: center;
  color: var(--grey);
  margin: 0;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: var(--white);
  outline: 1px solid white;
  height: inherit;
`;
