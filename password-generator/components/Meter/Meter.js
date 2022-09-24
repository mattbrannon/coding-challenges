import { Container, Label, Strength, Right } from './styles';
import { Blocks } from './Blocks';

export const Meter = ({ ...props }) => {
  const { label, value } = getDisplay(props);

  return (
    <Container>
      <Label>{label}</Label>
      <Right>
        <Strength>{value}</Strength>
        <Blocks {...props} />
      </Right>
    </Container>
  );
};

const getDisplay = ({ state, strength }) => {
  const showEntropy = state.showEntropy;
  const label = showEntropy ? 'Entropy' : 'Strength';
  const value = strength?.entropy
    ? showEntropy
      ? strength.entropy.toFixed(2)
      : strength.label
    : '';
  return { label, value };
};
