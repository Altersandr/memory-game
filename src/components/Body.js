import React from "react";
import Card from "./Card";
export default function Body({ data }) {
  return (
    <div>
      {!data ? (
        <Card />
      ) : (
        <img
          src={[
            `https://image.tmdb.org/t/p/original${data.cast[14].poster_path}`,
          ]}
          alt=""
        ></img>
      )}
    </div>
  );
}
