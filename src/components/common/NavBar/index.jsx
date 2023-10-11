import styled from 'styled-components';

const NavBar = ({ current, text }) => {
  const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

  return (
    <StyledNavBar>
      <ul className="stepContainer">
        {steps.map((step, index) => (
          <li className={step === steps[current] ? 'active' : ''} key={step}>
            <div className="circle">{index + 1}</div>
            <div className="stepDetails">
              <div className="stepText">
                Step
                {index + 1}
              </div>
              <div className="stepName">{text}</div>
            </div>
          </li>
        ))}
      </ul>
    </StyledNavBar>
  );
};

const StyledNavBar = styled.nav`
  justify-content: flex-start;
  min-height: 504px;
  width: 226px;
  border-radius: 8px;
  padding: 32px 24px;
  margin: 16px 0 16px 16px;
  background-color: #483eff;

  & .stepContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 32px;
    padding: 0;
    margin: 0;
  }

  & li {
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
`;

export default NavBar;
