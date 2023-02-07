import React, { useEffect, useState } from "react";
import "./components/styles/App.css";
import "./components/styles/Reset.css";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  const [data, setData] = useState(undefined);
  const [score, setScore] = useState(0);
  const [clickedMovies, setClickedMovies] = useState([]);

  const fetchData = () => {
    fetch(
      "https://api.themoviedb.org/3/person/31/movie_credits?api_key=" //add api key back
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      <Body
        data={data}
        setClickedMovies={setClickedMovies}
        clickedMovies={clickedMovies}
        setScore={setScore}
        score={score}
      />
    </div>
  );
}

export default App;
