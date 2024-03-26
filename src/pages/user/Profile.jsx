import { useParams, Link } from "react-router-dom";

function Profile() {
  const params = useParams();

  return (
    <main>
      <h1>User Profile</h1>
      <p>{params.userId}</p>
      <Link to='..'>back</Link>
    </main>
  );
}

export default Profile;
