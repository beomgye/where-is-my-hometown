import { styled } from 'styled-components'

const NavBar = ({ index, name }) => {
  return (
    <StyledNavBar>
      <ul className="stepContainer">
        <li className="step">
          <div className="circle">{index + 1}</div>
          <div className="stepDetails">
            <div className="stepText">
              Step
              {index + 1}
            </div>
            <div className="stepName">
              text
              {name}
            </div>
          </div>
        </li>
      </ul>
    </StyledNavBar>
  )
}

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: flex-start;
  min-height: 568px;
  width: 274px;
  border-radius: 8px;
  padding: 40px 32px;
  background-color: #483eff;

  & .stepContainer {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;
  }

  & .step {
    display: flex;
    align-items: center;
    gap: 16px;
    text-align: left;
  }

  & .circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1px;
    color: #fff;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
  }

  & .stepDetails {
    flex-direction: column;
    gap: 4px;
    text-transform: uppercase;
  }

  & .stepText {
    font-size: 12px;
    line-height: 14px;
    color: #abbcff;
  }

  & .stepName {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 1px;
    color: #ffff;
  }
`

export default NavBar
