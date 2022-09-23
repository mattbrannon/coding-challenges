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
      <Top>
        <ValueLabel htmlFor="char-length">Character Length</ValueLabel>
        <LengthValue>{value}</LengthValue>
      </Top>
      <Input
        id="char-length"
        onChange={onChange}
        value={value}
        stepValue={stepValue}
        {...props}
      />
    </Wrapper>
  );
};
