import styled from 'styled-components';
import { useState } from 'react';
import { Icon } from './Icon';

export const Button = ({ children, ...props }) => {
  const [fill, setFill] = useState('#24232C');

  return (
    <Wrapper
      onMouseOver={() => setFill('#A4FFAF')}
      onMouseLeave={() => setFill('#24232C')}
      {...props}
    >
      <span>{children}</span>
      <Icon fill={fill} />
    </Wrapper>
  );
};

const Wrapper = styled.button`
  min-height: 65px;
  width: 100%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--medium);

  font-size: var(--regular);
  background: var(--green);
  color: var(--darkGrey);

  &:hover {
    background: var(--darkGrey);
    color: var(--green);
    border: 2px solid var(--green);
  }
`;
