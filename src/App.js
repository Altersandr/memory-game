import React, { useEffect, useState } from "react";
import "./components/styles/App.css";
import "./components/styles/Reset.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [data, setData] = useState(undefined);
  // const [poster, setPoster] = useState([]);

  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/person/31/movie_credits?api_key=" //add api key back
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.cast[0]);
        // setPoster(data.cast[0].poster_path);
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Body data={data} />
    </div>
  );
}

export default App;
