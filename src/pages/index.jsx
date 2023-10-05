import styled from 'styled-components';
import { OptionContainer } from '@/containers';

const Home = () => {
  return (
    <SceenContainer>
      <Main>
        <Title>Where is my Hometown</Title>
        <OptionContainer />
      </Main>
    </SceenContainer>
  );
};

const SceenContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  position: relative;

  width: 940px;
  height: 600px;
  margin: auto;

  border-radius: 15px;
  background-color: #fff;
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  position: absolute;
  top: -999px;
`;

export default Home;
