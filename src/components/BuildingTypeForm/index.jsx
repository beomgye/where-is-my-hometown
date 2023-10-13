import { Controller } from 'react-hook-form';
import { Checkbox, Container, Form } from '@/components';
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
                key={`buildingType[${type.value}]`}
                name={`buildingType[${type.label}]`}
                control={control}
                render={({ field }) => (
                  <Checkbox
                    id={`buildingType[${type.id}]`}
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

export default BuildingTypeForm;
