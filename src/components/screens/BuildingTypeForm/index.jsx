import { Controller } from 'react-hook-form';
import { FaBuilding, FaHome, FaHouseUser, FaCity } from 'react-icons/fa';
import { Container, Form, Radio } from '@/components';
import { Building, BuildingTypeOptions, Step, StepOptions } from '@/constants';

const getBuildingIcon = (type) => {
  switch (type) {
    case Building.APRARTMENT:
      return <FaBuilding />;
    case Building.TOWNHOUSE:
      return <FaHouseUser />;
    case Building.SINGLE_FAMILY_HOME:
      return <FaHome />;
    case Building.HOUSING_COMPLEX:
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
        current: Step.BUILDING,
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
                    onChange={() => field.onChange(type.value)}
                    checked={selectedValue === type.value}
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
