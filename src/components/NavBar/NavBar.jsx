import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const NavBar = () => {

    const menu = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
                            {menu}
                            <Link to="/appointment"><button className="mt-2 ml-2 btn btn-outline btn-warning btn-sm">Appointment</button></Link>
                        </ul>
                    </div>
                    <Link to="/" className="text-xl normal-case btn btn-ghost">
                        <img className="w-[75px]" src={logo} alt="" />
                    </Link>
                </div>
                <div className="hidden navbar-center lg:flex">
                    <ul className="px-1 text-lg font-semibold menu menu-horizontal">
                        {menu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/appointment"><button className="hidden md:block btn btn-outline btn-warning">Appointment</button></Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;