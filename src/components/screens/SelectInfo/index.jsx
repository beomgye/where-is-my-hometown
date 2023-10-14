import styled from 'styled-components';

const SelectInfo = ({ onRefreshButton }) => {
  return (
    <StyledSelect>
      <InfoTitle>정보 선택</InfoTitle>
      <InfoBox>
        <Info />
      </InfoBox>
      <Button type="reset" onClick={onRefreshButton}>
        초기화
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
  height: 102px;
  border-radius: 5px;
  border: 2px solid rgba(214, 217, 230, 1);
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  border-radius: 8px;
  display: flex;
  border: 0;
  width: 123px;
  height: 48px;
  background-color: rgba(2, 41, 89, 1);
  color: white;
  margin-left: 634px;
  align-items: center;
  justify-content: center;
`;

export default SelectInfo;
