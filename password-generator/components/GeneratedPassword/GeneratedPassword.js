import { useState, useRef } from 'react';
import { CopyIcon } from './Icon';
import { Wrapper, Password, Right, Text } from './styles';
// import { Top } from '../Layouts';

export const GeneratedPassword = ({ state, password, ...props }) => {
  const placeholder = 'P4$5w0rD!';
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef();

  const showCopiedText = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 2000);
  };

  const copyText = async (selectedText) => {
    try {
      await navigator.clipboard.writeText(selectedText);
    }
    catch {}
  };

  const onClick = () => {
    copyText(ref.current.value).then(() => showCopiedText());
  };

  return (
    <>
      <Wrapper>
        <Password
          placeholder={placeholder}
          value={password}
          readOnly={true}
          tabIndex={-1}
          ref={ref}
          type={state.hidePassword ? 'password' : 'text'}
        />

        <Right>
          {isClicked ? (
            <Text>COPIED</Text>
          ) : (
            <CopyIcon onClick={onClick} {...props} />
          )}
        </Right>
      </Wrapper>
    </>
  );
};
