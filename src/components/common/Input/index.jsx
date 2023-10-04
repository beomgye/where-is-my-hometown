import styled from 'styled-components'

const Input = ({ id, type, placeholder }) => {
  return (
    <Container>
      <Label htmlFor={id}>{id}</Label>
      <StyledInput id={id} type={type} placeholder={placeholder} />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  width: 450px;
  height: 72px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
`
const Label = styled.label`
  color: rgba(2, 41, 89, 1);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
const StyledInput = styled.input`
  position: relative;
  padding: 0 16px;
  border: none;
  width: 418px;
  height: 48px;
  flex-shrink: 0;

  border-radius: 8px;
  border: 1px solid rgba(214, 217, 230, 1);
  background-color: #fff;

  &::placeholder {
    color: rgba(150, 153, 170, 1);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;

    position: absolute;
    left: 16px;
  }
`

export default Input
