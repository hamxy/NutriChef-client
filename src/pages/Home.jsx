import { Link } from "react-router-dom";

const users = [
  {
    id: "user1",
    name: "Damian",
    age: 30,
  },
  {
    id: "user2",
    name: "Jula",
    age: 22,
  },
  {
    id: "user3",
    name: "Daklas",
    age: 1,
  },
  {
    id: "user4",
    name: "Szarlotka",
    age: 0,
  },
];

function Home() {
  return (
    <main>
      <h1>Home</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}/profile`}>{user.name}</Link>
          </li>)
        )}
      </ul>
    </main>
  );
}

export default Home;
