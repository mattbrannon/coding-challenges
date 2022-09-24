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
  const matches = getMatches(password);
  return Object.keys(charMap)
    .filter((key) => matches[key])
    .reduce((acc, key) => charMap[key].length + acc, 0);
};

const calculateEntropy = (password) => {
  const chars = getCharSpace(password);
  const n = Math.pow(chars, password.length);
  return Math.log10(n) / Math.log10(2);
};

const compare = (password, state) => {
  const { actual, expected } = getSettings(password, state);
  const hasEnoughLength = state.length >= expected.length;
  const isMismatched = expected.length !== actual.length;
  return hasEnoughLength && isMismatched;
};

const createPassword = (state) => {
  const chars = getUsableChars(state);
  let password = '';

  for (let i = 0; i < state.length; i++) {
    password += chars[random(chars.length - 1)] ?? '';
  }

  return password;
};

const verifyPassword = (password, state) => {
  let shouldRunAgain = compare(password, state);

  while (shouldRunAgain) {
    password = createPassword(state);
    shouldRunAgain = compare(password, state);
  }
  return password;
};

export const generatePassword = (state) => {
  const password = createPassword(state);
  return verifyPassword(password, state);
};

const labels = [
  { level: 1, label: 'TOO WEAK!', entropy: [1, 48] },
  { level: 2, label: 'WEAK', entropy: [48, 62] },
  { level: 3, label: 'MEDIUM', entropy: [62, 74] },
  { level: 4, label: 'STRONG', entropy: [74, Infinity] },
];

export const getPasswordStrength = (password) => {
  const entropy = calculateEntropy(password);
  return labels
    .filter((obj) => {
      const [low, high] = obj.entropy;
      return entropy >= low && entropy <= high;
    })
    .map(({ level, label }) => ({ level, label, entropy }))
    .find((o) => o);
};
