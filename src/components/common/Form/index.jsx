import styled from 'styled-components'
import { Button } from '@/components'

const Form = ({ title, description, children, footerButton, goBackButton, buttonText }) => {
  return (
    <StyledForm>
      <Container>
        <Box>
          {title && <Title>{title}</Title>}
          {description && <Description>{description}</Description>}
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
        </Box>
      </Container>
    </StyledForm>
  )
}

const StyledForm = styled.form``
const Container = styled.div``
const Box = styled.div``
const Title = styled.h2``
const Description = styled.span``
const Content = styled.div``
const Footer = styled.footer``

export default Form
