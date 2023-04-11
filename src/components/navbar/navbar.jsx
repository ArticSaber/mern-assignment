import React from "react";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

function navbar() {
  const nav = useNavigate();

  return (
    <div className="main-cont">
      <div className="nav-cont">
        <button onClick={() => nav("/")}>Home</button>
        <button onClick={() => nav("/portfolio")}>Portfolio</button>
        <button onClick={() => nav("/calculator")}>calculator</button>
        <button onClick={() => nav("/rick&morty")}>rick and morty</button>
      </div>

    </div>
  );
}

export default navbar;
