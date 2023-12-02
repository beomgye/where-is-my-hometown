import { FormHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';
import styled from 'styled-components';
import Address from '@/components/common/Address';
import Form from '@/components/common/Form';
import { StepOptions } from '@/constants';
import { MultiFormProps } from '@/types/form';

interface LocationFormProps extends FormHTMLAttributes<HTMLFormElement> {
  control: Control<MultiFormProps>;
  setBcode: (bcdoe: number) => void;
  goBackButton: boolean;
  onGoBack: () => void;
}

const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

const locationInputRule = {
  required: 'This field is required'
};

const LocationForm = ({
  control,
  setBcode,
  goBackButton,
  onGoBack,
  ...props
}: LocationFormProps) => {
  return (
    <Form
      title="위치 선택"
      description="위치를 선택해 주세요."
      navbarProps={{
        current: 1,
        stepOptions: StepOptions
      }}
      buttonText="다음 단계"
      goBackButton={goBackButton}
      onGoBack={onGoBack}
      {...props}
    >
      <Container>
        <Controller
          name="location"
          control={control}
          rules={locationInputRule}
          render={({ field, fieldState: { error } }) => (
            <Address
              setBcode={setBcode}
              error={error}
              address={field.value}
              changeAddress={(newValue) => {
                field.onChange(newValue);
              }}
            />
          )}
        />
      </Container>
    </Form>
  );
};

export default LocationForm;
