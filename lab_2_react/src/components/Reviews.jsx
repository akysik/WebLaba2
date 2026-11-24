import { useEffect, useState } from 'react';
import { VARIANT } from '../config';

function Reviews() {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    // Запит на сервер виконується один раз при монтуванні
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setComments(data))
            .catch((err) => setError(err.message));
    }, []);

    return (
        <section
            id="reviews"
            className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm mb-5 border-l-4 border-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-5 pb-2 border-b-2 border-blue-600">
                Reviews
            </h2>

            {error && (
                <p className="text-red-600">Не вдалося завантажити відгуки: {error}</p>
            )}

            {!error && comments.length === 0 && (
                <p className="text-gray-700 dark:text-gray-300">Завантаження відгуків...</p>
            )}

            <div className="space-y-3">
                {comments.map((comment) => (
                    <article
                        key={comment.id}
                        className="rounded-md border-l-4 border-blue-600 bg-gray-50 dark:bg-slate-700 px-4 py-3"
                    >
                        <h3 className="font-bold text-gray-800 dark:text-gray-100">
                            {comment.name}
                        </h3>
                        <small className="text-gray-500 dark:text-gray-300">
                            {comment.email}
                        </small>
                        <p className="mt-1 text-gray-700 dark:text-gray-300 leading-relaxed">
                            {comment.body}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Reviews;
