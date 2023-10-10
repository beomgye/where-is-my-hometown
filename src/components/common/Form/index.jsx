import styled from 'styled-components';
import { Button, NavBar } from '@/components';

const Form = ({
  navbarProps,
  title,
  description,
  children,
  footerHidden,
  goBackButton,
  onGoBack,
  buttonText,
  ...props
}) => {
  return (
    <StyledForm {...props}>
      <Wrapper>
        <NavBar navbarProps={navbarProps} />

        <Container>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
          {children && <Content>{children}</Content>}

          {!footerHidden && (
            <Footer>
              {goBackButton && (
                <Button type="button" size="default" color="secondary" onClick={onGoBack}>
                  Go Back
                </Button>
              )}

              <Button type="submit" size="default" color="primary">
                {buttonText}
              </Button>
            </Footer>
          )}
        </Container>
      </Wrapper>
    </StyledForm>
  );
};

const StyledForm = styled.form``;

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div``;

const Title = styled.h2``;

const Description = styled.span``;

const Content = styled.div``;

const Footer = styled.footer``;

export default Form;
