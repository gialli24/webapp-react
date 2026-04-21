import { useEffect, useState } from "react"

export default function MoviesPage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const endpoint = import.meta.env.VITE_API_SERVER_ADDRESS + "/movies";

        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <h1>Movies Page</h1>

            <ul>
                {
                    movies.map(movie => (
                        <li key={movie.id}>{movie.title}</li>
                    ))
                }
            </ul>
        </>
    )
}