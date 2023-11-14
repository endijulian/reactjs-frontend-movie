import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    let movieList = [
      {
        id: 1,
        title: "The Shawshank Redemption",
        release_date: "1994-03-07",
        runtime: 116,
        mpaa_rating: "R",
        description: "Some long description",
      },
      {
        id: 2,
        title: "Fight Club",
        release_date: "1999-10-15",
        runtime: 139,
        mpaa_rating: "PG-13",
        description:
          "An insomniac office worker and a socially awkward outsider take an unusual interest in the darker side of",
      },
    ];

    setMovies(movieList);
  }, []);

  return (
    <div>
      <h2>Movies</h2>
      <hr />

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Movie</th>
            <th>Release Date</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </td>
              <td>{movie.release_date}</td>
              <td>{movie.mpaa_rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
