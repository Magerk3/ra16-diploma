import { Link } from "react-router-dom";

export const ProductPageInCartButton = ({ handleClick, isSizeSelected }) => {
    return (
        <>
            {isSizeSelected ? (
                <Link to="/cart">
                    <button
                        onClick={handleClick}
                        className="btn btn-danger btn-block btn-lg"
                    >
                        В корзину
                    </button>
                </Link>
            ) : (
                <></>
            )}
        </>
    );
};
