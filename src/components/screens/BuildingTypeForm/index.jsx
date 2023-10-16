import { Controller } from 'react-hook-form';
import { FaBuilding, FaHome, FaHouseUser, FaCity } from 'react-icons/fa';
import { Container, Form, Radio } from '@/components';
import { BuildingTypeOptions, StepOptions } from '@/constants';

const getBuildingIcon = (type) => {
  switch (type) {
    case '아파트':
      return <FaBuilding />;
    case '연립':
      return <FaHouseUser />;
    case '단독':
      return <FaHome />;
    case '주택종합':
      return <FaCity />;
    default:
      return null;
  }
};

const BuildingTypeForm = ({ control, watch, ...props }) => {
  const selectedValue = watch('buildingType');

  return (
    <Form
      title="건물 유형"
      description="아파트, 빌라, 오피스텔을 선택하세요"
      navbarProps={{
        current: 3,
        stepOptions: StepOptions
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
                    onChange={() => field.onChange(type.id)}
                    checked={selectedValue === type.id}
                    icon={getBuildingIcon(type.value)}
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
