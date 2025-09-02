import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";
import styles from "./MovieCast.module.css";

const MovieCast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCast = async () => {
            setLoading(true);
            try {
                const data = await fetchMovieCast(movieId);
                setCast(data);
            } catch (err) {
                setError("Cast could not be loaded.");
            } finally {
                setLoading(false);
            }
        };
        getCast();
    }, [movieId]);

    if (loading) return <p>Loading cast...</p>;
    if (error) return <p>{error}</p>;
    if (cast.length === 0) return <p>No cast available.</p>;

    return (
        <ul className={styles.castList}>
            {cast.map((actor) => (
                <li key={actor.id} className={styles.castItem}>
                    {actor.profile_path ? (
                        <img
                            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                            alt={actor.name}
                        />
                    ) : (
                        <div className={styles.noImage}>No Image</div>
                    )}
                    <p>{actor.name}</p>
                    <p className={styles.character}>{actor.character}</p>
                </li>
            ))}
        </ul>
    );
};

export default MovieCast;
