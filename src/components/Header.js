import React from "react";
import forest from "./forest.png";

export default function Header() {
  return (
    <>
      <h1 id="logo">Tom Hanks Memory Game</h1>
      <img src={forest} alt="Forest" id="forest"></img>
    </>
  );
}
