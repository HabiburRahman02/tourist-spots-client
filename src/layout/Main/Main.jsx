
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../components/shared/Navbar/Navbar';
import Footer from '../../components/shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/signup');
    // console.log(location)
    return (
        <div>
            {noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;