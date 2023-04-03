import { useDispatch, useSelector } from "react-redux";
import { selectOrderStatus, order, selectCartItems } from "../../app/store/cartSlice";
import { Loader } from "../../staticPages/Loader";
import { OrderingSuccess } from "./OrderingSuccess";
import { OrderingForm } from "./OrderingForm";
import { completed, error, idle, ordering } from "../../statuses";
let CryptoJS = require("crypto-js");

export const Ordering = () => {
    const orderStatus = useSelector(selectOrderStatus);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleSubmitOrderForm = (e) => {
        e.preventDefault();
        const phone = e.target.elements.phone.value;
        const address = e.target.elements.address.value;
        console.log(phone, address);
        const encryptedPhone = CryptoJS.AES.encrypt(
            phone,
            "netology"
        ).toString();
        const encryptedAddress = CryptoJS.AES.encrypt(
            address,
            "netology"
        ).toString();
        console.log(typeof phone, typeof address);
        
        dispatch(
            order({
                phone: encryptedPhone,
                address: encryptedAddress,
                items: cartItems,
            })
        );
    };

    return (
        <>
            {orderStatus === idle ? (
                <OrderingForm handleSubmit={handleSubmitOrderForm} />
            ) : orderStatus === ordering ? (
                <Loader />
            ) : orderStatus === completed ? (
                <OrderingSuccess />
            ) : orderStatus === error ? (
                <p>error</p>
            ) : (
                <></>
            )}
        </>
    );
};
