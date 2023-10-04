import styled from 'styled-components'
import { Button } from '@/components'

const Form = ({ title, description, children, footerButton, goBackButton, buttonText }) => {
  return (
    <>
      <StyledForm>
        <Container>
          <TitleContainer>
            {title && <Title>{title}</Title>}
            {description && <Description>{description}</Description>}
          </TitleContainer>
          {children && <Content>{children}</Content>}
        </Container>
      </StyledForm>
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
    </>
  )
}

const StyledForm = styled.form`
  position: absolute;
  top: 56px;
  left: 390px;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 284px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const TitleContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 11px;
`

const Title = styled.h2`
  margin: 0;
  color: rgba(2, 41, 89, 1);
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Description = styled.span`
  color: rgba(150, 153, 170, 1);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
`
const Content = styled.div``

const Footer = styled.footer`
  position: absolute;
  top: 520px;
  right: 100px;

  width: 450px;
  height: 48px;

  display: flex;
  flex-direction: row;
  justify-content: ${({ goBackButton }) => (goBackButton ? 'space-between' : 'flex-end')};
`

export default Form
