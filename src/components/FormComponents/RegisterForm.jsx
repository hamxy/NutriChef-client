import "./RegisterForm.css";

function RegisterForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const fd = new FormData(event.target);
    Object.fromEntries(fd.entries());
    const data = Object.fromEntries(fd.entries());

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
    </form>
  );
}

export default RegisterForm;
