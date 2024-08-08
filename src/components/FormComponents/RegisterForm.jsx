import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/joy";
import styled from "styled-components";
import { register } from "../../services/authService";
import FormField from "../Common/FormField";
import Button from "../Common/Button";

const Form = styled.form`
  width: 70%;
  padding: 3em auto;

  @media (min-width: var(--breakpoint-tablet)) {
    width: 70%; /* Adjust width for tablets */
  }

  @media (min-width: var(--breakpoint-desktop)) {
    width: 60%; /* Adjust width for larger desktops */
  }

  @media (min-width: var(--breakpoint-large-desktop)) {
    width: 50%; /* Adjust width for very large desktops */
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center; /* center, flex-start, flex-end, space-between, space-around, space-evenly */
  align-items: center;
`;

const InlineSection = styled.section`
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: column;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeDesktop}) {
    flex-direction: row;
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
    color: var(--color-primary);
    font-weight: 600;
    text-decoration: none;
  }
`;

function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerFailed, setRegisterFailed] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
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
        {message}
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
          autoComplete={"off"}
        />
        <FormField
          label="Surname"
          type="text"
          name="surname"
          id="surname"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          required
          autoComplete={"off"}
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
        autoComplete={"off"}
      />
      <FormField
        label="Password"
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete={"off"}
      />
      <FormField
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
        autoComplete={"off"}
      />

      <Container>
        <Button type="submit" style={{ marginTop: "2em" }}>
          Sign Up
        </Button>
      </Container>
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
