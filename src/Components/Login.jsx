import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/Authprovide";
import toast, { Toaster } from "react-hot-toast";


const Login = () => {

    const { logInUser } = useContext(AuthContext)


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        logInUser(email, password)
            .then(result => {
                console.log(result.user);
                if(result.user){
                    toast.success('Logged In Successfully!')
                }
            })
            .catch(error => {
                console.log(error.message);
                return toast.error(error.message);
            })


        form.reset();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-2xl lg:text-5xl lg:my-5 font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[350px] lg:w-[500px] max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <label className="label">
                                <span className="text-xs">Dont Have an Account? Please <Link to={'/register'} className="text-blue-700 font-bold link link-hover">Register</Link></span>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn w-full bg-gray-700 hover:bg-gray-200 hover:text-black text-white">Login</button>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster position="bottom-center"
                reverseOrder={false} />
        </div>
    );
};

export default Login;