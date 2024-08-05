import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/joy";
import styled from "styled-components";
import { register } from "../../services/authService";
import FormField from "../Common/FormField";

const Form = styled.form`
  width: 90%;
  padding: 3em auto;
`;

const InlineSection = styled.section`
  display: flex;
  justify-content: space-between;

  align & > div:first-child {
    margin-right: 1em;
  }
`;

const Section = styled.section`
  text-align: ${({ align }) => align || "left"};
  margin-top: 1em;
`;

const Link = styled.a`
  display: inline-block;
  text-align: right;
  margin: 1em 0;
  padding: 0.5em 0;

  &.link {
    margin-left: 0.5em;
    color: var(--color-primary-salmon);
    font-weight: 600;
  }
`;

const Button = styled.button`
  margin-top: 2em;
  background-color: var(--color-orange);
  border: 1px solid var(--color-orange);
  border-radius: 15px;
  color: white;
  padding: 1rem 0;
  width: 100%;
  font-size: 1.1em;
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    cursor: pointer;
    background-color: var(--color-salmon);
  }
`;

function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerFailed, setRegisterFailed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setRegisterFailed(true);
      return;
    }

    try {
      await register(email, password, name, surname);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form", error);
      setRegisterFailed(true);
    }
  };

  const handleSnackClose = () => {
    setRegisterFailed(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Snackbar
        open={registerFailed}
        autoHideDuration={4000}
        color="warning"
        onClose={handleSnackClose}
      >
        Registration failed. Please check your details and try again.
      </Snackbar>
      <InlineSection>
        <FormField
          label="Name"
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <FormField
          label="Surname"
          type="text"
          name="surname"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
        />
      </InlineSection>
      <FormField
        label="Email"
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <FormField
        label="Password"
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <FormField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <Button type="submit">Sign Up</Button>
      <Section align="center">
        <p>
          Already have an account?
          <Link className="link" href="/auth/login">
            Sign in
          </Link>
        </p>
      </Section>
    </Form>
  );
}

export default RegisterForm;
