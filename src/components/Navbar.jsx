import { Link, NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
    const setActiveClass = ({ isActive }) => ( isActive ? "active" : "opcion_no_active");

    return (
        <Nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                Logo
            </Link>

            <NavLink className={ setActiveClass } to="/">
                Home
            </NavLink>
            {"  -  "}

            <NavLink className={ setActiveClass } to="/pokemones">
                Pokémones
            </NavLink>
        </Nav>
    );
}