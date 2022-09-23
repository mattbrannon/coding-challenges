import styled from 'styled-components';

import { calculateStrength, generatePassword, getSettingsCount } from '../api';
import { Bottom, Boxes, Main } from '../components/Layouts';

import Button from '../components/Button';
import Checkbox from '../components/Checkbox';
import GeneratedPassword from '../components/GeneratedPassword';
import Meter from '../components/Meter';
import RangeSlider from '../components/RangeSlider';

const preferences = {
  hidePassword: false,
  showEntropy: false,
};

const initialState = {
  uppercase: false,
  lowercase: false,
  numbers: false,
  symbols: false,
  length: 8,
  preferences,
};

const uppercase = 'uppercase';
const lowercase = 'lowercase';
const numbers = 'numbers';
const symbols = 'symbols';
const length = 'length';
const hidden = 'hidePassword';
const entropy = 'showEntropy';

const reducer = (state, action) => {
  switch (action.name) {
    case uppercase:
    case lowercase:
    case numbers:
    case symbols:
    case length: {
      return { ...state, [action.name]: action.value };
    }
    case hidden:
    case entropy: {
      const preferences = { ...state.preferences, [action.name]: action.value };
      return { ...state, preferences };
    }
  }
};

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

const Top = styled.div`
  background: var(--darkGrey);
  display: flex;
  flex: 1;
`;
const Bottom = styled.div`
  background: var(--darkGrey);
  height: 100%;
  display: flex;
`;

const Wrapper = styled.div`
  padding: 16px;
`;

const Columns = styled(Wrapper)`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const Span = styled.span`
  outline: 1px solid deeppink;
`;

const Password = styled(Span)`
  font-family: 'JetBrains Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
`;
