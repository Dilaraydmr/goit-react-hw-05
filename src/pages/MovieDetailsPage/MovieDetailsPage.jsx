import { useParams, Outlet, Link } from "react-router-dom";

function MovieDetails() {
    const { movieId } = useParams();

    return (
        <div>
            <h2>Movie Details Page</h2>
            <p>Movie ID: {movieId}</p>

            <ul>
                <li>
                    <Link to="cast">Cast</Link>
                </li>
                <li>
                    <Link to="reviews">Reviews</Link>
                </li>
            </ul>

            <Outlet />
        </div>
    );
}

export default MovieDetails;
