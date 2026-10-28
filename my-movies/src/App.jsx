import { useState } from "react";

function App() {
    const [movies, setMovies] = useState([]);
    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(5);
    const [review, setReview] = useState("");

    function addMovie() {
        const trimmed = title.trim();
        if (!trimmed) return;

        const newMovie = {
            id: crypto.randomUUID(),
            title: trimmed,
            rating: Number(rating),
            review: review.trim(),
        };

        setMovies([...movies, newMovie]);
        setTitle("");
        setRating(5);
        setReview("");
    }

    function removeMovie(id) {
        setMovies(movies.filter((movie) => movie.id !== id));
    }

    return (
        <div className="card">
            <h1>My Movies</h1>

            <div className="row">
                <input
                    type="text"
                    placeholder="Movie title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value={1}>1 star</option>
                    <option value={2}>2 stars</option>
                    <option value={3}>3 stars</option>
                    <option value={4}>4 stars</option>
                    <option value={5}>5 stars</option>
                </select>
            </div>

            <div className="row">
                <textarea
                    placeholder="Write a short review..."
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <button onClick={addMovie}>Add</button>
            </div>

            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        <strong>{movie.title}</strong>
                        <div className="stars">{movie.rating} / 5</div>
                        {movie.review && <p className="review">{movie.review}</p>}
                        <button className="remove" onClick={() => removeMovie(movie.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;