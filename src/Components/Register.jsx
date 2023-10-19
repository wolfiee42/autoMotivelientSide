import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div className="hero min-h-screen bg-base-200 pb-20">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl my-5 font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-[500px] max-w-lg shadow-2xl bg-base-100">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
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