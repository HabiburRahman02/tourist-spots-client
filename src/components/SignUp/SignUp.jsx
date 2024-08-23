
import { Link } from 'react-router-dom';
import signupImg from '../../assets/login/signup.jpg'
const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value
        const photoUrl = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value

        const user = { name, photoUrl, email, password };
        console.log(user)
    }
    return (
        <div className="lg:flex items-center gap-6 p-6 lg:px-24 bg-ray-100 min-h-screen bg-img">
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
                        <div className="form-control mb-12">
                            <label className="label">
                                <span className="label-text text-lg text-gray-500">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="*********" className="border-2 p-4" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-5 text-white font-bold">Sign Up</button>
                        </div>

                        <div className="divider text-gray-400">Or Login With</div>
                        <div className="flex items-center gap-3 justify-center">
                            <div>
                                <button className=" bg-emerald-500 hover:bg-emerald-600 px-10 py-4 text-white font-bold">Google</button>
                            </div>
                            <div>
                                <button className=" bg-green-500 hover:bg-green-600 px-10 py-4 text-white font-bold">Github</button>
                            </div>
                        </div>

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