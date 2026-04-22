import { Link } from "react-router-dom";

export default function MovieCard({ movie, setSelectedMovie }) {

    const { id, image, title, description, release_date, duration } = movie;
    const releaseYear = new Date(release_date).getFullYear();

    return (
        <div className="col" key={id}>

            <div className="thumbnail">
                <img src={import.meta.env.VITE_API_SERVER_ADDRESS + "/img/" + image} alt={title} />

                <div className="overlay">
                    <button
                        onClick={() => { setSelectedMovie(movie) }}
                        data-bs-toggle="modal"
                        data-bs-target="#details-modal"
                    >
                        <i className="bi bi-eye-fill"></i>
                    </button>
                </div>
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

        </div>
    );
}