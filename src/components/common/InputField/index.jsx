import styled from 'styled-components';
import React from 'react';
import { denimColor, errorColor, secondaryColor } from '@/styles/variables';
import { formatMoney } from '@/utils/formatMoney';

const InputField = React.forwardRef(function InputField(
  { label, id, error, value, ...props },
  ref
) {
  return (
    <Container>
      <LabelContainer>
        <Label htmlFor={id}>{label}</Label>
        {error && <Error>{error}</Error>}
      </LabelContainer>
      <Input ref={ref} type="text" id={id} value={formatMoney(value)} {...props} />
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  width: 450px;
  height: 72px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`;

const LabelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Label = styled.label`
  color: ${secondaryColor};
`;

const Error = styled.span`
  color: ${errorColor};
  text-align: right;
`;

const Input = styled.input`
  position: relative;
  padding: 0 16px;
  border: none;
  width: 418px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid rgba(214, 217, 230, 1);
  background-color: #fff;
  color: ${denimColor};
  font-size: 16px;
  font-weight: 500;
  line-height: normal;

  &::placeholder {
    color: rgba(150, 153, 170, 1);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    left: 16px;
  }
`;

export default InputField;
