import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

type Props = {}

const ScrollToTop = () => {
    const navigate = useNavigate();

    // Scroll to the top when the route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [navigate]);

    return null; 
}

export default ScrollToTop