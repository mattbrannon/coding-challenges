import { useEffect, useState } from 'react';
import { Check } from './check';
import { Wrapper, Box, Span } from './styles';

export const Checkbox = ({ name, dispatch, children }) => {
  const [isChecked, setIsChecked] = useState(false);
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
        onKeyDown={(e) => e.code === 'Space' && setIsChecked(!isChecked)}
        tabIndex={0}
        isHovering={isHovering}
        isChecked={isChecked}
      >
        <Check isChecked={isChecked} />
      </Box>
      <Span>{children}</Span>
    </Wrapper>
  );
};
