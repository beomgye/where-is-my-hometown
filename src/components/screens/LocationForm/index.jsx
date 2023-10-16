import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { Address, Form } from '@/components';
import { Step, StepOptions } from '@/constants';

const locationInputRule = {
  validate: (value) => {
    return value === '주소를 입력해주세요.' ? 'This field is required' : undefined;
  }
};

const LocationForm = ({ control, setBcode, ...props }) => {
  return (
    <Form
      title="위치 선택"
      description="위치를 선택해 주세요."
      navbarProps={{
        current: Step.LOCATION,
        stepOptions: StepOptions
      }}
      buttonText="다음 단계"
      goBackButton
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

const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

export default LocationForm;
