import React from "react";

export default function Card({
  data,
  setClickedMovies,
  setScore,
  clickedMovies,
  score,
}) {
  const partialData = data.cast.slice(0, 12);
  const cards = partialData.map((movie) => {
    return (
      <img
        key={movie.id}
        src={[`https://image.tmdb.org/t/p/original${movie.poster_path}`]}
        alt={movie.title}
        className="hvr-grow-shadow"
        onClick={() => {
          if (clickedMovies.includes(movie.title)) return setScore(0);
          setClickedMovies([...clickedMovies, movie.title]);
          setScore(score + 1);
        }}
      ></img>
    );
  });

  let shuffled = cards
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

  return <div id="cards">{shuffled}</div>;
}
