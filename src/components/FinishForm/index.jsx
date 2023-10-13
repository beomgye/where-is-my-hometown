import styled from 'styled-components';
import { useState } from 'react';
import { Form } from '@/components';
import { Steps } from '@/types/step';

const FinishForm = ({ control, ...props }) => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setSliderValue(newValue);
  };

  const userRangeInput = (e) => {
    setSliderValue(e.currentTarget.value);
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
      {...props}
    >
      <Container>
        <StyledFinishForm>
          <TotalContainer>
            <Asset>자산</Asset>
            <hr />
            <Location>위치</Location>
            <Trade>전세/월세/매매</Trade>
            <BuildingType>아파트/연립/단독/주택연합</BuildingType>
          </TotalContainer>
          <Recommendation>
            <RecommendationTitle>추천 동네 갯수를 설정하세요.</RecommendationTitle>
            <RecommendationContainer>
              <Range
                type="range"
                min="0"
                max="5"
                className="slider"
                value={sliderValue}
                onChange={handleSliderChange}
                onClick={userRangeInput}
              />
              <Count left={sliderValue}>{sliderValue}</Count>
            </RecommendationContainer>
          </Recommendation>
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
  width: 434px;
  height: 210px;
  padding: 16px 24px;
  background-color: #f8f9ff;
`;
const Asset = styled.p``;
const Location = styled.p``;
const Trade = styled.p``;
const BuildingType = styled.p``;
const Recommendation = styled.div`
  margin-top: 21px;
`;
const RecommendationTitle = styled.h3`
  color: #022959;
  font-size: 16px;
  font-weight: bold;
`;
const RecommendationContainer = styled.div``;
const Range = styled.input`
  width: 407px;
  height: 7px;
  outline: none;
  border-radius: 3px;
`;

const Count = styled.p`
  width: 30px;
  height: 30px;
  position: relative;
  top: -16px;
  background-color: #483eff;
  color: #ffff;
  border-radius: 4px;
  text-align: center;
  line-height: 30px;
  font-size: 20px;
  font-weight: bold;
  left: calc(${(props) => (props.left / 5) * 86}%);
`;

export default FinishForm;
