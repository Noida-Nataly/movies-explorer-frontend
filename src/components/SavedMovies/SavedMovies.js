import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import React from "react";
import {savedMovies} from "../../utils/movies_data";

export default function SavedMovies ({}) {

  return (
    <>
      <SearchForm />
      <MovieCardList
        movies={savedMovies}
      />
    </>
  )
}