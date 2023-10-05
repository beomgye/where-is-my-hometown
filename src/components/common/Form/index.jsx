import styled from 'styled-components';
import { Button, NavBar } from '@/components';

const Form = ({
  index,
  title,
  description,
  children,
  footerButton,
  goBackButton,
  buttonText,
  ...props
}) => {
  return (
    <StyledForm {...props}>
      <NavBar current={index} text={title} />

      <Container>
        <TitleContainer>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
        </TitleContainer>

        {children && <Content>{children}</Content>}

        {!footerButton && (
          <Footer>
            {goBackButton && (
              <Button type="button" size="default" color="secondary">
                Go Back
              </Button>
            )}

            <Button type="submit" size="default" color="primary">
              {buttonText}
            </Button>
          </Footer>
        )}
      </Container>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  width: auto;
  height: 568px;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Container = styled.div`
  margin: 16px;
  min-height: 504px;
  padding: 32px 24px;

  flex: 1;
  width: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 11px;
`;

const Title = styled.h2`
  margin: 0;
  color: rgba(2, 41, 89, 1);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Description = styled.span`
  color: rgba(150, 153, 170, 1);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;
const Content = styled.div``;

const Footer = styled.footer`
  width: 450px;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: ${({ goBackButton }) => (goBackButton ? 'space-between' : 'flex-end')};
`;

export default Form;
