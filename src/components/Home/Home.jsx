import AboutUs from "./AboutUs";
import Carousel from "./Carousel";
import Services from "./Services";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    return (
        <div>
            <ToastContainer />
            <br /><br />
            <Carousel></Carousel>
            <br /><br />
            <AboutUs></AboutUs>
            <br /><br />
            <Services></Services>
            <br /><br />
        </div>
    );
};

export default Home;