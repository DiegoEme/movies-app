import React from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const url_images = "https://image.tmdb.org/t/p/w500";

const Movie = ({ title, poster_path, id, vote_average }) => (
  
    <div className="movie">
      <Link to={{
        pathname: `/movieDetail/${id}`,
        state: {movieDetail: title}
        }}>
        <img src={url_images + poster_path} alt={title} />
      </Link>
      <div className="movie-info">
        <h6>{title}</h6>
        <Badge variant="warning">{vote_average}</Badge>
      </div>
    </div>
  
);

export default Movie;
