import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { Form, Checkbox } from '@/components';
import { TradeTypeOptions } from '../../types/plan';
import { Steps } from '@/types/step';

const TradeForm = ({ control, ...props }) => {
  return (
    <Form
      title="거래 방식"
      description="전세, 월세, 매매를 선택해 주세요."
      navbarProps={{
        current: 2,
        steps: Steps
      }}
      buttonText="다음 단계"
      goBackButton
      {...props}
    >
      <Container>
        {TradeTypeOptions && TradeTypeOptions.length > 0
          ? TradeTypeOptions.map((type) => (
              <Controller
                key={`trade[${type.id}]`}
                name={`trade[${type.label}]`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={`trade[${type.id}]`}
                    checkboxProps={type}
                    {...field}
                    onChange={() => field.onChange(type.value === field.value ? null : type.value)}
                    value={type.value === field.value ? 'on' : 'off'}
                  />
                )}
              />
            ))
          : ''}
      </Container>
    </Form>
  );
};

const Container = styled.div`
  width: 450px;
  height: 275px;
  flex-shrink: 0;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default TradeForm;
