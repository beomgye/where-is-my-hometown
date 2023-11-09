import styled from 'styled-components';
import { grayColor, secondaryColor, whiteColor } from '@/styles/variables';
import Button from '@/components/common/Button';
import Navbar from '@/components/common/Navbar';

interface FormProps {
  navbarProps: NavbarType;
  title: string;
  description: string;
  children: React.ReactNode;
  footerHidden: boolean;
  goBackButton: boolean;
  onGoBack: () => void;
  refreshButton: boolean;
  onRefresh: () => void;
  buttonText: string;
}

const StyledForm = styled.form`
  position: relative;
  height: 100%;
  border-radius: 15px;
  background-color: ${whiteColor};
  box-shadow: 0px 25px 40px -20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const Container = styled.div`
  padding: 0 100px;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: calc(var(--vh, 100vh) - 72px - 120px);
`;

const Title = styled.h2`
  margin: 40px 0 11px;
  font-weight: 700;
  font-size: 32px;
  line-height: normal;
  font-style: normal;
  color: ${secondaryColor};
`;

const Description = styled.span`
  color: ${grayColor};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`;

const Content = styled.div`
  flex: 1;
  max-height: calc(100% - 56px - 32px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled.footer`
  margin: 0 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Form = ({
  navbarProps,
  title,
  description,
  children,
  footerHidden,
  goBackButton,
  onGoBack,
  refreshButton,
  onRefresh,
  buttonText,
  ...props
}: FormProps) => {
  return (
    <StyledForm {...props}>
      <Navbar navbarProps={navbarProps} />
      <Container>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
        {children && <Content>{children}</Content>}

        {!footerHidden && (
          <Footer>
            <ButtonContainer>
              {goBackButton && (
                <Button type="button" size="default" color="secondary" onClick={onGoBack}>
                  Go Back
                </Button>
              )}

              {refreshButton && (
                <Button type="button" size="default" color="secondary" onClick={onRefresh}>
                  Refresh
                </Button>
              )}
            </ButtonContainer>

            <Button type="submit" size="default" color="primary">
              {buttonText}
            </Button>
          </Footer>
        )}
      </Container>
    </StyledForm>
  );
};

export default Form;
