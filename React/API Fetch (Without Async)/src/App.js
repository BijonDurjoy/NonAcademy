import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/usrs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network error!!");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  if (error) {
    return <h3>Error: {error}</h3>;
  }
  return (
    <div className="App">
      <h1>Name of username:</h1>
      <h3>
        {data && data.map((user) => <div key={user.id}>{user.username}</div>)}
      </h3>
    </div>
  );
}

export default App;
