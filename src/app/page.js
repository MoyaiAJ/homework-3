"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import MovieList from "../components/MovieList";
import Pagination from "../components/Pagination";

const API_KEY = "5105129b6683a3463b049e0d6ccb07e6";
const BASE_URL = "https://api.themoviedb.org/3";


export default function Home() {

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [query, setQuery] = useState("");
    const [sort, setSort] = useState("");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      setMounted(true);
    }, []);

    useEffect(() => {
        fetchMovies();
    }, [currentPage, query, sort]);

    function sortResults(results) {
      if (!sort) return results;

      let sorted = [...results];

      if (sort === "release_date.asc") {
          sorted.sort((a, b) => new Date(a.release_date || 0) - new Date(b.release_date || 0));
      }
      if (sort === "release_date.desc") {
        sorted.sort((a, b) => new Date(b.release_date || 0) - new Date(a.release_date || 0));
      }
      if (sort === "vote_average.asc") {
        sorted.sort((a, b) => a.vote_average - b.vote_average);
      }
      if (sort === "vote_average.desc") {
        sorted.sort((a, b) => b.vote_average - a.vote_average);
      }
      return sorted;
    }

    async function fetchMovies() {
      let url = "";

      if (query !== "") {
        url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${currentPage}`;
      } else {
          if (sort !== "") {
            url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${currentPage}&sort_by=${sort}`;
          } else {
              url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&page=${currentPage}`;
          }
      }

      const res = await fetch(url);
      const data = await res.json();

      if (currentPage === 1) {
        setTotalPages(data.total_pages);
      }

      const sortedResults = sortResults(data.results);
      setMovies(sortedResults);
    }

    return (
        <div>
            <Header setQuery={setQuery} setSort={setSort} setCurrentPage={setCurrentPage}/>
            <MovieList movies={movies}/>
            <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} mounted={mounted}/>
        </div>
    );
}