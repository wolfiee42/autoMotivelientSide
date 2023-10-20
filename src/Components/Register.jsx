import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovide";
import toast, { Toaster } from "react-hot-toast";


const Register = () => {
    const { createUser, logInByGoogle, updateUser } = useContext(AuthContext);
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\\-].*/;


        const hasCapitalLetter = /[A-Z]/.test(password);
        const isValidPassword = passwordRegex.test(password);
        if (password.length < 6){
            return toast.error("Password should have atleast 6 characters.")
        }
            if (!hasCapitalLetter) {
                return toast.error("Password should have atleast a capital letter.")
            }
        if (!isValidPassword) {
            return toast.error("Password should have atleast a special character.")
        }

        createUser(email, password)
            .then(result => {
                updateUser(name, image)
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

        form.reset();
    }

    const hangleGoogle = () => {
        logInByGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 pb-20">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl lg:text-5xl lg:mt-5 font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[350px]  lg:w-[500px] max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" placeholder="Your Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input type="text" placeholder="Your Image URL" name="image" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Your Password" name="password" className="input input-bordered" required />
                            <label className="label">
                                <span className="text-xs">Dont Have an Account? Please <Link to={'/login'} className="text-blue-700 font-bold link link-hover">Login</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn w-full bg-gray-700 hover:bg-gray-200 hover:text-black text-white">Register</button>
                        </div>
                    </form>
                    <div className="divider card-body max-w-lg">OR</div>
                    <div className="w-[280px] lg:w-[440px] mx-auto">
                        <button onClick={hangleGoogle} className="btn w-full bg-gray-700 hover:bg-gray-200 hover:text-black text-white mb-5">
                            <FcGoogle className="text-xl"></FcGoogle>
                            <span>Google</span>
                        </button>
                    </div>
                </div>
            </div>
            <Toaster position="bottom-center"
                reverseOrder={false} />
        </div>
    );
};

export default Register;