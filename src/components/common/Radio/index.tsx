import { forwardRef } from 'react';
import styled from 'styled-components';
import {
  activeColor,
  borderColor,
  primaryColor,
  secondaryColor,
  whiteColor
} from '@/styles/variables';

interface RadioProps {
  id: string;
  name: string;
  value: string;
  onChange: (checked) => void;
  checked: boolean;
  icon: React.ReactNode;
}

const Container = styled.div<{ checked: boolean }>`
  background-color: ${(props) => (props.checked ? activeColor : whiteColor)};
  border: 1px solid ${(props) => (props.checked ? primaryColor : borderColor)};
  border-radius: 8px;
  padding: 0 40px 0 24px;
  cursor: pointer;
  transition: border-color 0.3s;
  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  color: ${secondaryColor};
`;

const Input = styled.input<{ defaultChecked: boolean }>`
  position: relative;
  border-radius: 4px;
  width: 17.422px;
  height: 17.531px;
  appearance: none;
  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('/icons/checkbox-unchecked.svg') no-repeat center;
    content: '';
  }

  ${({ defaultChecked }) =>
    defaultChecked &&
    `
    &:before {
      background: url('/icons/checkbox-checked.svg') no-repeat center;
    }
  `}
`;

const Icon = styled.span`
  height: 100%;
  position: absolute;
  right: 16px;
  display: flex;
  align-items: center;
`;

const Label = styled.label``;

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ id, name, value, onChange, checked, icon, ...props }, ref) => {
    return (
      <Container checked={checked} onClick={() => onChange(() => onChange(!checked))}>
        <Input id={id} name={name} type="radio" ref={ref} defaultChecked={checked} {...props} />
        <Label>{value}</Label>
        <Icon>{icon}</Icon>
      </Container>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
