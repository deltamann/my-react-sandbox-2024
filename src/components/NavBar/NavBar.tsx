import { Link } from "react-router-dom";

const NavBar = () => (
    <header>
        <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/demo">Demo</Link>
                </li>
                {/* <li>
                <Link to="/list/1">first list</Link>
                </li> */}
            </ul>
        </nav>
    </header>
)

export default NavBar;