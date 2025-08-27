// src/pages/Movies.jsx
import { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";

export default function Movies() {
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (query.trim() === "") return;

      
        setSearchParams({ query });

        
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=<<036f0a6686290e1d133c9d9a439f5633>>&query=${query}`
            );
            const data = await response.json();
            setMovies(data.results || []);
        } catch (error) {
            console.error("API Hatası:", error);
        }
    };

    return (
        <div>
            <h1>Search Movies</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a movie..."
                />
                <button type="submit">Search</button>
            </form>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

