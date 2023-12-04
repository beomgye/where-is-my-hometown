import styled from 'styled-components';
import { highlightColor, secondaryColor } from '@/styles/variables';

interface NavbarProps {
  navbarProps: NavbarType;
}

const StyledNavBar = styled.nav`
  justify-content: flex-start;
  height: 100%;
  width: 226px;
  border-radius: 8px;
  padding: 32px 24px;
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
    line-height: 21px;
    letter-spacing: -1px;
    color: #fff;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 50%;
  }

  & .active {
    .circle {
      color: ${secondaryColor};
      background: ${highlightColor};
      border-color: ${highlightColor};
    }
  }

  & .stepDetails {
    flex-direction: column;
    gap: 2px;
    text-transform: uppercase;
    display: flex;
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

const NavBar = ({ navbarProps: { current, stepOptions }, ...props }: NavbarProps) => {
  return (
    <StyledNavBar {...props}>
      <ul className="stepContainer">
        {stepOptions &&
          stepOptions.map((step, index) => (
            <li className={current === index ? 'active' : ''} key={step.id}>
              <div className="circle">{index + 1}</div>
              <div className="stepDetails">
                <div className="stepText">
                  Step
                  {index + 1}
                </div>
                <div className="stepName">{step.value}</div>
              </div>
            </li>
          ))}
      </ul>
    </StyledNavBar>
  );
};

export default NavBar;
