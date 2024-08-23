
import errorImg from '../assets/error/giphy.webp'
const ErrorPage = () => {
    return (
        <div className='mt-4'>
            <img className='md:w-2/3 mx-auto h-[600px] object-cover' src={errorImg} alt="" />
        </div>
    );
};

export default ErrorPage;