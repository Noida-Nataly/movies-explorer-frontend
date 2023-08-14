import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import React from "react";
import {savedMovies} from "../../utils/movies_data";

export default function SavedMovies ({
                                       movies,
                                       isLoading,
                                       handleSaveMovie,
                                       handleDeleteSavedMovie,
                                       handleSearchByName}) {


  return (
    <main className="content">
      <SearchForm
        handleSearchByName={handleSearchByName}
      />
      <MovieCardList
        movies={savedMovies}
        isSavedMovies={true}
        isLoading={isLoading}
        handleSaveMovie={handleSaveMovie}
        handleDeleteSavedMovie={handleDeleteSavedMovie}
      />
    </main>
  )
}