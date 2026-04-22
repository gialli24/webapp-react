import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header className="app-header">
            <div className="container">
                <div className="navbar navbar-expand-lg">

                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-2 w-100">

                        <div className="d-flex justify-content-between align-items-center gap-2 w-100">

                            <h1>MoviesApp</h1>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>

                        <div className="collapse navbar-collapse justify-content-end gap-5 w-100" id="menu">

                            <nav className="d-flex flex-column flex-lg-row gap-4 mb-4 mb-lg-0">
                                <NavLink to="/" className="app-nav-link">Home</NavLink>
                                <NavLink to="" className="app-nav-link disabled">About Us</NavLink>
                            </nav>

                            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}