
import loginImg from '../../assets/login/login.jpg'
const Login = () => {
    return (
        <div className="lg:flex items-center gap-6 p-6 lg:px-24 bg-ray-100 min-h-screen bg-img">
            <div className="lg:w-1/2">
                <img src={loginImg} alt="" />
            </div>
            <div className="lg:w-1/2 bg-white shadow-2xl p-12">
                <div>
                    <div className="text-center space-y-1 mb-4">
                        <h3 className="text-4xl font-bold">Login</h3>
                        <p className="font-medium">Login into your pages account</p>
                    </div>
                    <form className="mb-6 ">
                        <div className="form-control mb-3">
                            <label className="label">
                                <span className="label-text text-lg text-gray-500">Email Address</span>
                            </label>
                            <input type="email" placeholder="ami@tmi.com" className="border-2 p-4" required />
                        </div>
                        <div className="form-control mb-12">
                            <label className="label">
                                <span className="label-text text-lg text-gray-500">Password</span>
                            </label>
                            <input type="password" placeholder="*********" className="border-2 p-4" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className=" bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-white font-bold">Login</button>
                        </div>

                        <div className="divider text-gray-400">Login With</div>
                        <div className="flex items-center gap-3 justify-center">
                            <div>
                                <button className=" bg-emerald-500 hover:bg-emerald-600 px-10 py-4 text-white font-bold w-full">Google</button>
                            </div>
                            <div>
                                <button className=" bg-green-500 hover:bg-green-600 px-10 py-4 text-white font-bold w-full">Github</button>
                            </div>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;