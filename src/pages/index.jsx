import styled from 'styled-components';
import { OptionContainer } from '@/containers';
import { backgroundColor } from '@/styles/variables';
import { SplashScreen } from '@/components';

const Home = () => {
  return (
    <Main>
      <Title>Where is my Hometown</Title>

      <SplashScreen>
        <OptionContainer />
      </SplashScreen>
    </Main>
  );
};

const Main = styled.main`
  height: 100vh;
  background-color: ${backgroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  position: absolute;
  top: -999px;
`;

export default Home;
