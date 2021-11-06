import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MovieList";
import "./App.css";
import AddMovie from "./components/AddMovies";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


    const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // const response = await fetch("https://swapi.dev/api/films/");
      // const response = await fetch("https://swapi.dev/api/film/");
      const response = await fetch("https://react-http-f7bbf-default-rtdb.firebaseio.com/movies.json");    //movies in movies.json will creare a node movies in our dynamic url and .json is required by default
      
      if (!response.ok) {
        throw new Error('Something went wrong');
      }                  // to get and analyse data
      
      const data = await response.json();
      // console.log(data);

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      
      // const transformedMovies = data.results.map((movieData) => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releaseDate: movieData.release_date,
      //   };
      // });
      // setMovies(transformedMovices);
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);
  
  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMovieHAndler = (async (movie) => {
    const response = await fetch('https://react-http-f7bbf-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      header: {
        'Content-type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  })

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHAndler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
