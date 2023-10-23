import { Link, NavLink, useLoaderData } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { PiArrowRightBold } from "react-icons/pi";

const ServiceDetails = () => {

    const serviceDetails = useLoaderData();

    const { _id, title, img, price, description, facility } = serviceDetails;

    const { services } = useContext(AuthContext);

    return (
        <div>
            <br /><br />
            <div className="relative">
                <img src={banner} className="w-full md:h-[300px] h-[80px]" alt="" />
                <div className="absolute top-0 bg-gradient-to-r from-black to-transparent w-full md:h-[300px] h-[80px] rounded-lg">
                </div>
            </div>
            <br /><br />
            <div className="grid md:grid-cols-3 gap-10">
                <div className="col-span-2">
                    <div>
                        <img src={img} className="rounded-lg" alt="" />
                    </div>
                    <br />
                    <div>
                        <h3 className="text-3xl font-semibold">{title}</h3>
                        <br />
                        <p className="text-lg text-justify">{description}</p>
                    </div>
                    <br />
                    <div className="grid md:grid-cols-2 gap-5">
                        {facility.map(f => <div key={f.name} className="p-2 rounded-lg border-t-orange-600 border-transparent border-2 bg-gray-100"><h4 className="text-lg font-medium">{f.name}</h4><p className="mt-2">{f.details}</p></div>)}
                    </div>
                </div>
                <div className="md:col-span-1 col-span-2">
                    <div className="bg-gray-100 py-8 px-5 rounded-lg">
                        <h4 className="font-bold text-2xl">Services</h4>
                        <br />
                        {
                            (services) ?
                                services.map(service => <NavLink to={`/services/${service._id}`} key={service._id} className={({isActive})=> isActive ? "btn w-full bg-orange-600 text-white my-1" : "btn w-full bg-white text-orange-600 hover:bg-orange-600 hover:text-white my-1" }><span className="">{service.title}</span> <PiArrowRightBold className="ml-auto font-semibold text-lg" /></NavLink>) :
                                <div className="text-center">
                                    <button className="text-orange-600 btn btn-ghost">
                                        <span className="loading loading-spinner"></span>
                                        Loading
                                    </button>
                                </div>
                        }
                    </div>
                    <br /><br />
                    <div>
                        <h3 className="text-2xl font-semibold">Price: ${price}</h3>
                        <br />
                        <Link to={`/checkout/${_id}`}><button className="btn w-full bg-orange-600 text-white hover:text-black">Proceed Checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;