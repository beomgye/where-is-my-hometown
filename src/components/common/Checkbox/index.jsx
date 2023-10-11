import { useRef } from 'react';
import styled from 'styled-components';
import { activeColor, borderColor, primaryColor, whiteColor } from '@/styles/variables';

const Checkbox = ({ checkboxProps: { label }, value, onClick, ...props }) => {
  const inputRef = useRef(null);

  return (
    <Container checked={value === 'on'} onClick={() => inputRef?.current?.click()}>
      <Input type="checkbox" ref={inputRef} checked={value === 'on'} {...props} />
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => (props.checked ? activeColor : whiteColor)};
  border: 1px solid ${(props) => (props.checked ? primaryColor : borderColor)};
  border-radius: 8px;
  padding: 0 24px;
  cursor: pointer;
  transition: border-color 0.3s;

  min-height: 62px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: ${primaryColor};
  }
`;

const Input = styled.input`
  position: relative;
  background: ${primaryColor};
  border-color: ${primaryColor};
  border-radius: 4px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url() no-repeat center;
    content: '';
  }
`;

const Label = styled.label``;

export default Checkbox;
