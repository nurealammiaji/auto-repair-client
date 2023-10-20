import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {

    const serviceDetails = useLoaderData();
    const {img} = serviceDetails;
    console.log(serviceDetails);

    return (
        <div>
            <br /><br />
            <div>
                <img src={img} className="h-[300px] w-full" alt="" />
            </div>

        </div>
    );
};

export default ServiceDetails;