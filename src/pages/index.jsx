import styled from 'styled-components';
import { OptionContainer } from '@/containers';
import { backgroundColor } from '@/styles/variables';

const Home = () => {
  return (
    <Main>
      <Title>Where is my Hometown</Title>

      <Container>
        <OptionContainer />
      </Container>
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

const Container = styled.div`
  width: 940px;
  height: 600px;
  margin: auto;
`;

export default Home;
