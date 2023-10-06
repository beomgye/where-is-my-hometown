import { Form } from '@/components';

const BuildingTypeForm = ({ control, ...props }) => {
  return (
    <Form
      index={0}
      title="건물 유형"
      description="아파트, 빌라, 오피스텔을 선택하세요"
      buttonText="다음 단계"
      goBackButton
      {...props}
    >
      {/* 건물 유형 선택 버튼 */}
    </Form>
  );
};

export default BuildingTypeForm;
