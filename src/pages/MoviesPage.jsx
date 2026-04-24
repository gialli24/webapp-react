import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});

    const { setIsLoading } = useGlobalContext();

    useEffect(() => {
        const endpoint = import.meta.env.VITE_API_SERVER_ADDRESS + "/movies";

        setIsLoading(true);

        fetch(endpoint)
            .then(res => res.json())
            .then(data => {
                setMovies(data);
                setIsLoading(false);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <main>

            <MovieModal movie={selectedMovie} />

            <section id="movies-list">
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        {
                            movies.map(movie => {

                                return (
                                    <MovieCard key={movie.id} movie={movie} setSelectedMovie={setSelectedMovie} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}