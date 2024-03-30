import { Link, useNavigate } from "react-router-dom";
import './NavBar.css'
import { useEffect } from "react";

const NavBar = () => {

    const navigate = useNavigate();
    
    useEffect(() => {
        const navbar = document.querySelector(".MainNavBar") as HTMLElement;
        const navbarMobile = document.querySelector(".MainNavBar-MenuWrapper") as HTMLElement;
        const overlay = document.querySelector(".MainNavBar-MobileOverlay") as HTMLElement;

        let lastScrollTop = 0
        const scrollEffect = () => { 
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            if (document.documentElement.scrollTop < navbar.offsetHeight) {
                // Scrolling down
                navbar.classList.remove('isFixed');
            } else if (scrollTop > lastScrollTop) {
                // navbar.classList.remove('isExpanded');
                navbar.classList.add('isFixed','isExpanded');
            } else {
                // Scrolling up
                navbar.classList.add('isFixed','isExpanded');
            }
            lastScrollTop = scrollTop;
        }

        navbarMobile.classList.remove("isExpanded");
        overlay.classList.add("hidden");

        window.addEventListener('scroll', scrollEffect);

        return () => {
            window.removeEventListener('scroll', scrollEffect);
        }
    }, [navigate]);

    const toggleMenu = () => {
        const navbar = document.querySelector(".MainNavBar-MenuWrapper") as HTMLElement;
        const overlay = document.querySelector(".MainNavBar-MobileOverlay") as HTMLElement;

        if (navbar.classList.contains("isExpanded")) {
            navbar.classList.remove("isExpanded");
            overlay.classList.add("hidden");
        } else {
            navbar.classList.add("isExpanded");
            overlay.classList.remove("hidden");
        }
    }

    /**/

    return (
        <nav className="MainNavBar">
            <div className="MainNavBar-MenuWrapper">
                <ul className="MainNavBar-MenuList">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/work">Work History</Link>
                    </li>
                    <li>
                        <Link to="/about">About Me</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    {/*<li>
                        <Link to="/demo">Demo</Link>
                    </li>
                     <li>
                    <Link to="/list/1">first list</Link>
                    </li> */}
                </ul>
            </div>
            <button 
                name="menu-toggle"
                className="MainNavBar-ToggleButton"
                onClick={toggleMenu}>&#9776;</button>
            <div className="MainNavBar-MobileOverlay hidden" onClick={toggleMenu}></div>
        </nav>
    )
};

export default NavBar;