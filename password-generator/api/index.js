const getMatches = (password) => {
  const low = /[a-z]+/g;
  const up = /[A-Z]+/g;
  const nums = /[0-9]+/g;
  const syms = /[!@#$%^&*()_\-+={[}\]|\\<,>.?/;:'"`~ ]+/g;

  const lowercase = password.match(low);
  const uppercase = password.match(up);
  const numbers = password.match(nums);
  const symbols = password.match(syms);

  return { lowercase, uppercase, numbers, symbols };
};

const random = (n) => Math.floor(Math.random() * (n + 1));

const charMap = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_-+={[}]|\\<,>.?/;:\'"`~ ',
};

const getUsableChars = (state) => {
  const chars = Object.entries(state)
    .map(([name, value]) => (value ? charMap[name] : null))
    .filter((v) => v)
    .join('');
  return chars;
};

const getSettings = (password, state) => {
  const matches = getMatches(password);

  const actual = Object.keys(charMap).filter((key) => matches[key]);
  const expected = Object.keys(state).filter(
    (key) => key in charMap && state[key]
  );

  return { actual, expected };
};


const getCharSpace = (password) => {
  return getSettingsUsed(password).reduce(
    (acc, key) => charMap[key].length + acc,
    0
  );
};

export const calculateEntropy = (password) => {
  const chars = getCharSpace(password);
  const n = Math.pow(chars, password.length);
  return Math.log10(n) / Math.log10(2);
};

export const getStrength = (level) => {
  const text =
    level === 1
      ? 'TOO WEAK!'
      : level === 2
      ? 'WEAK'
      : level === 3
      ? 'MEDIUM'
      : level === 4
      ? 'STRONG'
      : '';

  return text;
};

export const calculateStrength = (password) => {
  const e = calculateEntropy(password);
  const level =
    e >= 44 && e < 52
      ? 1
      : e >= 52 && e < 60
      ? 2
      : e >= 60 && e < 72
      ? 3
      : e >= 72
      ? 4
      : 1;

  const text = getStrength(level);
  const entropy = e.toFixed(4);

  return { text, entropy, level };
};

export const generatePassword = (state) => {
  const chars = getUsableChars(state);
  let password = '';

  for (let i = 0; i < state.length; i++) {
    password += chars[random(chars.length - 1)] ?? '';
  }

  password = verifyPassword(password, state);

  return password;
};

const verifyPassword = (password, state) => {
  let numSettings = Object.keys(getCurrentSettings(state)).length;
  let usedSettings = getSettingsUsed(password).length;

  while (state.length >= numSettings && numSettings > usedSettings) {
    password = generatePassword(state);
    numSettings = Object.keys(getCurrentSettings(state)).length;
    usedSettings = getSettingsUsed(password).length;
  }
  return password;
};
