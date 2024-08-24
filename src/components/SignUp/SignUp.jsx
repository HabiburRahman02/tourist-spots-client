
import { Link, useNavigate } from 'react-router-dom';
import signupImg from '../../assets/login/signup.jpg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const navigate = useNavigate();

    const { createUser, updateUserProfile } = useContext(AuthContext)


    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        if (password.length < 6) {
            Swal.fire({
                title: "Opps Man!!",
                text: `Password atleast 6 character or longer`,
                icon: "error",
                confirmButtonText: 'Done',
            });
            return
        }
        else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[\W_]).+$/.test(password)) {
            Swal.fire({
                title: "Opps Man!!",
                text: `Password atleast 1 uparcase, lowecase and special character or longer`,
                icon: "error",
                confirmButtonText: 'Done',
            });
            return
        }

        const user = { name, photoUrl, email, password };
        console.log(user)
        createUser(email, password)
            .then(result => {
                navigate('/')
                console.log(result.user);
                Swal.fire({
                    title: "Awesome job man!",
                    text: "User created successfully",
                    icon: "success",
                    color: 'green',
                    confirmButtonText: 'Done',
                });
                updateUserProfile(name, photoUrl)
                    .then(() => {
                        console.log('update profile success')

                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.error(error)
                Swal.fire({
                    title: "Opps Man!!",
                    text: `${error.message}`,
                    icon: "error",
                    confirmButtonText: 'Done',
                });
            })
    }
    return (
        <div className="lg:flex max-w-7xl mx-auto items-center gap-6 p-6 lg:px-24 bg-ray-100 min-h-screen bg-img">
            <div className="lg:w-1/2">
                <img src={signupImg} alt="" />
            </div>
            <div className="lg:w-1/2 bg-white shadow-2xl p-12">
                <div>
                    <div className="text-center space-y-1 mb-4">
                        <h3 className="text-4xl font-bold">Sign Up</h3>
                        <p className="font-medium">Sign Up into your pages account</p>
                    </div>
                    <form onSubmit={handleSignUp} className="mb-6 ">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-lg text-gray-500">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Enter name" className="border-2 p-4" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-lg text-gray-500">Photo Url</span>
                            </label>
                            <input type="text" name='photoUrl' placeholder="photo url" className="border-2 p-4" required />
                        </div>
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-lg text-gray-500">Email Address</span>
                            </label>
                            <input type="email" name='email' placeholder="ami@tmi.com" className="border-2 p-4" required />
                        </div>
                        <div className="form-control mb-12 relative">
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
                            <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-5 text-white font-bold">Sign Up</button>
                        </div>

                        <div className="divider text-gray-400">Or Login With</div>
                        <SocialLogin></SocialLogin>

                        <div className='mt-3 text-center font-medium text-gray-500 text-lg'>
                            <p>Already have an account? <Link to='/login' className='text-blue-500 hover:text-green-500'>Login</Link></p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignUp;