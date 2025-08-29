import { useState } from "react";
import styles from "./MoviesPage.module.css";

function MoviesPage() {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Search:", query);
        // Burada API çağrısı yapılacak
    };

    return (
        <div className={styles.container}>
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
        </div>
    );
}

export default MoviesPage;
