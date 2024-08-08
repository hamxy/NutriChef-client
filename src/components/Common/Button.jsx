import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: var(--color-primary);
  border: 1px solid var(--color-primary);
  margin-top: 0;
  border-radius: 15px;
  color: var(--color-text-white);
  padding: 1rem 1rem;
  font-size: 1.1em;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--color-secondary);
    border: 1px solid var(--color-secondary);
  }

  /* Alignment styles */
  display: ${({ fullWidth }) => (fullWidth ? "block" : "inline-block")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  text-align: center;
`;

const Button = ({ children, type, style, onClick, fullWidth }) => {
  return (
    <StyledButton
      type={type}
      style={style}
      onClick={onClick}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  type: "button",
  style: {},
  onClick: null,
  fullWidth: false,
};

export default Button;
