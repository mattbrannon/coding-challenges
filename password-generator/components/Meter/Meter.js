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

const getDisplay = ({ state, meter }) => {
  const showEntropy = state.preferences.showEntropy;
  const label = showEntropy ? 'Entropy' : 'Strength';
  const value = meter.count ? (showEntropy ? meter.entropy : meter.text) : '';
  return { label, value };
};
