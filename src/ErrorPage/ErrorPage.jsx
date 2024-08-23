
import { Link } from 'react-router-dom';
import errorImg from '../assets/error/giphy.webp'
const ErrorPage = () => {
    return (
        <div className='mt-4'>
            <img className='md:w-2/3 mb-6 mx-auto md:h-[600px] object-cover' src={errorImg} alt="" />
            <Link to='/'>
                <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white font-bold">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;