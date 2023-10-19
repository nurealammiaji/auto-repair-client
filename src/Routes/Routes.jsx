import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Services from '../components/Services/Services';
import Blog from "../components/Blog/Blog";
import Appointment from "../components/Appointment/Appointment";
import Contact from '../components/Contact/Contact';
import Cart from "../components/Cart/Cart";
import Search from "../components/Search/Search";
import Login from "../components/Login/Login";
import Private from "./Private";
import Register from "../components/Register/Register";
import User from '../components/User/User';

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
                path: "cart",
                element: <Private><Cart></Cart></Private>
            },
            {
                path: "search",
                element: <Search></Search>
            },
            {
                path: "appointment",
                element: <Appointment></Appointment>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "user",
                element: <Private><User></User></Private>
            },
        ]
    }
])

export default routes;