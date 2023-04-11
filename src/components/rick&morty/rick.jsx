import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./rick.css";
import Navbar from "../navbar/navbar"

function rick() {
  const [Datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        setDatas(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Navbar />
        <div className="title">Rick n Morty</div>
        <div className="chars">
          {Datas?.map((chars) => (
            <div className="main-card" key={chars.id}>
              <img src={chars.image} alt={chars.name} />
              <div className="info">
                <div className="char-name">
                  {chars.name}
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  );
}

export default rick;
