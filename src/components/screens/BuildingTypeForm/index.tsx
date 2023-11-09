import Container from '@/components/common/Container';
import Form from '@/components/common/Form';
import Radio from '@/components/common/Radio';
import { BuildingTypeOptions, StepOptions } from '@/constants';
import { MultiFormProps } from '@/types/form';
import { FormHTMLAttributes } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FaBuilding, FaCity, FaHome, FaHouseUser } from 'react-icons/fa';

interface BuildingTypeFormProps extends FormHTMLAttributes<HTMLFormElement> {
  control: Control<MultiFormProps>;
  watch;
  goBackButton: boolean;
  onGoBack: () => void;
}

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

const BuildingTypeForm = ({
  control,
  watch,
  goBackButton,
  onGoBack,
  ...props
}: BuildingTypeFormProps) => {
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
      goBackButton={goBackButton}
      onGoBack={onGoBack}
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
