import "./Login.css";
import Image from "../components/Image";
import logo from "../assets/images/authPhoto.jpg";
import LoginForm from "../components/FormComponents/LoginForm";

function Login() {
  return (
    <div className="container">
      <div className="box">
        <aside>
          <Image src={logo} styles={{ borderRadius: "15px" }} />
        </aside>
        <main className="main">
          <h2>Welcome back!</h2>
          <p>Please sign in to continue</p>
          <LoginForm />
        </main>
      </div>
    </div>
  );
}

export default Login;
