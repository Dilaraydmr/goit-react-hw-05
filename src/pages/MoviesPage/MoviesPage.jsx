import { useState } from "react";
import { fetchSearchMovies } from "../../services/api";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);

    // Arama butonuna basınca çalışacak
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        try {
            const results = await fetchSearchMovies(query); // ✅ API çağrısı eklendi
            setMovies(results);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    };

    return (
        <div className={styles.container}>
            {/* Arama kutusu */}
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Movie name"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    🔍 Search
                </button>
            </form>

            {/* Filmleri listele */}
            <ul className={styles.movieList}>
                {movies.map((movie) => (
                    <li key={movie.id} className={styles.movieItem}>
                        {movie.poster_path && (
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                            />
                        )}
                        <p>{movie.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MoviesPage;
