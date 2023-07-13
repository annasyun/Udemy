import React, { useEffect } from "react";

const Movie = () => {
  const data = () => {
    fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
      .then((res) => res.json())
      .then((json) => console.log(json));
  };


  return <div>Movie</div>;
};

export default Movie;
