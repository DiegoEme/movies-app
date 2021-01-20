import React from "react";
import { Badge } from "react-bootstrap";

const url_images = "https://image.tmdb.org/t/p/w500/";

const Movie = ({ title, poster_path, overview, vote_average }) => (
  
    
        
    <div className="movie">
      <img src={url_images + poster_path} alt={title} />
      <div className="movie-info">
        <h6>{title}</h6>
        <Badge variant="warning">{vote_average}</Badge> 
      </div>
    </div>
        
    
 
);

export default Movie;
