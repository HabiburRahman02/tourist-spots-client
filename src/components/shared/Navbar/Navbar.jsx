import { Link } from "react-router-dom";
import logo from '../../../assets/icons/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    title: "Ohh Man!!",
                    text: "Sign Out successfully",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.error(error);
            })
    }


    const links = <>
        <li className="text-lg hover:text-blue-500 duration-500 hover:underline"><Link to='/'>Home</Link></li>
        <li className="text-lg hover:text-blue-500 duration-500 hover:underline"><Link to='allTourists'>All Tourist Spot</Link></li>
        <li className="text-lg hover:text-blue-500 duration-500 hover:underline"><Link to='addTourists'>Add Tourist Spot</Link></li>
        <li className="text-lg hover:text-blue-500 duration-500 hover:underline"><Link to='myList'>My List</Link></li>
    </>
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown z-10">
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
                <Link className="flex items-center gap-2">
                    <img className="w-14" src={logo} alt="" />
                    <h3 className='hidden md:block font-semibold text-3xl'>Travel</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.email ? <>
                        <div className="flex gap-2 items-center">
                            <img

                                className="w-14 h-14 object-cover rounded-full"
                                src={user?.photoURL} alt=""
                            />
                            <button
                                onClick={handleSignOut}
                                className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white font-bold">Logout</button>
                        </div>
                    </>
                        :
                        <Link to='login'>
                            <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white font-bold">Login</button>
                        </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;