import "../../assets/styles/pages/Login.css";

function Login() {
  return (
    <main className="main-login">
      <form>
      <h2>Sign In</h2>
        <section className="">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(e) => console.log(e)}
            required
          />
        </section>

        <section className="">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(e) => console.log(e)}
            required
          />
        </section>

        <div className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </form>
    </main>
  );
}

export default Login;
