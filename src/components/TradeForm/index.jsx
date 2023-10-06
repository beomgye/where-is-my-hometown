import { Form } from '@/components';

const TradeForm = ({ control, ...props }) => {
  return (
    <Form
      index={2}
      title="거래 방식"
      description="전세, 월세, 매매를 선택해 주세요."
      buttonText="다음 단계"
      goBackButton
      {...props}
    >
      {/* 거래 방식 선택 버튼  */}
    </Form>
  );
};

export default TradeForm;
