import { useLoaderData } from "react-router-dom";
import img from "../../assets/images/services/1.jpg"

const ServiceDetails = () => {

    const serviceDetails = useLoaderData();
    console.log(serviceDetails);

    return (
        <div>
            <br /><br />
            <img src={img} alt="" />

        </div>
    );
};

export default ServiceDetails;