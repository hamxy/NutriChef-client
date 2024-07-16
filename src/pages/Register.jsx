import "./Register.css";
import logo from "../assets/images/authPhoto.jpg";
import Image from "../components/Image";
import RegisterForm from "../components/FormComponents/RegisterForm";

function Register() {
  return (
    <div className="container">
      <div className="box">
        <aside>
          <Image src={logo} styles={{ borderRadius: "15px" }} />
        </aside>
        <main className="main">
          <h2>Create account!</h2>
          <p>Please enter your credentials to continue</p>
          <RegisterForm />
        </main>
      </div>
    </div>
  );
}

export default Register;
