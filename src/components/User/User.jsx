import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const User = () => {

    const { user, logout } = useContext(AuthContext);
    const {email, displayName, photoURL} = user;

    const handleLogout = () => {
        logout()
    }

    return (
        <div className="my-10">
            <br /><br />
            <div className="mx-auto shadow-xl card w-full md:w-96 bg-base-100">
                <figure className="px-10 pt-10">
                    <img src={photoURL} alt="User Image" className="rounded-xl" />
                </figure>
                <div className="items-center text-center card-body">
                    <h2 className="card-title">{displayName}</h2>
                    <p>{email}</p>
                    <br />
                    <div className="card-actions">
                        <button onClick={handleLogout} className="btn btn-primary">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;