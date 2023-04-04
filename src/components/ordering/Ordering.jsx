import { useDispatch, useSelector } from "react-redux";
import {
    selectOrderStatus,
    order,
    selectCartItems,
    changeOrderStatus,
} from "../../app/store/cartSlice";
import { Loader } from "../../staticPages/Loader";
import { OrderingSuccess } from "./OrderingSuccess";
import { OrderingForm } from "./OrderingForm";
import { completed, error, idle, ordering } from "../../statuses";
import { useNavigate } from "react-router-dom";
import { selectIsChecked, changeCheck } from "../../app/store/orderingSlice";
let CryptoJS = require("crypto-js");

export const Ordering = () => {
    const orderStatus = useSelector(selectOrderStatus);
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const isChecked = useSelector(selectIsChecked);
    const navigate = useNavigate();

    const handleSubmitOrderForm = (e) => {
        e.preventDefault();
        const phone = e.target.elements.phone.value;
        const address = e.target.elements.address.value;

        if (isChecked && phone && address) {
            console.log(phone, address);
            const encryptedPhone = CryptoJS.AES.encrypt(
                phone,
                "netology"
            ).toString();
            const encryptedAddress = CryptoJS.AES.encrypt(
                address,
                "netology"
            ).toString();
            dispatch(
                order({
                    phone: encryptedPhone,
                    address: encryptedAddress,
                    items: cartItems,
                })
            );
        }
    };

    const handleFormCheckChange = () => {
        dispatch(changeCheck());
    };

    const handleContinueShopingClick = () => {
        navigate("/");
        dispatch(changeOrderStatus(idle));
    };

    return (
        <>
            {orderStatus === idle ? (
                <OrderingForm
                    handleSubmit={handleSubmitOrderForm}
                    isChecked={isChecked}
                    handleCheck={handleFormCheckChange}
                />
            ) : orderStatus === ordering ? (
                <Loader />
            ) : orderStatus === completed ? (
                <OrderingSuccess handleClick={handleContinueShopingClick} />
            ) : orderStatus === error ? (
                <p>error</p>
            ) : (
                <></>
            )}
        </>
    );
};
