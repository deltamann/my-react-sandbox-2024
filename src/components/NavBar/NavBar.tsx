import { Link } from "react-router-dom";
import './NavBar.css'
import { useEffect } from "react";

const NavBar = () => {
    useEffect(() => {
        const scrollEffect = () => { console.log('scroll detected: ', window.scrollY); }
        window.addEventListener('scroll', scrollEffect);

        return () => {
            window.removeEventListener('scroll', scrollEffect);
        }
    }, [])

    return (
        <nav className="MainNavBar">
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
    )
};

export default NavBar;