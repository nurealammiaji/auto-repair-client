import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from '../components/Services/Services';
import Blog from "../components/Blog/Blog";
import Appointment from "../components/Appointment/Appointment";
import Contact from '../components/Contact/Contact';

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "about",
                element: <About></About>
            },
            {
                path: "services",
                element: <Services></Services>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "contact",
                element: <Contact></Contact>
            },
            {
                path: "appointment",
                element: <Appointment></Appointment>
            }
        ]
    }
])

export default routes;