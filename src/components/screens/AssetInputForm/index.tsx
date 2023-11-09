import Form from '@/components/common/Form';
import InputField from '@/components/common/InputField';
import { StepOptions } from '@/constants';
import { MultiFormProps } from '@/types/form';
import { FormHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';

interface AssetInputFormProps extends FormHTMLAttributes<HTMLFormElement> {
  control: Control<MultiFormProps>;
}

const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

const defaultInputRule = {
  required: 'This field is required'
};

const AssetInputForm = ({ control, ...props }: AssetInputFormProps) => {
  return (
    <Form
      title="자산 입력"
      description="갖고 있는 자산을 입력해 주세요."
      navbarProps={{
        current: 0,
        stepOptions: StepOptions
      }}
      buttonText="다음 단계"
      {...props}
    >
      <Container>
        <Controller
          name="assets"
          control={control}
          rules={defaultInputRule}
          render={({ field, fieldState: { error } }) => (
            <InputField
              id="assets"
              label="자산"
              type="text"
              placeholder="자산을 입력해 주세요."
              error={error?.message}
              ref={field.ref}
              value={field.value}
              onChange={(newValue) => {
                field.onChange(newValue);
              }}
              {...field}
            />
          )}
        />
      </Container>
    </Form>
  );
};

export default AssetInputForm;
