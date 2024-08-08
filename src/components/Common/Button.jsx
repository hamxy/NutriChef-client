import styled from "styled-components";

const StyledButton = styled.button`
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  margin-top: 0;
  border-radius: 15px;
  color: var(--color-text-white);
  padding: 1rem 0;
  width: 100%;
  font-size: 1.1em;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
  }
`;

const Button = ({ children, type, style }) => {
  return (
    <StyledButton type={type} style={style}>
      {children}
    </StyledButton>
  );
};

export default Button;
