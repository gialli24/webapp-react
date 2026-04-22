import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import ReviewsList from "../components/ReviewsList";

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

                    <form className="my-4">
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>

                    <ReviewsList reviews={movie.reviews} />
                </div>
            </section>
        </main >
    )
}