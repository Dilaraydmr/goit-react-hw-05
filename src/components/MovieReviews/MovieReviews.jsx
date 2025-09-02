import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../services/api";
import styles from "./MovieReviews.module.css";

const MovieReviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getReviews = async () => {
            setLoading(true);
            try {
                const data = await fetchMovieReviews(movieId);
                setReviews(data);
            } catch (err) {
                setError("Reviews could not be loaded.");
            } finally {
                setLoading(false);
            }
        };
        getReviews();
    }, [movieId]);

    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p>{error}</p>;
    if (reviews.length === 0) return <p>No reviews available.</p>;

    return (
        <ul className={styles.reviewList}>
            {reviews.map((review) => (
                <li key={review.id} className={styles.reviewItem}>
                    <h4>{review.author}</h4>
                    <p>{review.content}</p>
                </li>
            ))}
        </ul>
    );
};

export default MovieReviews;
