import "./LoginForm.css";

function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    Object.fromEntries(fd.entries());
    const data = Object.fromEntries(fd.entries());
    console.log(data);

    const url = "http://localhost:3000/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify content type if sending JSON data
        // Add any other headers as needed
      },
      body: JSON.stringify(data), // Convert data to JSON string before sending
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data here
        console.log("Response:", data);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch operation
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
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

      <section>
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
