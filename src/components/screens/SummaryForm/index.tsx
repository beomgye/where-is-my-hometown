import Form from '@/components/common/Form';
import { BuildingTypeOptions, StepOptions, TransactionTypeOptions } from '@/constants';
import { FormHTMLAttributes } from 'react';
import styled from 'styled-components';

interface SummaryFormProps extends FormHTMLAttributes<HTMLFormElement> {
  watch;
  goBackButton: boolean;
  onGoBack: () => void;
  refreshButton: boolean;
  onRefresh: () => void;
}

const Container = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  gap: 16px;
`;

const StyledSummaryForm = styled.div`
  margin-top: 21px;
`;

const TotalContainer = styled.div`
  height: 225px;
  padding: 16px 24px;
  background-color: #eceefd;
  display: flex;
  flex-flow: column nowrap;
  gap: 27px;
`;

const Asset = styled.div`
  display: flex;
`;

const AssetTitle = styled.p`
  font-size: 16px;
  color: #022959;
  font-weight: bold;
`;

const AssetValue = styled.p`
  margin-left: auto;
`;

const Location = styled.div`
  display: flex;
`;

const LocationTitle = styled.p`
  font-size: 16px;
  color: #022959;
  font-weight: bold;
`;

const LocationValue = styled.p`
  margin-left: auto;
`;

const Trade = styled.div`
  display: flex;
`;

const TradeTitle = styled.p`
  font-size: 16px;
  color: #022959;
  font-weight: bold;
`;

const TradeValue = styled.p`
  margin-left: auto;
`;

const BuildingType = styled.div`
  display: flex;
`;

const BuildingTitle = styled.p`
  font-size: 16px;
  color: #022959;
  font-weight: bold;
`;

const BuildingValue = styled.p`
  margin-left: auto;
`;

const SummaryForm = ({
  watch,
  goBackButton,
  onGoBack,
  refreshButton,
  onRefresh,
  ...props
}: SummaryFormProps) => {
  const getTransactionTypeName = (id) => {
    const transactionType = TransactionTypeOptions.find((type) => type.id === id);
    return transactionType ? transactionType.value : '';
  };

  const getBuildingTypeName = (id) => {
    const buildingType = BuildingTypeOptions.find((type) => type.id === id);
    return buildingType ? buildingType.value : '';
  };

  const property = watch('assets');
  const location = watch('location');
  const transactionType = watch('transactionType');
  const buildingType = watch('buildingType');

  return (
    <Form
      title="마무리 단계"
      description="총 마무리 단계 입니다."
      navbarProps={{
        current: 4,
        stepOptions: StepOptions
      }}
      buttonText="확인"
      goBackButton={goBackButton}
      onGoBack={onGoBack}
      refreshButton={refreshButton}
      onRefresh={onRefresh}
      {...props}
    >
      <Container>
        <StyledSummaryForm>
          <TotalContainer>
            <Asset>
              <AssetTitle>자산</AssetTitle>
              <AssetValue>{`${property} 원`}</AssetValue>
            </Asset>
            <hr />
            <Location>
              <LocationTitle>위치</LocationTitle>
              <LocationValue>{location}</LocationValue>
            </Location>
            <Trade>
              <TradeTitle>거래 방식</TradeTitle>
              <TradeValue>{getTransactionTypeName(transactionType)}</TradeValue>
            </Trade>
            <BuildingType>
              <BuildingTitle>건물 유형</BuildingTitle>
              <BuildingValue>{getBuildingTypeName(buildingType)}</BuildingValue>
            </BuildingType>
          </TotalContainer>
        </StyledSummaryForm>
      </Container>
    </Form>
  );
};

export default SummaryForm;
