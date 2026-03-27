const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }) {

    const poster = movie.poster_path
        ? IMAGE_URL + movie.poster_path
        : "/noPoster.png";

    return (
        <div className="movie-card">
            <img src={poster} />
            <div className="movie-title">{movie.title}</div>
            <div className="movie-info">Release Date: {movie.release_date}</div>
            <div className="movie-info">Rating: {movie.vote_average.toFixed(1)}</div>
        </div>
    );
}