import { useState } from 'react';
import { Wrapper, Top, Input, ValueLabel, LengthValue } from './styles';

export const RangeSlider = ({ state: { length }, ...props }) => {
  const [value, setValue] = useState(length);
  const stepValue = Number((100 / props.max) * value);

  const onChange = (e) => {
    props.dispatch({ name: props.name, value: e.target.value });
    setValue(e.target.value);
  };

  return (
    <Wrapper>
      <Top aria-live="polite" aria-atomic="true">
        <ValueLabel htmlFor="char-length">Character Length</ValueLabel>
        <LengthValue id="char-length">{value}</LengthValue>
      </Top>
      <Input
        onChange={onChange}
        stepValue={stepValue}
        {...props}
        aria-hidden="true"
      />
    </Wrapper>
  );
};
