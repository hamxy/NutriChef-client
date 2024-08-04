import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <h2>404 Not Found</h2>
      <Link to="/">Go back to home</Link>
    </main>
  );
};

export default Error;
