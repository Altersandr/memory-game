import React, { useState } from "react";
import LoadingCard from "./LoadingCard";
import Card from "./Card";

export default function Body({
  data,
  setClickedMovies,
  setScore,
  clickedMovies,
  score,
}) {
  const [highestScore, setHighestScore] = useState(0);

  return (
    <div className="container">
      <div
        className="rules"
        style={{
          color: "salmon",
          textAlign: "center",
          marginLeft: "-40px",
        }}
      >
        Get points by clicking on an image, but don't click more than once on
        the same one
      </div>
      <div className="score-display" style={{ marginRight: "-40px" }}>
        <h1>{[`Current Score: ${score} `]}</h1>
        <h1 style={{ color: "salmon" }}>
          {score > highestScore
            ? setHighestScore(score) && [`Highest Score: ${highestScore}`]
            : [`Highest Score: ${highestScore}`]}
        </h1>
      </div>
      {!data ? (
        <LoadingCard />
      ) : (
        <Card
          data={data}
          setClickedMovies={setClickedMovies}
          setScore={setScore}
          clickedMovies={clickedMovies}
          score={score}
        />
      )}
    </div>
  );
}
