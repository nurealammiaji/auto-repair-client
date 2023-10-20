import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const User = () => {

    const { user } = useContext(AuthContext);
    const {email, displayName, photoURL} = user;

    return (
        <div className="my-10">
            <div className="mx-auto shadow-xl card w-96 bg-base-100">
                <figure className="px-10 pt-10">
                    <img src={photoURL} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="items-center text-center card-body">
                    <h2 className="card-title">{displayName}</h2>
                    <p>{email}</p>
                    <br />
                    <div className="card-actions">
                        <button className="btn btn-primary">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;