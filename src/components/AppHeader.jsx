import { NavLink } from "react-router-dom";

export default function AppHeader() {
    return (
        <header>
            Header

            <NavLink to="/">Movies</NavLink>
        </header>
    )
}