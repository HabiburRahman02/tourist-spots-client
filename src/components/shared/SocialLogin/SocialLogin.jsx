import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase/firebase.config";


const SocialLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className="flex items-center gap-3 justify-center">
            <div>
                <button
                    onClick={handleGoogleLogin}
                    className=" bg-emerald-500 hover:bg-emerald-600 px-10 py-4 text-white font-bold w-full">Google</button>
            </div>
            <div>
                <button className=" bg-green-500 hover:bg-green-600 px-10 py-4 text-white font-bold w-full">Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;