import { useRef } from 'react';
import styled from 'styled-components';

const Checkbox = ({ checkboxProps: { label }, value, onClick, ...props }) => {
  const inputRef = useRef(null);

  return (
    <Container isChecked={value === 'on'} onClick={() => inputRef?.current?.click()}>
      <Input type="checkbox" ref={inputRef} {...props} />
      <Label>{label}</Label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  background-color: ${(props) =>
    props.isChecked ? 'rgba(72, 62, 255, 1)' : 'rgba(255, 255, 255, 1)'};
  border: 1px solid
    ${(props) => (props.isChecked ? 'rgba(72, 62, 255, 1)' : 'rgba(214, 217, 230, 1)')};
  border-radius: 8px;
  padding: 11px 16px 12px;

  cursor: pointer;
  transition: border-color 0.3s;

  &:hover {
    border-color: rgba(72, 62, 255, 1);
  }
`;

const Input = styled.input`
  width: 20px;
  height: 20px;
  border: 1px solid rgba(214, 217, 230, 1);
  border-radius: 0px;
  appearance: none;
`;

const Label = styled.label``;

export default Checkbox;
