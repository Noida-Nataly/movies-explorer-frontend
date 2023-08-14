import SearchForm from "../SearchForm/SearchForm";
import MovieCardList from "../MovieCardList/MovieCardList";
import React from "react";


export default function Movies ({
                                  movies,
                                  isLoading,
                                  handleSaveMovie,
                                  handleDeleteSavedMovie,
                                  handleSearchByName
                                  }) {

  return (
    <main className="content">
      <SearchForm
        handleSearchByName={handleSearchByName}
      />
      <MovieCardList
        movies={movies}
        isSavedMovies={false}
        isLoading={isLoading}
        handleSaveMovie={handleSaveMovie}
        handleDeleteSavedMovie={handleDeleteSavedMovie}
      />
    </main>
  )
}