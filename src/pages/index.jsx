import styled from 'styled-components'
import { OptionContainer } from '@/containers'

const Home = () => {
  return (
    <SceenContainer>
      <Main>
        <Title>Where is my Hometown</Title>
        <Container>
          <OptionContainer />
        </Container>
      </Main>
    </SceenContainer>
  )
}

const SceenContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Main = styled.main`
  position: relative;

  width: 940px;
  height: 600px;
  background-color: pink;
  margin: auto;
`
const Title = styled.h1`
  position: absolute;
  top: -999px;
`

const Container = styled.div`
  margin-top: 99px;
`

export default Home
