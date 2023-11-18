import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();


    useEffect(() => {

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            console.log('go to top')

        }, 0)


    }, [pathname]);

    return null;
};

export default ScrollToTop;