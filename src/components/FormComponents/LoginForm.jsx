import { useState } from "react";
import { login } from "../../services/authService";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/joy";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();

  /**
   * Handle submitting the form
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // get data from api
      await login(email, password);
      // Redirect to a protected route, e.g., dashboard
      navigate("/");
    } catch (error) {
      console.error("Error submitting form", error);
      setLoginFailed(true);
    }
  };

  /**
   * Handle closing snack
   */

  const handleSnackClose = () => {
    setLoginFailed(false);
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Snackbar
          open={loginFailed}
          autoHideDuration={4000}
          color="warning"
          onClose={handleSnackClose}
        >
          Login failed. Incorrect email or password.
        </Snackbar>
      </div>
      <section>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </section>

      <section>
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </section>
      <section className="right">
        <a className="link" href="">
          Forgot password?
        </a>
      </section>

      <button style={{ marginTop: 0 }} type="submit" className="button">
        Sign In
      </button>

      <section style={{ textAlign: "center" }} className="under-btn">
        <p>
          No account?
          <a className="blue" href="/auth/register">
            Sign up
          </a>
        </p>
      </section>
    </form>
  );
}

export default LoginForm;
