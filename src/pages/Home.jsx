import { Link } from "react-router-dom";

function HomeRoute() {
  return (
    <>
      <h2>Content of home</h2>
      <Link to="/login">login page</Link>
    </>
  );
}

export default HomeRoute;
