import { useState } from 'react';
import { Wrapper, Top, Range, Label, LengthValue } from './styles';

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
        <Label htmlFor="range">Character Length</Label>
        <LengthValue>{value}</LengthValue>
      </Top>
      <Range
        id="range"
        onChange={onChange}
        value={value}
        stepValue={stepValue}
        {...props}
      />
    </Wrapper>
  );
};
