import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {

    const [services, setServices] = useState(null);

    useEffect(() => {
        fetch('https://auto-repair-server.vercel.app/services/')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div>
            <br />
            <div className="text-center">
                <h5 className="text-xl font-medium text-orange-500">Service</h5>
                <br />
                <h2 className="text-4xl font-semibold">Our Service Area</h2>
                <br />
                <p className="text-lg">the majority have suffered alteration in some form, by injected humour, or randomised<br />words which don't look even slightly believable. </p>
            </div>
            <br />
            <div>
                {
                    (!services) &&
                    <div className="text-center mt-5">
                        <button className="text-orange-600 btn btn-ghost">
                            <span className="loading loading-spinner"></span>
                            Loading
                        </button>
                    </div>
                }
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {
                    (services) &&
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div >
    );
};

export default Services;