import styled from 'styled-components';
import { Form } from '@/components';
import { Steps } from '@/types/step';
import { formatMoney } from '@/utils/formatMoney';
import { TransactionTypeOptions, BuildingTypeOptions } from '@/types/option';

const FinishForm = ({ option, ...props }) => {
  const getTransactionTypeName = (id) => {
    const transactionType = TransactionTypeOptions.find((type) => type.value === id);
    return transactionType ? transactionType.label : '';
  };

  const getBuildingTypeName = (id) => {
    const buildingType = BuildingTypeOptions.find((type) => type.value === id);
    return buildingType ? buildingType.label : '';
  };

  return (
    <Form
      title="마무리 단계"
      description="총 마무리 단계 입니다"
      navbarProps={{
        current: 4,
        steps: Steps
      }}
      buttonText="확인"
      goBackButton
      refreshButton
      {...props}
    >
      <Container>
        <StyledFinishForm>
          <TotalContainer>
            <Asset>
              <AssetTitle>자산</AssetTitle>
              <AssetValue>{`${formatMoney(option.property)} 원`}</AssetValue>
            </Asset>
            <hr />
            <Location>
              <LocationTitle>위치</LocationTitle>
              <LocationValue>{option.location}</LocationValue>
            </Location>
            <Trade>
              <TradeTitle>거래 방식</TradeTitle>
              <TradeValue>{getTransactionTypeName(option.transactionType)}</TradeValue>
            </Trade>
            <BuildingType>
              <BuildingTitle>건물 유형</BuildingTitle>
              <BuildingValue>{getBuildingTypeName(option.buildingType)}</BuildingValue>
            </BuildingType>
          </TotalContainer>
        </StyledFinishForm>
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

const StyledFinishForm = styled.div`
  margin-top: 21px;
`;
const TotalContainer = styled.div`
  height: 225px;
  padding: 16px 24px;
  background-color: #eceefd;
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

export default FinishForm;
