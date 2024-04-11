import logo from "../../assets/images/logo.png";
import RegisterForm from "../../components/FormComponents/RegisterForm";

function Register() {
  return (
    <main className="main-login">
      <img
        className="logo"
        src={logo}
        alt="logo: bowl with fruits and chef hat at the top"
      />
      <h2>Welcome back!</h2>
      <p>Please sign in to continue</p>
      <RegisterForm />
    </main>
  );
}

export default Register;
