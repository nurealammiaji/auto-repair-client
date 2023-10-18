import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { emailLogin, googleLogin } = useContext(AuthContext);

    return (
        <div>

        </div>
    );
};

export default Login;