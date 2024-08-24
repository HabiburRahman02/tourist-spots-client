
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/login/login.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import SocialLogin from '../shared/SocialLogin/SocialLogin';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                navigate('/')
                console.log(result.user);
                Swal.fire({
                    title: "Hurray!!!",
                    text: "Login successfully",
                    icon: "success",
                    color: 'green',
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    title: "Opps Man!!",
                    text: `email or password is wrong please check`,
                    icon: "warning",
                    confirmButtonText: 'Try Again',

                });
            })
    }
    return (
        <div className="lg:flex max-w-7xl mx-auto items-center gap-6 p-6 lg:px-24 bg-ray-100 min-h-screen bg-img">
            <div className="lg:w-1/2">
                <img src={loginImg} alt="" />
            </div>
            <div className="lg:w-1/2 bg-white shadow-2xl p-12">
                <div>
                    <div className="text-center space-y-1 mb-4">
                        <h3 className="text-4xl font-bold">Login</h3>
                        <p className="font-medium">Login into your pages account</p>
                    </div>
                    <form onSubmit={handleLogin} className="mb-6 ">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-lg text-gray-500">Email Address</span>
                            </label>
                            <input type="email" name='email' placeholder="ami@tmi.com" className="border-2 p-4" required />
                        </div>
                        <div className="form-control relative mb-12">
                            <label className="label">
                                <span className="label-text text-lg text-gray-500">Password</span>
                            </label>
                            <input type={showPass ? "text" : "password"} name='password' placeholder="*********" className="border-2 p-4" required />
                            <span className='absolute top-[60px] right-2'
                                onClick={() => setShowPass(!showPass)}>
                                {
                                    showPass ? <FaEyeSlash className='text-2xl'></FaEyeSlash>
                                        : <FaEye className='text-2xl'></FaEye>
                                }
                            </span>
                        </div>
                        <div className="form-control mt-6">
                            <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-5 text-white font-bold">Login</button>
                        </div>

                        <div className="divider text-gray-400">Login With</div>
                        <SocialLogin></SocialLogin>
                        <div className='mt-3 text-center font-medium text-gray-500 text-lg'>
                            <p>Are you new? got to! <Link to='/signup' className='text-blue-500 hover:text-green-500'>Sign Up</Link></p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;