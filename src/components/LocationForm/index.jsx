import { Form } from '@/components';

const LocationForm = ({ control, ...props }) => {
  return (
    <Form
      index={1}
      title="위치 선택"
      description="위치를 선택해 주세요"
      buttonText="다음 단계"
      goBackButton
      {...props}
    >
      {/* 지도 출력 */}
      {/* 다음 포스트 코드 */}
    </Form>
  );
};

export default LocationForm;
