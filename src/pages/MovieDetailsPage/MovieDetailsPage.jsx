import { useEffect, useState, useRef } from "react";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";
import { fetchMovieDetails } from "../../services/api";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkRef = useRef(location.state?.from || "/movies");

    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovieDetails = async () => {
            setLoading(true);
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch (err) {
                setError("Movie details could not be loaded.");
            } finally {
                setLoading(false);
            }
        };
        getMovieDetails();
    }, [movieId]);

    if (loading) return <p>Loading movie details...</p>;
    if (error) return <p>{error}</p>;
    if (!movie) return null;

    return (
        <div className={styles.container}>
            <Link to={backLinkRef.current} className={styles.backLink}>
                ← Go Back
            </Link>
            <div className={styles.movie}>
                {movie.poster_path && (
                    <img
                        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                        alt={movie.title}
                        className={styles.image}
                    />
                )}
                <div className={styles.details}>
                    <h2>{movie.title}</h2>
                    <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    <p>{movie.genres.map((g) => g.name).join(", ")}</p>
                </div>
            </div>
            <div className={styles.additional}>
                <h3>Additional Information</h3>
                <div className={styles.buttons}>
                    <Link
                        to="cast"
                        state={{ from: backLinkRef.current }}
                        className={styles.button}
                    >
                        Cast
                    </Link>
                    <Link
                        to="reviews"
                        state={{ from: backLinkRef.current }}
                        className={styles.button}
                    >
                        Reviews
                    </Link>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default MovieDetailsPage;
