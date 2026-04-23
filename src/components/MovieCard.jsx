import { Link } from "react-router-dom";

export default function MovieCard({ movie, setSelectedMovie }) {

    const { id, image, title, description, release_date, duration, rating_avg } = movie;
    const releaseYear = new Date(release_date).getFullYear();
    const endpoint = import.meta.env.VITE_API_SERVER_ADDRESS;


    return (
        <div className="col" key={id}>
            <div className="card">

                <div className="position-relative">
                    <img src={endpoint + "/img/" + image} className="card-img-top object-fit-cover" alt="..." style={{ height: 350 }} />

                    <div className="hover-show position-absolute top-0 text-light bg-dark bg-opacity-25 w-100 h-100" data-bs-toggle="modal" data-bs-target="#modal_details">
                        <button onClick={() => { setSelectedMovie(movie) }} className="btn h-100 w-100">
                            <i className="bi bi-eye"></i>
                        </button>
                    </div>
                </div>

                <div className="card-body">
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <p className="card-text">
                        {description}
                    </p>

                    <div className="d-flex justify-content-between">
                        <span>{releaseYear}</span>
                        <span>{duration} min</span>
                        <span>{rating_avg}</span>
                    </div>
                </div>
            </div>

        </div>
    );
}