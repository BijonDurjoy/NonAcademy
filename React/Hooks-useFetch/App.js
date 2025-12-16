import "./App.css";
import useFetch from "./hooks/useFetch";

function App() {
  const { data, loding, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  if (loding) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>Error: {error}</h2>;
  }
  return (
    <div className="App">
      <h1>Users</h1>
      {data &&
        data.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))}
    </div>
  );
}

export default App;

// https://jsonplaceholder.typicode.com/users
