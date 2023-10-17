import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import React from "react";


export default function Movies ({
                                  movies,
                                  savedMovies,
                                  isLoading,
                                  handleSaveMovie,
                                  handleDeleteSavedMovie,
                                  handleSearchByName,
                                  searchError,
                                  }) {

  return (
    <main className="content">
      <SearchForm
        handleSearchByName={handleSearchByName}
        isSavedMovies={false}
      />
      <MovieCardList
        movies={movies}
        savedMovies={savedMovies}
        isSavedMovies={false}
        isLoading={isLoading}
        handleSaveMovie={handleSaveMovie}
        handleDeleteSavedMovie={handleDeleteSavedMovie}
        searchError={searchError}
      />
    </main>
  )
}