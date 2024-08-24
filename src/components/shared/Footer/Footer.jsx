import { Link } from 'react-router-dom';
import footerLogo from '../../../assets/icons/logo.png'
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className=' bg-[#1C1C1C] text-white mt-24 py-24'>
            <div className='max-w-7xl mx-auto'>
                <div className='max-w-[800px] mx-auto space-y-10 text-center'>
                    <Link>
                        <div className='flex items-center gap-2 max-w-[150px] mx-auto'>
                            <img className='h-12 w-12' src={footerLogo} alt="" />
                            <h3 className='font-bold text-3xl'>Travel</h3>
                        </div>
                    </Link>
                    <div className=' text-lg  text-gray-400'>
                        <p>Explore the world most breathtaking destinations with our comprehensive guide to top tourist spots. Whether you are seeking adventure, relaxation, or cultural immersion, our website offers detailed insights, stunning visuals, and practical tips to help you plan your perfect getaway!</p>
                    </div>
                    <div>
                        <ul className='flex items-center justify-evenly'>
                            <li className="text-lg opacity-90 hover:text-blue-500 duration-500 hover:underline"><Link to='/'>Home</Link></li>
                            <li className="text-lg opacity-90 hover:text-blue-500 duration-500 hover:underline"><Link to='allTourists'>All Tourist Spot</Link></li>
                            <li className="text-lg opacity-90 hover:text-blue-500 duration-500 hover:underline"><Link to='addTourists'>Add Tourist Spot</Link></li>
                            <li className="text-lg opacity-90 hover:text-blue-500 duration-500 hover:underline"><Link to='myList'>My List</Link></li>
                        </ul>
                    </div>
                    <div className='flex gap-10 justify-center'>
                        <Link> <FaGithub className='text-3xl  hover:text-fuchsia-500 duration-500'></FaGithub></Link>
                        <Link> <FaFacebook className='text-3xl  hover:text-blue-500 duration-500'></FaFacebook></Link>
                        <Link> <FaTwitter className='text-3xl  hover:text-blue-500 duration-500'></FaTwitter></Link>
                        <Link> <FaInstagram className='text-3xl  hover:text-pink-500 duration-500'></FaInstagram></Link>
                    </div>
                    <div>
                        <p className='text-gray-300'>&copy; Copyright 2027 ||</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;