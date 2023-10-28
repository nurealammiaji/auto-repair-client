import { useLoaderData, useNavigate } from "react-router-dom";
import banner from "../../assets/images/checkout/checkout.png";
import Swal from 'sweetalert2';
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';

const Checkout = () => {

    const { user } = useContext(AuthContext);
    const service = useLoaderData();

    const { displayName, email, uid } = user;
    const { service_id, title, price, img } = service;

    const navigate = useNavigate();

    const handleCheckout = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceID = service_id;
        const serviceName = form.serviceName.value;
        const servicePrice = form.servicePrice.value;
        const serviceImage = img;
        const serviceDate = form.date.value;
        const serviceStatus = "Pending";
        const customerID = uid;
        const customerName = form.name.value;
        const customerPhone = form.phone.value;
        const customerEmail = form.email.value;
        const customerMessage = form.message.value;
        const booking = { serviceID, serviceName, serviceImage, servicePrice, serviceStatus, serviceDate, customerID, customerName, customerPhone, customerEmail, customerMessage };
        fetch('http://localhost:5000/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(booking)
        })
            .then(result => {
                console.log(result);
                if (result) {
                    Swal.fire(
                        'Booked !!',
                        'You booked the service successfully',
                        'success'
                    )
                    form.reset();
                    navigate("/cart", { replace: true });
                }
                else {
                    return;
                }
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div>
            <br /><br />
            <div className="relative">
                <img src={banner} className="w-full h-[80px] md:h-[300px]" alt="" />
                <div className="absolute top-0 bg-gradient-to-r from-black to-transparent w-full md:h-[300px] h-[80px] rounded-lg">
                </div>
            </div>
            <br /><br />
            <div className="w-full rounded-md shadow-2xl md:p-20 card bg-base-100">
                <form onSubmit={handleCheckout} className="bg-gray-100 rounded-lg card-body">
                    <br />
                    <div className="flex-row justify-between gap-5 md:flex">
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Service Name</span>
                            </label>
                            <input type="text" name="serviceName" defaultValue={title} className="input input-bordered" disabled />
                        </div>
                        <div className="w-full mt-4 form-control md:mt-0">
                            <label className="label">
                                <span className="label-text">Service Price</span>
                            </label>
                            <input type="text" name="servicePrice" defaultValue={price} className="input input-bordered" disabled />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row justify-between gap-5 md:flex">
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Service Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Select Date" className="input input-bordered" required />
                        </div>
                        <div className="w-full mt-4 form-control md:mt-0">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={displayName} placeholder="Your Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row justify-between gap-5 md:flex">
                        <div className="w-full form-control">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="w-full mt-4 form-control md:mt-0">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={email} placeholder="Your Email" className="input input-bordered" required />
                        </div>
                    </div>
                    <br />
                    <div className="w-full form-control">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea name="message" rows="4" placeholder="Your Message" className="p-4 border rounded-lg resize-y outline-0 focus:outline-transparent"></textarea>
                    </div>
                    <br />
                    <div className="mt-6 form-control">
                        <button type="submit" className="text-white bg-orange-600 btn hover:text-black">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;