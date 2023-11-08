import styled, { css } from 'styled-components';

interface ButtonProps {
  type: 'submit' | 'reset' | 'button';
  size?: 'default' | 'small' | 'large';
  color: 'primary' | 'secondary';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 0;
  width: 123px;
  height: 48px;
  cursor: pointer;
  font-weight: 500;

  ${({ size }) => {
    if (size === 'small') {
      return css`
        font-size: small;
      `;
    }
    if (size === 'default') {
      return css`
        font-size: medium;
      `;
    }
    if (size === 'large') {
      return css`
        font-size: large;
      `;
    }

    return css`
      font-size: medium;
    `;
  }}

  ${({ color }) => {
    if (color === 'primary') {
      return css`
        background-color: rgba(2, 41, 89, 1);
        color: white;

        &:hover {
          background-color: rgb(67, 139, 255);
        }
      `;
    }
    if (color === 'secondary') {
      return css`
        background-color: #f2f4f7;
        color: #a4a4a5;

        &:hover {
          background-color: #e8e9ea;
        }
      `;
    }

    return css`
      background-color: #022959
      color: white;
    `;
  }}

    ${({ disabled }) => {
    if (disabled) {
      return css`
        background-color: #f2f4f7;
        color: #cccccc;
        cursor: not-allowed;

        &:hover {
          background-color: #f2f4f7;
          color: #cccccc;
          cursor: not-allowed;
        }
      `;
    }

    return css``;
  }};
`;

const Button = ({
  type,
  size = 'default',
  color,
  disabled = false,
  onClick,
  children
}: ButtonProps) => {
  return (
    <StyledButton type={type} size={size} color={color} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
