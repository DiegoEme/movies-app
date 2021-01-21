import Movie from "./components/Movie";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const api = "https://api.themoviedb.org/3/discover/movie?api_key=48967e7208298a4a6e2c66dbf510a727&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1";

//const url_search = "https://api.themoviedb.org/3/search/company?api_key=48967e7208298a4a6e2c66dbf510a727&page=1";
const url_search = 'https://api.themoviedb.org/3/search/movie?api_key=48967e7208298a4a6e2c66dbf510a727&query='

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = (e) => {
    
    fetch(url_search + searchTerm)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });

      setSearchTerm('')
  }

     const handleOnChange =(e)=> {
      
    setSearchTerm(e.target.value)
    
  } 



  return (
    <div>
      <Navbar className="justify-content-between" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Form onSubmit={e => { e.preventDefault(); }} inline>
          <FormControl value = {searchTerm} onChange={handleOnChange} type="text" placeholder="Search" className="search mr-sm-2" />
          <Button onClick={searchMovie} variant="outline-info">Search</Button>
        </Form>
      </Navbar>

      <Container className="flex-wrap position-relative">
        <Row className="position-absolute">
          {movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
