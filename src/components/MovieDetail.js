import React from "react";
import { Container, Row, Badge, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const url_images = "https://image.tmdb.org/t/p/w500";

class MovieDetail extends React.Component {
  state = {
    activeMovie: [],
  };

  componentDidMount = async () => {
    const title = this.props.location.state.movieDetail;

    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=48967e7208298a4a6e2c66dbf510a727&query=${title}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ activeMovie: data.results[0] });
        console.log("state", this.state.activeMovie);
      });
  };

  render() {
    const movie = this.state.activeMovie;
    return (

      <Container className="detail-container">

      <Container className="d-flex flex-wrap position-relative">
        <Row className="position-absolute">
          <Col className="align-self-center">
            <div className="movie">
              <img src={url_images + movie.poster_path} alt={movie.title} />

              <div className="movie-info">
                <h6>{movie.title}</h6>
                <Badge variant="warning">{movie.vote_average}</Badge>
              </div>
            </div>
          </Col>
          <Col md className="align-self-center">
            
            <div class="description">
              <h3>{movie.title}</h3>
              <hr />
              <h5>Synopsis:</h5>
              <p >{movie.overview}</p>
              <Button variant="outline-info">
               <Link to="/">Go Back</Link> 
                </Button>
            </div>
           
          </Col>
        </Row>
      </Container>
      </Container>
    );
  }
}

export default MovieDetail;
