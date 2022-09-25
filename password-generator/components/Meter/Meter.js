import { Section, Label, Strength, Right } from './styles';
import { Blocks } from './Blocks';
// import styled from 'styled-components';

export const Meter = ({ ...props }) => {
  const { label, value } = getDisplay(props);

  return (
    <Section aria-live="polite" aria-atomic="true">
      <Label>{label}</Label>
      <Right>
        <Strength>{value}</Strength>
        <Blocks {...props} />
      </Right>
    </Section>
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
  const entropy = strength?.entropy?.toFixed(2) ?? 0;
  return { label, value, entropy };
};
