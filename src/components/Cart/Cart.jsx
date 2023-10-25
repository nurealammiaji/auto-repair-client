import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';
import CartDetails from "../CartDetails/CartDetails";

const Cart = () => {

    const { bookings } = useContext(AuthContext);

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
                                (bookings) &&
                                    bookings.map(service => <CartDetails key={service._id} service={service}></CartDetails>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Cart;