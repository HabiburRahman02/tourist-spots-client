import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase/firebase.config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                navigate('/')
                console.log(result.user)
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