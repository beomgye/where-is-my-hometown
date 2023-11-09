import { Controller } from 'react-hook-form';
import styled from 'styled-components';
import { StepOptions } from '@/constants';
import Form from '@/components/common/Form';
import Address from '@/components/common/Address';

const locationInputRule = {
  validate: (value) => {
    return value === '주소를 입력해주세요.' ? 'This field is required' : undefined;
  }
};

const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
`;

type Formtype = {
  setBcode: (bcdoe: number) => void;
};

// useForm 함수를 호출할 떄 control 을 따로 타입지정을 하지 않아두 된다
const LocationForm = ({ setBcode, control, ...props }: Formtype) => {
  return (
    <Form
      title="위치 선택"
      description="위치를 선택해 주세요."
      navbarProps={{
        current: 1,
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

export default LocationForm;
