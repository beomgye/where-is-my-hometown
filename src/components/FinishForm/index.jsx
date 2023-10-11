import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { Form } from '@/components';
import { Steps } from '@/types/step';

const FinishForm = ({ control, ...props }) => {
  return (
    <Form
      title="마무리 단계"
      description="총 마무리 단계 입니다"
      navbarProps={{
        current: 4,
        steps: Steps
      }}
      buttonText="확인"
      goBackButton
      {...props}
    >
      <Container>
        <Controller
          name="finish"
          control={control}
          render={({ field }) => <div {...field}>Controller 를 활용하여 구현할 것</div>}
        />
        {/* 선택 옵션 요약 창 */}
        {/* 추천 동네 갯수 설정 range바 */}
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

export default FinishForm;
