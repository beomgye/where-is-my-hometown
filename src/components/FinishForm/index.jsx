import { Form } from '@/components';
import { Steps } from '@/types/step';

const FinishForm = ({ subscription, ...props }) => {
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
      {/* 선택 옵션 요약 창 */}
      {/* 추천 동네 갯수 설정 range바 */}
    </Form>
  );
};

export default FinishForm;
