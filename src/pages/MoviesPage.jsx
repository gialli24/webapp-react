import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

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

                                const { id, image, title, description, release_date, duration } = movie;
                                const releaseYear = new Date(release_date).getFullYear();

                                return (<div className="col" key={id}>
                                    <div className="movie-img">
                                        <img src={import.meta.env.VITE_API_SERVER_ADDRESS + "/img/" + image} alt={title} />
                                    </div>

                                    <div className="mt-2">

                                        <div className="d-flex justify-content-between">
                                            <span>
                                                {releaseYear}
                                            </span>
                                            <span>
                                                {duration} min
                                            </span>
                                        </div>

                                        <h4>
                                            {title}
                                        </h4>

                                        <p>
                                            {description}
                                        </p>

                                        <Link to={`/movies/${id}`} className="btn btn-sm btn-outline-primary">
                                            Dettagli
                                        </Link>

                                    </div>

                                </div>)
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}