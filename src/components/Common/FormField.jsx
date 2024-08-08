import styled from "styled-components";
import PropTypes from "prop-types";

const Section = styled.section`
  margin: 0;
  flex: 1;
  text-align: ${({ align }) => align || "left"};
`;

const Label = styled.label`
  display: inline-block;
  text-align: center;
  padding-top: 1em;
`;

const Input = styled.input`
  box-sizing: border-box;
  padding: 1.1em 0;
  width: 100%;
  text-align: center;
  margin-top: 0.5em;
  border: 1px solid var(--color-primary);
  border-radius: 15px;

  &:focus {
    border-color: var(--color-salmon);
  }
`;

const FormField = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
  required,
  autoComplete,
}) => {
  return (
    <Section>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
      />
    </Section>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  autoComplete: PropTypes.string,
};

FormField.defaultProps = {
  type: "text",
  value: "",
  required: false,
};

export default FormField;
