import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

export default function MoviesPage() {

    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState({});

    useEffect(() => {
        const endpoint = import.meta.env.VITE_API_SERVER_ADDRESS + "/movies";

        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovies(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <main>

            <div className="modal fade" id="details-modal" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">
                                {selectedMovie.title}
                            </h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>{selectedMovie.description}</p>
                        </div>
                        <div className="modal-footer">
                            <Link
                                to={`/movies/${selectedMovie.id}`}
                                onClick={() => {
                                    const modalElement = document.getElementById('details-modal');
                                    const modalInstance = bootstrap.Modal.getInstance(modalElement);
                                    modalInstance?.hide();
                                }}
                                className="btn btn-primary"
                            >
                                Di più
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <section id="movies-list">
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        {
                            movies.map(movie => {

                                return (
                                    <MovieCard key={movie.id} movie={movie} selectedMovie={selectedMovie} setSelectedMovie={setSelectedMovie} />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}