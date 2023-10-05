import { Controller } from 'react-hook-form';
import { Form, Input } from '@/components';

const AssetInputForm = ({ control, ...props }) => {
  return (
    <Form
      index={0}
      title="자산 입력"
      description="갖고 있는 자산을 입력해 주세요"
      buttonText="다음 단계"
      {...props}
    >
      <Controller
        name="assets"
        control={control}
        render={({ field, fieldState: { error } }) => (
          <Input
            id="자산"
            type="number"
            placeholder="자산을 입력해 주세요."
            error={error?.message}
            {...field}
          />
        )}
      />
    </Form>
  );
};

export default AssetInputForm;
