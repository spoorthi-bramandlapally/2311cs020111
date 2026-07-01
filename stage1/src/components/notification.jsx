import { useState } from "react";
import "./Notification.css";

function Notification() {

    const notifications = [
        "Payment Successful",
        "Order Delivered",
        "New Offer Available",
        "Recharge Completed",
        "Refund Processed",
        "Password Changed",
        "Profile Updated",
        "Delivery Delayed",
        "Coupon Added",
        "Account Verified",
        "Welcome Bonus",
        "Flash Sale Started",
        "Subscription Renewed",
        "Wishlist Updated",
        "New Message",
        "Security Alert",
        "Bank Transfer Complete",
        "Discount Coupon",
        "Order Shipped",
        "Festival Offer"
    ];

    const [count, setCount] = useState(5);

    return (

        <div className="container">

            <h1>Notification Center</h1>

            <label>Select Number of Notifications : </label>

            <select
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
            >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>

            <div>

                {notifications.slice(0, count).map((item, index) => (

                    <div className="card" key={index}>

                        <h3>Notification {index + 1}</h3>

                        <p>{item}</p>

                    </div>

                ))}

            </div>

        </div>

    );
}

export default Notification;