import { purpleColor, whiteColor } from '@/styles/variables';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface SplashScreenProps {
  children: React.ReactNode;
}

const Container = styled.div`
  width: 940px;
  height: 600px;
  margin: auto;
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 15px;
  border: 0px solid ${purpleColor};
  background-color: ${purpleColor};
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);

  animation: ${fadeOut} 3s ease-in-out forwards;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 478px;
  height: 143px;
  background: url('/icons/vector.svg') no-repeat center;
  content-visibility: hidden;
`;

const Title = styled.h1`
  color: ${whiteColor};
  font-size: 88px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SplashScreen = ({ children }: SplashScreenProps) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      {showSplash && (
        <Content>
          <Logo />
          <Title>어데살꼬</Title>
        </Content>
      )}
      {!showSplash && children}
    </Container>
  );
};

export default SplashScreen;
