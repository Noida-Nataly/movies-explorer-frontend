import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import React from "react";
import {movies} from "../../utils/movies_data";

export default function Movies ({}) {
  return (
    <>
      <SearchForm />
      <MovieCardList
        movies={movies}/>
    </>
  )
}