import styled from "styled-components";
import { OptionContainer } from "@/containers";

const Home = () => {
  return (
    <>
      <Main>
        <Title>Where is my Hometown</Title>
      </Main>
      <Container>
        <OptionContainer />
      </Container>
    </>
  );
};

const Main = styled.main``;
const Title = styled.h1``;
const Container = styled.div``;

export default Home;
