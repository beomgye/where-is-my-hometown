import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { Form } from '@/components';
import { Steps } from '@/types/step';

const LocationForm = ({ control, ...props }) => {
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
          render={({ field }) => <div {...field}>Controller 를 활용하여 구현할 것</div>}
        />
        {/* 지도 출력 */}
        {/* 다음 포스트 코드 */}
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
