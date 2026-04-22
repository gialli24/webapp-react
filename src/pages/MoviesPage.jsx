import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";

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
        <main>
            <section id="movies-list">
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        {
                            movies.map(movie => {

                                return (
                                    <MovieCard key={movie.id} movie={movie} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}