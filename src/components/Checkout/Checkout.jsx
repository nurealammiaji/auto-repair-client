import banner from "../../assets/images/checkout/checkout.png";

const Checkout = () => {

    const handleCheckout = (event) => {
        event.preventDefault();
        const form = event.target;
        const serviceID = form.serviceID.value;
        const serviceTitle = form.serviceTitle.value;
        const ServiceDate = form.date.value;
        const customerName = form.name.value;
        const customerPhone = form.phone.value;
        const customerEmail = form.email.value;
        const customerMessage = form.message.value;
        const order = { serviceID, serviceTitle, ServiceDate, customerName, customerPhone, customerEmail, customerMessage };
        console.log(order);
        fetch('http://localhost:5000/checkout', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
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
            <div className="w-full shadow-2xl md:p-20 card rounded-md bg-base-100">
                <form onSubmit={handleCheckout} className="card-body bg-gray-100 rounded-lg">
                    <br />
                    <div className="flex-row md:flex justify-between gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Service ID</span>
                            </label>
                            <input type="text" name="serviceID" placeholder="Service ID" className="input input-bordered" disabled />
                        </div>
                        <div className="form-control w-full mt-4 md:mt-0">
                            <label className="label">
                                <span className="label-text">Service Title</span>
                            </label>
                            <input type="text" name="serviceTitle" placeholder="Service Title" className="input input-bordered" disabled />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row md:flex justify-between gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Service Date</span>
                            </label>
                            <input type="date" name="date" placeholder="Select Date" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full mt-4 md:mt-0">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                        </div>
                    </div>
                    <br />
                    <div className="flex-row md:flex justify-between gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Your Phone</span>
                            </label>
                            <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control w-full mt-4 md:mt-0">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                        </div>
                    </div>
                    <br />
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Your Message</span>
                        </label>
                        <textarea name="message" rows="4" placeholder="Your Message" className="border rounded-lg p-4 resize-y"></textarea>
                    </div>
                    <br />
                    <div className="mt-6 form-control">
                        <button type="submit" className="btn bg-orange-600 text-white hover:text-black">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;