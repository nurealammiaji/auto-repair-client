import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { PiHandbagLight, PiUserLight, PiSignOutLight, PiMagnifyingGlassLight, PiSignInLight } from "react-icons/pi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {

    const { user, bookings, logout } = useContext(AuthContext);

    const notify = () => {
        toast("Logout Successfully !!", {
            position: toast.POSITION.TOP_CENTER,
        });
    };

    const handleLogout = () => {
        logout();
        notify();
    }

    const menu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>

    return (
        <div>
            <ToastContainer />
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="p-0 mr-2 btn btn-sm btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
                            {menu}
                            <Link to="/appointment"><button className="mt-2 ml-2 btn btn-outline btn-warning btn-sm">Appointment</button></Link>
                        </ul>
                    </div>
                    <Link to="/">
                        <img className="w-[50px] md:w-[95px]" src={logo} alt="" />
                    </Link>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 text-lg font-semibold menu menu-horizontal">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        (user) ?
                            <>
                                <Link to="/user"><button className="p-0 m-1 btn btn-sm btn-ghost tooltip" data-tip="User Profile"><PiUserLight className="text-2xl" /></button></Link><Link to="/user"></Link>
                                <button onClick={handleLogout} className="p-0 m-1 btn btn-sm btn-ghost tooltip" data-tip="Logout"><PiSignOutLight className="text-2xl" /></button>
                            </> :
                            <Link to="/login"><button className="p-0 m-1 btn btn-sm btn-ghost tooltip" data-tip="Login"><PiSignInLight className="text-2xl" /></button></Link>
                    }
                    <Link to="/cart"><button className="p-0 m-1 btn btn-sm btn-ghost tooltip" data-tip="Cart"><PiHandbagLight className="text-2xl relative" />{(bookings?.length) ? <span className="absolute bottom-0 badge badge-success badge-xs">{bookings?.length}</span> : ''}</button></Link>
                    <Link to="/search"><button className="p-0 m-1 btn btn-sm btn-ghost tooltip" data-tip="Search"><PiMagnifyingGlassLight className="text-2xl" /></button></Link>
                    <Link to="/appointment"><button className="hidden ml-2 text-orange-500 border-orange-500 md:block btn btn-outline hover:text-white">Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;