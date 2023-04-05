import { useCallback } from "react";

export const ProductPageSizes = ({
    handleSelect,
    productData,
    selectedSize,
}) => {
    const getClassNameOfSizeButton = useCallback(
        (sizeIndex) => {
            if (
                selectedSize &&
                productData.sizes[sizeIndex].size === selectedSize.size
            )
                return "catalog-item-size selected";
            else return "catalog-item-size";
        },
        [productData, selectedSize]
    );

    const sizes = useCallback(() => {
        return productData.sizes.map((size, index) => (
            <>
                {size.available === true ? (
                    <span
                        className={getClassNameOfSizeButton(index)}
                        onClick={() => handleSelect(index)}
                        key={index}
                    >
                        {size.size}
                    </span>
                ) : (
                    <></>
                )}
            </>
        ));
    }, [productData, getClassNameOfSizeButton, handleSelect]);
    return (
        <>
            <div className="text-center">
                <p>Размеры в наличии: {productData.sizes ? sizes() : ""}</p>
            </div>
        </>
    );
};
