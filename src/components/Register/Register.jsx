import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import image from "../../assets/images/login/login.svg";
import { PiGoogleLogoFill, PiFacebookLogoFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Register = () => {

    const { emailRegister, googleLogin } = useContext(AuthContext);

    const destination = "/";
    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, photo, email, password, confirmPassword);
        if (password === confirmPassword) {
            emailRegister(email, password)
                .then(result => {
                    console.log(result)
                    const loggedUser = result.user;

                    updateProfile(loggedUser, {
                        displayName: name,
                        photoURL: photo,
                    })
                        .then(result => console.log(result))
                        .catch(error => console.error(error.message))

                    form.reset();
                    navigate(destination, { replace: true });
                })
                .catch(error => console.error(error.message))
        }
        else {
            return;
        }
    }

    const handleGoogleRegister = () => {
        googleLogin()
            .then(result => {
                console.log(result)
                navigate(destination, { replace: true });
            })
            .catch(error => console.error(error.message))
    }

    return (
        <div>
            <div className="min-h-screen">
                <div className="gap-5 md:p-10 md:flex">
                    <div className="w-full my-auto md:w-8/12">
                        <img src={image} alt="" />
                    </div>
                    <div className="w-full shadow-2xl md:w-8/12 card bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="text-center md:mb-10">
                                <h3 className="text-2xl font-semibold">Register</h3>
                            </div>
                            <br />
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="url" name="photo" placeholder="photo url" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirmPassword" placeholder="confirm password" className="input input-bordered" required />
                            </div>
                            <div className="mt-6 form-control">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                            <div className="mt-2 text-center">
                                <p className="w-4/12 mx-auto divider">or</p>
                                <small className="">Register with Social Accounts</small>
                                <div className="mt-3">
                                    <button onClick={handleGoogleRegister} className="p-0 btn btn-sm btn-ghost"><PiGoogleLogoFill className="mx-auto text-4xl" /></button>
                                    <button className="p-0 btn btn-sm btn-ghost"><PiFacebookLogoFill className="mx-auto text-4xl" /></button>
                                </div>
                                <div className="mt-5">
                                    <p>Have an account? <Link to="/login" className="font-medium text-orange-600 link">Login</Link> </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Register;