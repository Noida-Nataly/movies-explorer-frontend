import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import React from "react";
export default function SavedMovies ({
                                       savedMovies,
                                       isLoading,
                                       handleSaveMovie,
                                       handleDeleteSavedMovie,
                                       handleSearchByName,
                                       searchError}) {


  return (
    <main className="content">
      <SearchForm
        handleSearchByName={handleSearchByName}
        isSavedMovies={true}
      />
      <MovieCardList
        movies={savedMovies}
        isSavedMovies={true}
        isLoading={isLoading}
        handleSaveMovie={handleSaveMovie}
        handleDeleteSavedMovie={handleDeleteSavedMovie}
        searchError={searchError}
      />
    </main>
  )
}