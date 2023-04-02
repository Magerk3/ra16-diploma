import { useDispatch, useSelector } from "react-redux";
import { selectPoductData } from "./productPageSlice";
import { increaseQuantity, decreaseQuantity, selectSize } from "./productPageSlice";
import { selectChosenSize } from "./productPageSlice";
import { selectCount } from "./productPageSlice";

export const ProductPageSizes = () => {

    const selectedSize = useSelector(selectChosenSize);
    const productData = useSelector(selectPoductData);
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    const getClassNameOfSizeButton = (sizeIndex) => {
        if (selectedSize && productData.sizes[sizeIndex].size === selectedSize.size)
            return "catalog-item-size selected";
        else return "catalog-item-size";
    };

    const handleSizeSelect = (sizeIndex) => {
        dispatch(selectSize(sizeIndex));
    };
    return (
        <>
            <div className="text-center">
                <p>
                    Размеры в наличии:{" "}
                    {productData.sizes
                        ? productData.sizes.map((size, index) => (
                              <span
                                  className={getClassNameOfSizeButton(index)}
                                  onClick={() => handleSizeSelect(index)}
                                  key={index}
                              >
                                  {size.available ? size.size : ""}
                              </span>
                          ))
                        : ""}{" "}
                </p>
                {selectedSize ? (
                    <p>
                        Количество:{" "}
                        <span className="btn-group btn-group-sm pl-2">
                            <button
                                className="btn btn-secondary"
                                onClick={() => {
                                    dispatch(decreaseQuantity());
                                }}
                            >
                                -
                            </button>
                            <span className="btn btn-outline-primary">
                                {count}
                            </span>
                            <button
                                className="btn btn-secondary"
                                onClick={() => {
                                    dispatch(increaseQuantity());
                                }}
                            >
                                +
                            </button>
                        </span>
                    </p>
                ) : (
                    <></>
                )}
            </div>
        </>
    );
};
