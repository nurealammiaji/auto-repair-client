import Swal from "sweetalert2";

const CartDetails = ({ service }) => {

    const { _id, serviceName, serviceImage, servicePrice, serviceStatus, serviceDate, customerName, customerEmail, customerPhone } = service;

    const handleServiceDelete = (_id) => {
        fetch(`https://auto-repair-server.vercel.app/bookings/${_id}`, {
            method: "DELETE",
        })
            .then(result => {
                console.log(result);
                Swal.fire(
                    'Deleted !!',
                    'You deleted the service successfully',
                    'success'
                )
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleServiceUpdate = (_id) => {
        const booking = {
            serviceStatus: "Approved"
        };
        fetch(`https://auto-repair-server.vercel.app/bookings/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(result => {
                console.log(result);
                Swal.fire(
                    'Approved !!',
                    'You approved the service successfully',
                    'success'
                )
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <tr>
            <th>
                <button onClick={() => handleServiceDelete(_id)} className="btn btn-error btn-circle btn-sm tooltip tooltip-right" data-tip="Click to Delete">X</button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="w-20 rounded h-15">
                            <img src={serviceImage} alt="Service Image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">Date: {serviceDate}</div>
                    </div>
                </div>
            </td>
            <td>$ {servicePrice}</td>
            <td>
                {customerName}
                <br />
                <span className="badge badge-ghost badge-sm">{customerPhone}</span>
                <br />
                <span className="badge badge-ghost badge-sm">{customerEmail}</span>
            </td>
            <th>
                {
                    (serviceStatus === "Pending") ?
                        <button onClick={() => handleServiceUpdate(_id)} className="btn btn-sm tooltip" data-tip="Click to Approve">{serviceStatus}</button> :
                        <p className="text-green-600">{serviceStatus}</p>
                }
            </th>
        </tr>
    );
};

export default CartDetails;