export const ProductPageSizes = ({
    handleSelect,
    productData,
    selectedSize,
}) => {
    const getClassNameOfSizeButton = (sizeIndex) => {
        if (
            selectedSize &&
            productData.sizes[sizeIndex].size === selectedSize.size
        )
            return "catalog-item-size selected";
        else return "catalog-item-size";
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
                                  onClick={() => handleSelect(index)}
                                  key={index}
                              >
                                  {size.available ? size.size : ""}
                              </span>
                          ))
                        : ""}{" "}
                </p>
            </div>
        </>
    );
};
