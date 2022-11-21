import styled from 'styled-components';

export const OptionText = styled.label`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.ml}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  text-shadow: ${p => p.theme.shadows.textShadow};
  margin-bottom: ${p => p.theme.space[2]}px;
  text-align: center;
  cursor: pointer;

  :not(:last-child) {
    margin-right: ${p => p.theme.space[2]}px;
  }
`;

export const Radio = styled.input`
  cursor: pointer;
  position: relative;
  height: 12px;
  width: 12px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid;
  }

  &:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: red;
    transform: translate(-50%, -50%);
    visibility: visible;
  }
`;
