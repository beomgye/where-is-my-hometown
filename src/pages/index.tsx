import { SplashScreen } from '@/components';
import MultiFormContainer from '@/MultiFormContainer';
import { backgroundColor } from '@/styles/variables';
import styled from 'styled-components';

const Home = () => {
  return (
    <Main>
      <Title>Where is my Hometown</Title>
      <SplashScreen>
        <MultiFormContainer />
      </SplashScreen>
    </Main>
  );
};

const Main = styled.main`
  background-color: ${backgroundColor};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  position: absolute;
  top: -999px;
`;

export default Home;