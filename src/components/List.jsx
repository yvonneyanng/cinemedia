// import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/List.css";

function Shows() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    getTrendingData("movie");
  }, []);

  async function getTrendingData(type) {
    try {
      const apiKey = "";
      let resp = await axios.get(
        `https://api.themoviedb.org/3/trending/${type}/day?api_key=${apiKey}`
      );
      console.log(resp.data.results);
      setShowData(resp.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className="header-container">
        <h1>Cinemedia</h1>
        <div>
          <button
            onClick={() => {
              getTrendingData("movie");
            }}
          >
            Movie
          </button>
          <button
            onClick={() => {
              getTrendingData("tv");
            }}
          >
            TV Shows
          </button>
        </div>
      </div>
      <div className="background-container">
        <div className="flex-container">
          {showData.map((show) => (
            <div className="show-item" key={show.id}>
              <img src={`https://image.tmdb.org/t/p/w200${show.poster_path}`} />
              <div className="content">
                <h3>{show.title ? show.title : show.original_name}</h3>
                <br />
                ⭐️{show.vote_average}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Shows;
