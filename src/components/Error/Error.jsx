import { useRouteError } from "react-router-dom";
import errImg from "../../assets/images/error/404.png";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Error = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <>
            <NavBar></NavBar>
            <div className="text-center">
                {
                    (error) &&
                    <div>
                        <img className="w-6/12 mx-auto" src={errImg} alt="" />
                    </div>
                }
                <h3 className="text-2xl font-bold">{error.status}</h3>
                <h3 className="my-5 text-2xl font-bold">{error.statusText}</h3>
                <p className="text-xl font-medium">{error.data}</p>
            </div>
            <br /><br />
            <Footer></Footer>
        </>
    );
};

export default Error;