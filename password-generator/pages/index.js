import Head from 'next/head';
import { useCallback, useEffect, useReducer, useState } from 'react';

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

export default function PasswordGenerator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [password, setPassword] = useState(generatePassword(initialState));
  const [meter, setMeter] = useState({});
  const [style, setStyle] = useState({ opacity: 0 });

  const updatePassword = useCallback(() => {
    const count = getSettingsCount(state);
    const password = generatePassword(state);
    const strength = calculateStrength(password);

    setMeter({ ...strength, count });
    setPassword(password);
  }, [state]);

  useEffect(() => updatePassword(), [updatePassword]);
  useEffect(() => {
    setStyle({ opacity: 1, transition: 'opacity 0.3s linear' });
  }, []);

  return (
    <>
      <Main style={style}>
        <Head>
          <title>Password Generator</title>
          <meta name="description" content="Strong password generator" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1>Password Generator</h1>

        <GeneratedPassword
          count={meter.count}
          state={state}
          password={password}
        />

        <Bottom>
          <RangeSlider
            state={state}
            dispatch={dispatch}
            name={length}
            max={28}
          />
          <Boxes>
            <Checkbox dispatch={dispatch} name={uppercase}>
              Include Uppercase Letters
            </Checkbox>
            <Checkbox dispatch={dispatch} name={lowercase}>
              Include Lowercase Letters
            </Checkbox>
            <Checkbox dispatch={dispatch} name={numbers}>
              Include Numbers
            </Checkbox>
            <Checkbox dispatch={dispatch} name={symbols}>
              Include Symbols
            </Checkbox>
            <Checkbox dispatch={dispatch} name={hidden}>
              Hide Password
            </Checkbox>
            <Checkbox dispatch={dispatch} name={entropy}>
              Show Entropy
            </Checkbox>
          </Boxes>

          <Meter meter={meter} state={state} />

          <Button onClick={updatePassword}>Generate</Button>
        </Bottom>
      </Main>
    </>
  );
}
