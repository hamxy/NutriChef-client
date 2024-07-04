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
          <h2 className="center">Welcome back!</h2>
          <p className="center" style={{ paddingBottom: "40px" }}>
            Please sign in to continue
          </p>
          <LoginForm styles={{ padding: "0 5em" }} />
        </main>
      </div>
    </div>
  );
}

export default Login;
