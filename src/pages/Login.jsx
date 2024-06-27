import "./Login.css";
import logo from "../assets/images/logo.png";
import LoginForm from "../components/FormComponents/LoginForm";

function Login() {
  return (
    <main className="main-login">
      <img
        className="logo"
        src={logo}
        alt="logo: bowl with fruits and chef hat at the top"
      />
      <h2>Welcome back!</h2>
      <p>Please sign in to continue</p>
      <LoginForm />
    </main>
  );
}

export default Login;
