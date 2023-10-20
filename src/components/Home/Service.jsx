import { PiArrowRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const Service = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div>
            <div className="w-full shadow-xl card bg-base-100">
                <figure className="px-10 pt-10">
                    <img src={img} alt="Service Image" className="h-[200px] rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="mx-auto card-title">{title}</h2>
                    <div className="flex items-center justify-between mt-5">
                        <p className="text-orange-600"><span className="font-medium">Price:</span> ${price}</p>
                        <div className="card-actions">
                            <Link to={`/services/${_id}`}><button className=" btn btn-sm"><PiArrowRightBold className="text-xl font-semibold text-orange-600" /></button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;