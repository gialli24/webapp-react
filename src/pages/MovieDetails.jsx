import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function MovieDetails() {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        const endpoint = import.meta.env.VITE_API_SERVER_ADDRESS + "/movies/" + movieId;

        fetch(endpoint)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.log(err))
    }, [movieId])


    return (
        <main>
            <section id="details">
                <div className="jumbo">
                    <img src={import.meta.env.VITE_API_SERVER_ADDRESS + "/img/" + movie.image} alt={movie.title} />
                </div>

                <div className="container py-4">
                    <h2>{movie.title}</h2>
                    <p>{movie.description}</p>

                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{movie.director}</h3>
                                    <p>Regista</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{movie.genre}</h3>
                                    <p>Genere</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <h3>{movie.duration} min</h3>
                                    <p>Durata</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="reviews">
                <div className="container">

                    <h2>Recensioni</h2>

                    <div className="row">
                        {
                            movie.reviews?.map(review => (
                                <div className="col-md-6" key={review.id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">{review.vote}/5</h5>
                                            <p>{review.review}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </main >
    )
}