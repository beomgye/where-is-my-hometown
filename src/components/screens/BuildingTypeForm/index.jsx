import { Controller } from 'react-hook-form';
import { Container, Form, Radio } from '@/components';
import { BuildingTypeOptions } from '@/types/option';
import { Steps } from '@/types/step';

const BuildingTypeForm = ({ control, watch, ...props }) => {
  const selectedValue = watch('buildingType');

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
                name="buildingType"
                control={control}
                render={({ field }) => (
                  <Radio
                    id={`buildingType[${type.id}]`}
                    name="buildingType"
                    radioProps={type}
                    value={type.value}
                    onChange={() => field.onChange(type.value)}
                    checked={selectedValue === type.value}
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
