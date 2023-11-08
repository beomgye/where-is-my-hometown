import { Button } from '@/components';
import styled from 'styled-components';

const SelectInfo = ({ townList, onRefreshButton }) => {
  const answer = townList.gptAnswer[0].message;
  const { content } = answer;

  return (
    <StyledSelect>
      <InfoTitle>정보</InfoTitle>
      <InfoBox>
        <Info>{content}</Info>
      </InfoBox>
      <Button
        type="button"
        size="default"
        color="primary"
        onClick={onRefreshButton}
      >
        Refresh
      </Button>
    </StyledSelect>
  );
};

const StyledSelect = styled.form`
  position: relative;
  height: 100%;
  overflow: auto;
  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #022959;
  padding-left: 88px;
  padding-top: 56px;
  margin: 0;
`;

const InfoBox = styled.div`
  width: 580px;
  height: 355px;
  margin: 0 auto;
  margin-top: 29px;
`;

const Info = styled.p`
  width: 574px;
  border-radius: 0 30px 30px 30px;
  line-height: 1.5;
  padding: 15px;
  border: 2px solid rgba(214, 217, 230, 1);
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
`;

export default SelectInfo;
