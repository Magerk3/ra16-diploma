import { useSelector } from "react-redux";
import { selectOrderStatus } from "../cart/cartSlice";
import { Loader } from "../../components/Loader";
import { OrderingSuccess } from "./OrderingSuccess";
import { OrderingForm } from "./OrderingForm";
import { completed, error, idle, ordering } from "../../statuses";

export const Ordering = () => {
    const orderStatus = useSelector(selectOrderStatus);

    return (
        <>
            {orderStatus === idle ? (
                <OrderingForm />
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
