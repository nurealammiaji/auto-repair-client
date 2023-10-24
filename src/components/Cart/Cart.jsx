import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../../Provider/AuthProvider';
import CartDetails from "../CartDetails/CartDetails";

const Cart = () => {

    const { user } = useContext(AuthContext);

    const [services, setServices] = useState(null);

    const url = `http://localhost:5000/bookings?uid=${user?.uid}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    })

    return (
        <div>
            <br /><br />
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="text-sm">
                                <th>Delete</th>
                                <th>Service Name</th>
                                <th>Price</th>
                                <th>Customer Details</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                (services) &&
                                    services.map(service => <CartDetails key={service._id} service={service}></CartDetails>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;