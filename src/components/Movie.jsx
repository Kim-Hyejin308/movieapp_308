import React from "react";
import { Link } from "react-router-dom";

function Movie({poster, title,genres, id}) {
  return (
    <>
    <h3> <Link to={`/movie/${id}`}>{title}</Link></h3>
    {/* <a href={"/movie"} {title}></a> */}

  <img src={poster} alt="poster" width="200px" height="300px" />
    <ul>
      {genres.map((genre, index) => (
        <li key={index}>{genre}</li>
      ))}
    </ul>
    </>
  );
}
export default Movie;

