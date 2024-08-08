import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/joy";
import styled from "styled-components";
import FormField from "../Common/FormField";
import { login } from "../../services/authService";
import Button from "../Common/Button";

const Form = styled.form`
  width: 90%;
  padding: 0.5em 1em;

  @media (min-width: 600px) {
    width: 60%;
    padding: 0.5em 1em;
  }

  @media (min-width: 900px) {
    width: 90%;
    padding: 0.5em 1em;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center; /* center, flex-start, flex-end, space-between, space-around, space-evenly */
  align-items: center;
`;

const Section = styled.section`
  margin: 0;
  padding: 1em;
  text-align: ${({ align }) => align || "left"};

  &.center {
    text-align: center;
  }

  &.right {
    text-align: right;
  }
`;

const Link = styled.a`
  display: inline-block;
  text-align: right;
  text-decoration: none;
  font-weight: 400;
  color: var(--dark-gray);

  &.link {
    margin-left: 0.5em;
    color: var(--color-primary);
    font-weight: 600;
  }
`;

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      console.error("Error submitting form", error);
      setLoginFailed(true);
    }
  };

  const handleSnackClose = () => {
    setLoginFailed(false);
    setPassword("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Snackbar
        open={loginFailed}
        autoHideDuration={4000}
        color="warning"
        onClose={handleSnackClose}
      >
        Login failed. Incorrect email or password.
      </Snackbar>
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
      <Section align="right">
        <Link href="">Forgot password?</Link>
      </Section>
      <Container>
        <Button type="submit">Sign In</Button>
      </Container>
      <Section align="center" className="under-btn">
        <p>
          No account?
          <Link className="link" href="/auth/register">
            Sign up
          </Link>
        </p>
      </Section>
    </Form>
  );
}

export default LoginForm;
