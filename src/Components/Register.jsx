import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovide";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const handleRegistration = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, image);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })

        form.reset();
    }

    return (
        <div className="hero min-h-screen bg-base-200 pb-20">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl my-5 font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[500px] max-w-lg shadow-2xl bg-base-100">
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
                        <div className="divider">OR</div>
                        <div>
                            <button className="btn w-full bg-gray-700 hover:bg-gray-200 hover:text-black text-white">
                                <FcGoogle className="text-xl"></FcGoogle>
                                <span>Google</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;