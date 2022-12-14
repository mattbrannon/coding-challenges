import { Wrapper } from './styles';

const red = 'var(--red)';
const orange = 'var(--orange)';
const yellow = 'var(--yellow)';
const green = 'var(--green)';
const transparent = 'transparent';

export const Blocks = ({ ...props }) => {
  return (
    <Wrapper>
      {Array.from({ length: 4 }).map((_, i) => {
        const index = i + 1;
        const style = getStyle({ index, ...props });
        return <span style={style} key={i}></span>;
      })}
    </Wrapper>
  );
};

const getMeterColor = (level) => {
  switch (level) {
    case 1:
      return red;
    case 2:
      return orange;
    case 3:
      return yellow;
    case 4:
      return green;
    default:
      return 'none';
  }
};

const getStyle = ({ index, strength }) => {
  const hasSettings = strength && !!Object.keys(strength).length;
  const hasColor = hasSettings && index <= strength.level;
  const meterColor = getMeterColor(strength?.level);
  const background = hasColor ? meterColor : transparent;
  const border = !hasColor ? '2px solid var(--white)' : 'none';

  return {
    background,
    border,
    width: '10px',
    height: '28px',
  };
};
