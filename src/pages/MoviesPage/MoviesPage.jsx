import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState("");

    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get("query") || "";

   
    useEffect(() => {
        if (!searchQuery) return;

        const getMovies = async () => {
            setLoading(true);
            setError(null);
            try {
                const results = await fetchSearchMovies(searchQuery);
                setMovies(results);
            } catch (err) {
                setError("Something went wrong while fetching movies.");
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, [searchQuery]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!query.trim()) return;
        setSearchParams({ query: query.trim() });
    };

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search movies"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    🔍 Search
                </button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}

export default MoviesPage;
