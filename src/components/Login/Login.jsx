import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import image from "../../assets/images/login/login.svg";
import { PiGoogleLogoFill, PiFacebookLogoFill } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {

    const { emailLogin, googleLogin } = useContext(AuthContext);

    const location = useLocation();
    const destination = location?.state?.from?.pathname || "/";
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        emailLogin(email, password)
        .then(result => {
            console.log(result)
            navigate(destination, {replace: true});
        })
        .catch(error => console.error(error.message))
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            console.log(result)
            navigate(destination, {replace: true});
        })
        .catch(error => console.error(error.message))
    }

    return (
        <div>
            <div className="min-h-screen">
                <div className="gap-5 md:p-10 md:flex">
                    <div className="w-full md:w-8/12">
                        <img src={image} alt="" />
                    </div>
                    <div className="w-full shadow-2xl md:w-8/12 card bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="text-center md:mb-10">
                                <h3 className="text-2xl font-semibold">Login</h3>
                            </div>
                            <br />
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
                            </div>
                            <div className="mt-6 form-control">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div className="mt-2 text-center">
                                <p className="w-4/12 mx-auto divider">or</p>
                                <small className="">Login with Social Accounts</small>
                                <div className="mt-3">
                                    <button onClick={handleGoogleLogin} className="p-0 btn btn-sm btn-ghost"><PiGoogleLogoFill className="mx-auto text-4xl" /></button>
                                    <button className="p-0 btn btn-sm btn-ghost"><PiFacebookLogoFill className="mx-auto text-4xl" /></button>
                                </div>
                                <div className="mt-5">
                                    <p>Need an account? <Link to="/register" className="font-medium text-orange-600 link">Register</Link> </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;