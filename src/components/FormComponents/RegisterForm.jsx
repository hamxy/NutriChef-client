import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "@mui/joy";

import "./RegisterForm.css";

function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = "http://localhost:3000/auth/register";

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

  return (
    <form onSubmit={handleSubmit}>
      <section className="inline">
        <label htmlFor="name" aria-hidden="true"></label>
        <input
          id="name"
          type="name"
          name="name"
          placeholder="Name"
          onChange={(e) => console.log(e)}
          required
        />
        <label htmlFor="surname" aria-hidden="true"></label>
        <input
          id="surname"
          type="surname"
          name="surname"
          placeholder="Surname"
          onChange={(e) => console.log(e)}
          required
        />
      </section>

      <section>
        <label htmlFor="email" aria-hidden="true"></label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => console.log(e)}
          required
        />
      </section>

      <section>
        <label htmlFor="password" aria-hidden="true"></label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => console.log(e)}
          required
        />
      </section>
      <section>
        <label htmlFor="confirmPassword" aria-hidden="true"></label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => console.log(e)}
          required
        />
      </section>
      <button type="submit" className="button">
        Sign Up
      </button>
      <section style={{ textAlign: "center" }} className="under-btn">
        <p>
          Already have account?
          <a className="blue" href="/auth/login">
            Sign in
          </a>
        </p>
      </section>
    </form>
  );
}

export default RegisterForm;
