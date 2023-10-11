import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { Form, Input } from '@/components';
import { Steps } from '@/types/step';

const defaultInputRule = {
  required: 'This field is required'
};

const AssetInputForm = ({ control, ...props }) => {
  return (
    <Form
      title="자산 입력"
      description="갖고 있는 자산을 입력해 주세요"
      navbarProps={{
        current: 0,
        steps: Steps
      }}
      buttonText="다음 단계"
      {...props}
    >
      <Container>
        <Controller
          name="assets"
          control={control}
          rules={defaultInputRule}
          render={({ field, fieldState: { error } }) => (
            <Input
              id="assets"
              label="자산"
              type="number"
              placeholder="자산을 입력해 주세요."
              error={error?.message}
              {...field}
            />
          )}
        />
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

export default AssetInputForm;
