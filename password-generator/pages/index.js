import Head from 'next/head';
import { useCallback, useEffect, useReducer, useState } from 'react';

import { generatePassword, getPasswordStrength } from '../api';
import { Bottom, Boxes, Main, Top } from '../components/Layouts';

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
  ...preferences,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
  length: 12,
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
    case length:
    case hidden:
    case entropy: {
      return { ...state, [action.name]: action.value };
    }
  }
};

export default function PasswordGenerator() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [password, setPassword] = useState(generatePassword(initialState));
  const [strength, setStrength] = useState(getPasswordStrength(password));
  const [style, setStyle] = useState({ opacity: 0 });

  const updatePassword = useCallback(() => {
    const password = generatePassword(state);
    const strength = getPasswordStrength(password);
    setPassword(password);
    setStrength(strength);
  }, [state]);

  useEffect(() => updatePassword(), [updatePassword]);

  useEffect(() => {
    setStyle({ opacity: 1, transition: 'opacity 0.2s linear' });
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

        <Top>
          <GeneratedPassword
            strength={strength}
            state={state}
            password={password}
          />
        </Top>

        <Bottom>
          <RangeSlider
            state={state}
            dispatch={dispatch}
            name={length}
            max={28}
          />
          <Boxes>
            <Checkbox state={state} dispatch={dispatch} name={uppercase}>
              Include Uppercase Letters
            </Checkbox>
            <Checkbox state={state} dispatch={dispatch} name={lowercase}>
              Include Lowercase Letters
            </Checkbox>
            <Checkbox state={state} dispatch={dispatch} name={numbers}>
              Include Numbers
            </Checkbox>
            <Checkbox state={state} dispatch={dispatch} name={symbols}>
              Include Symbols
            </Checkbox>
            <Checkbox state={state} dispatch={dispatch} name={hidden}>
              Hide Password
            </Checkbox>
            <Checkbox state={state} dispatch={dispatch} name={entropy}>
              Show Entropy
            </Checkbox>
          </Boxes>

          <Meter strength={strength} state={state} />

          <Button onClick={updatePassword}>Generate</Button>
        </Bottom>
      </Main>
    </>
  );
}
