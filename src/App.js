import Movie from './components/Movie';
import {useEffect, useState} from 'react';

const api = 'https://api.themoviedb.org/3/discover/movie?api_key=48967e7208298a4a6e2c66dbf510a727&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1'

const url_search = 'https://api.themoviedb.org/3/search/company?api_key=48967e7208298a4a6e2c66dbf510a727&page=1'
//const url_search = 'https://api.themoviedb.org/3/search/movie?api_key=48967e7208298a4a6e2c66dbf510a727&query='


function App() {

  const [movies, setMovies] = useState([]);

useEffect(() => {
  fetch(api).then(res => res.json())
  .then(data => {
    console.log(data)
    setMovies(data.results);
  })
  

 
}, [])

  return <div>
    {movies.map((movie) => 
      <Movie key={movie.id} {...movie}/>
    )}
  </div>
}

export default App;
