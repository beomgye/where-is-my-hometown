import { Controller } from 'react-hook-form';
import { Form, Input } from '@/components';

const TradeForm = ({ control, ...props }) => {
  return (
    <Form
      index={2}
      title="거래 방식"
      description="전세, 월세, 매매를 선택해 주세요."
      buttonText="다음 단계"
      {...props}
    >
      <div>
        <Controller
          name="jeonse"
          control={control}
          render={({ field, fieldState: { error } }) => (
            // 임시로 넣음, 버튼 제작 예정
            <Input id="전세" type="button" error={error?.message} {...field} />
          )}
        />
        <Controller
          name="monthly"
          control={control}
          render={({ field, fieldState: { error } }) => (
            // 임시로 넣음, 버튼 제작 예정
            <Input id="월세" type="button" error={error?.message} {...field} />
          )}
        />
        <Controller
          name="trading"
          control={control}
          render={({ field, fieldState: { error } }) => (
            // 임시로 넣음, 버튼 제작 예정
            <Input id="매매" type="button" error={error?.message} {...field} />
          )}
        />
      </div>
    </Form>
  );
};

export default TradeForm;
