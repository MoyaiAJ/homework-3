import MovieCard from "./MovieCard";

export default function MovieList({ movies }) {
    return (
        <div className="movie-container">
            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </div>
    );
}