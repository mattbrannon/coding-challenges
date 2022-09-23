import { useEffect, useState } from 'react';
import { Check } from './Check';
import { Wrapper, Box, Span } from './styles';

export const Checkbox = ({ state, name, dispatch, children }) => {
  const [isChecked, setIsChecked] = useState(state[name]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(
    () => dispatch({ name, value: isChecked }),
    [name, isChecked, dispatch]
  );

  return (
    <Wrapper
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      onClick={() => setIsChecked(!isChecked)}
      name={name}
    >
      <Box
        role="checkbox"
        aria-labelledby={name}
        aria-checked={isChecked}
        onKeyDown={(e) => e.code === 'Space' && setIsChecked(!isChecked)}
        tabIndex={0}
        isHovering={isHovering}
        isChecked={isChecked}
      >
        <Check isChecked={isChecked} />
      </Box>
      <Span id={name}>{children}</Span>
    </Wrapper>
  );
};
