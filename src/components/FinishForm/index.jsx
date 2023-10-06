import { Form } from '@/components';

const FinishForm = ({ control, ...props }) => {
  return (
    <Form
      index={3}
      title="마무리 단계"
      description="총 마무리 단계 입니다"
      buttonText="확인"
      {...props}
    >
      {/* 선택 옵션 요약 창 */}
      {/* 추천 동네 갯수 설정 range바 */}
    </Form>
  );
};

export default FinishForm;
