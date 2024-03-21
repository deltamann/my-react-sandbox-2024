import { Link } from "react-router-dom";
import './NavBar.css'
import { useEffect } from "react";

const NavBar = () => {

    useEffect(() => {
        const navbar = document.querySelector(".MainNavBar") as HTMLElement;

        let lastScrollTop = 0
        const scrollEffect = () => { 
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (document.documentElement.scrollTop < navbar.offsetHeight) {
                // Scrolling down
                navbar.classList.remove('isFixed');
            } else if (scrollTop > lastScrollTop) {
                // navbar.classList.remove('isExpanded');
                navbar.classList.add('isFixed');
            } else {
                // Scrolling up
                navbar.classList.add('isFixed');
            }
            lastScrollTop = scrollTop;
        }
        window.addEventListener('scroll', scrollEffect);

        return () => {
            window.removeEventListener('scroll', scrollEffect);
        }
    }, [])
    /**/

    return (
        <nav className="MainNavBar">
            <div className="MainNavBar-MenuWrapper">
                <ul className="MainNavBar-MenuList">
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
            </div>
            <button name="menu-toggle" className="MainNavBar-ToggleButton">&#9776;</button>
        </nav>
    )
};

export default NavBar;