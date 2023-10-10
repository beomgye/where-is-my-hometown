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
      {/* 지도 출력 */}
      {/* 다음 포스트 코드 */}
    </Form>
  );
};

export default LocationForm;
