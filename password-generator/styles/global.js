import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: JetBrains Mono;
    src: url(/fonts/JetBrainsMono-Bold.ttf);
    font-display: swap;
  }

  :root {
    --red: #f64a4a;
    --orange: #fb7c58;
    --yellow: #f8cd65;
    --green: #a4ffaf;
    --white: #e6e5ea;
    --grey: #817d92;
    --darkGrey: #24232c;
    --veryDarkGrey: #18171f;
    --size32: ${32 / 16}rem;
    --size24: ${24 / 16}rem;
    --size18: ${18 / 16}rem;
    --size16: ${16 / 16}rem;

    --large: var(--size32);
    --medium: var(--size24);
    --regular: var(--size18);

    --breakpoint: 420px;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font: inherit;

  }

  html {
    background: linear-gradient(180deg, #14131b 0%, #08070b 100%);
    background-attachment: fixed;
    height: 100%;
  }

  body {
    font-family: JetBrains Mono;
    font-weight: 700;
    font-style: normal;
    height: inherit;
  }

  h1 {
    font-size: var(--medium);
    color: var(--grey);
    text-align: center;
    
  }

  button
  input {
    font: inherit;
  }
  button: {
    cursor: pointer;
  }

  @media (max-width: 420px) {
    :root {
      --large: var(--size24);
      --medium: var(--size18);
      --regular: var(--size16);
    }
  }
`;
