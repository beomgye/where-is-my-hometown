import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { Checkbox, Form } from '@/components';
import { BuildingTypeOptions } from '@/types/plan';
import { Steps } from '@/types/step';

const BuildingTypeForm = ({ control, ...props }) => {
  return (
    <Form
      title="건물 유형"
      description="아파트, 빌라, 오피스텔을 선택하세요"
      navbarProps={{
        current: 3,
        steps: Steps
      }}
      buttonText="다음 단계"
      goBackButton
      {...props}
    >
      <Container>
        {BuildingTypeOptions && BuildingTypeOptions.length > 0
          ? BuildingTypeOptions.map((type) => (
              <Controller
                key={`building[${type.id}]`}
                name={`building[${type.label}]`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={`building[${type.id}]`}
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

export default BuildingTypeForm;
