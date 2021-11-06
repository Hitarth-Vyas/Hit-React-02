import React, { Fragment } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'this is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'this is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];
  return (
    <Fragment>
      <section>
        <buton>Fetch Movies</buton>
      </section>
      <section>
        <MoviesList movie={dummyMovies} />
      </section>
    </Fragment>
  );
}

export default App;
