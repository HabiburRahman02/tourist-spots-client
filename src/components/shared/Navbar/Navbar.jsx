import { Link } from "react-router-dom";
import logo from '../../../assets/icons/logo.png'

const Navbar = () => {

    const links = <>
        <li className="text-lg"><Link>Home</Link></li>
        <li className="text-lg"><Link>All Tourist Spot</Link></li>
        <li className="text-lg"><Link>Add Tourist Spot</Link></li>
        <li className="text-lg"><Link>My List</Link></li>
    </>
    return (
        <div className="navbar bg-gry7">
            <div className="navbar-start gap-1">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="
                        menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link>
                    <img className="w-14" src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white font-bold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;