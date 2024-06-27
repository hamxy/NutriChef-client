import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/joy";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginFailed, setLoginFailed] = useState(false);
  const navigate = useNavigate();
  const url = "http://localhost:3000/auth/login";

  /**
   * Handle submitting the form
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to server
      const response = await axios.post(url, {
        email: email,
        password: password,
      });
      console.log("Form submitted successfully", response.data);

      // Save the token in cookies
      Cookies.set("jwt", response.data.token, { expires: 1 }); // Expires in 1 day

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
          autoHideDuration={3000}
          color="danger"
          onClose={handleSnackClose}
        >
          Login failed. Incorrect email or password.
        </Snackbar>
      </div>
      <section>
        <label htmlFor="email"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </section>

      <section>
        <label htmlFor="password"></label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
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

      <button type="submit" className="button">
        Sign In
      </button>

      <section className="under-btn">
        <p>
          No account?
          <a className="blue" href="/register">
            Sign up
          </a>
        </p>
      </section>
    </form>
  );
}

export default LoginForm;
