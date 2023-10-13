import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { Form } from '@/components';
import { Steps } from '@/types/step';
import Address from '../Address';

const LocationForm = ({ control, setBcode, ...props }) => {
  return (
    <Form
      title="위치 선택"
      description="위치를 선택해 주세요"
      navbarProps={{
        current: 1,
        steps: Steps
      }}
      buttonText="다음 단계"
      goBackButton
      {...props}
    >
      <Container>
        <Controller
          name="location"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <Address
              setBcode={setBcode}
              error={error?.message}
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
