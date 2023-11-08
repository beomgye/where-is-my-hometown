import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const Div = styled.div`
  width: 450px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 55px;
`;

const Container = ({ children, ...props }: ContainerProps) => {
  return <Div {...props}>{children}</Div>;
};

export default Container;
