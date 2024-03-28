import "../../assets/styles/pages/Login.css";
import logo from "../../assets/images/logo.png";

function Login() {
  return (
    <main className="main-login">
      <img
        className="logo"
        src={logo}
        alt="logo: bowl with fruits and chef hat at the top"
      />
      <h2>Welcome back!</h2>
      <p className="subheading">Please sign in to continue</p>
      <form>
        <section className="">
          <label htmlFor="email"></label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => console.log(e)}
            required
          />
        </section>

        <section className="">
          <label htmlFor="password"></label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => console.log(e)}
            required
          />
        </section>
        <p>Forgot password?</p>

        <button type="submit" className="button">
          Sign In
        </button>
      </form>
    </main>
  );
}

export default Login;
