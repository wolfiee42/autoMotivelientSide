import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/Authprovide";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handlesignout = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }


    const links = <>
        <li><NavLink className="text-base font-semibold text-black" to={'/'}>Home</NavLink></li>
        <li><NavLink className="text-base font-semibold text-black" to={'/addproduct'}>Add Product</NavLink></li>
        <li><NavLink className="text-base font-semibold text-black" to={'/cartsection'}>My cart</NavLink></li>
        <li><NavLink className="text-base font-semibold text-black" to={'/login'}>Login</NavLink></li>
        <li><NavLink className="text-base font-semibold text-black" to={'/register'}>Register</NavLink></li>
    </>
    return (
        <div className="bg-gray-300 font-mono">
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link><img src="https://i.ibb.co/nM0TpP9/logo.png" className="w-20 h-20" alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-5">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <img className="w-12 h-12 rounded-[50%]" src={user.photoURL} alt="" />
                            <p className="mx-2 font-semibold">{user.displayName}</p>
                            <button onClick={handlesignout} className="btn">Sign Out</button>
                        </>
                            :
                            <Link to={'/login'} className="btn">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;