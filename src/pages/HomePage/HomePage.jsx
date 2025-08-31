import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css"; 

function HomePage() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function load() {
            try {
                const results = await fetchTrendingMovies();
                setMovies(results);
            } catch (err) {
                console.error(err);
            }
        }
        load();
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Trending Today</h2>
            <ul className={styles.list}>
                {movies.map((movie) => (
                    <li key={movie.id} className={styles.item}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.poster_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                                    alt={movie.title}
                                    className={styles.image}
                                />
                            ) : (
                                <div className={styles.placeholder}>No Image</div>
                            )}
                            <p className={styles.name}>{movie.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
