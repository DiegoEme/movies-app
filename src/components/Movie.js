import React from 'react';

const url_images = 'https://image.tmdb.org/t/p/w500/'

const Movie = ({title, poster_path, overview, vote}) => (
    <div className="movie">
        <img src={url_images + poster_path} alt={title} />
    </div>
);

export default Movie;