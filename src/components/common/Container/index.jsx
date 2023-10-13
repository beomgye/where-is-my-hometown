import styled from 'styled-components';

const Container = ({ children, ...props }) => {
  return <Div {...props}>{children}</Div>;
};

const Div = styled.div`
  width: 450px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 55px;
`;

export default Container;
