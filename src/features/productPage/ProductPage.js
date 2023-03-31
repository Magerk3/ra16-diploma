import { useDebugValue, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
    selectPoductData,
    selectStatus,
    loadProductData,
    selectSize,
    selectChosenSize,
    selectQuantity,
    increaseQuantity,
    decreaseQuantity,
    emptyState
} from "./productPageSlice";
import { addToCart } from "../cart/cartSlice";

export const ProductPage = () => {
    const productData = useSelector(selectPoductData);
    const status = useSelector(selectStatus);
    const dispatch = useDispatch();
    const { prdId } = useParams();
    const [chosenSize, setChosenSize] = useState({});
    const selectedSizeInStore = useSelector(selectChosenSize);
    console.log(selectedSizeInStore)
    const quantity = useSelector(selectQuantity);

    //console.log(productData)
    const handleSizeSelect = (sizeIndex) => {
        dispatch(selectSize(sizeIndex));
       if (chosenSize.size === productData.sizes[sizeIndex].size) {
            setChosenSize({ size: "", available: false });
        } else setChosenSize(productData.sizes[sizeIndex]);
        
    };

    const getClassNameOfSizeButton = (sizeIndex) => {
        if (productData.sizes[sizeIndex].size === chosenSize.size)
            return "catalog-item-size selected";
        else return "catalog-item-size";
    };

    const handleAddToCartClick = () => {
        dispatch(addToCart({...productData, quantity: quantity, chosenSize: selectedSizeInStore}))
    }

    useEffect(() => {
        dispatch(loadProductData(prdId));
    }, [prdId]);
    useEffect(() => {
        return () => {
            dispatch(emptyState())
        }
    }, [])

    return (
        <section className="catalog-item">
            <h2 className="text-center">{productData.title}</h2>
            <div className="row">
                <div className="col-5">
                    <img
                        src={productData.images ? productData.images[0] : ""}
                        className="img-fluid"
                        alt=""
                    ></img>
                </div>
                <div className="col-7">
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>Артикул</td>
                                <td>
                                    {productData.sku ? productData.sku : ""}
                                </td>
                            </tr>
                            <tr>
                                <td>Производитель</td>
                                <td>
                                    {productData.manufacturer
                                        ? productData.manufacturer
                                        : ""}
                                </td>
                            </tr>
                            <tr>
                                <td>Цвет</td>
                                <td>
                                    {productData.color ? productData.color : ""}
                                </td>
                            </tr>
                            <tr>
                                <td>Материалы</td>
                                <td>
                                    {productData.material
                                        ? productData.material
                                        : ""}
                                </td>
                            </tr>
                            <tr>
                                <td>Сезон</td>
                                <td>
                                    {productData.season
                                        ? productData.season
                                        : ""}
                                </td>
                            </tr>
                            <tr>
                                <td>Повод</td>
                                <td>
                                    {productData.reason
                                        ? productData.reason
                                        : ""}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">
                        <p>
                            Размеры в наличии:{" "}
                            {productData.sizes
                                ? productData.sizes.map((size, index) => (
                                      <span
                                          className={getClassNameOfSizeButton(
                                              index
                                          )}
                                          onClick={() =>
                                              handleSizeSelect(index)
                                          }
                                      >
                                          {size.available ? size.size : ""}
                                      </span>
                                  ))
                                : ""}{" "}
                        </p>
                        {selectedSizeInStore ? <p>
                            Количество:{" "}
                            <span className="btn-group btn-group-sm pl-2">
                                <button className="btn btn-secondary" onClick={() => {dispatch(decreaseQuantity())}}>-</button>
                                <span className="btn btn-outline-primary">
                                    {quantity}
                                </span>
                                <button className="btn btn-secondary" onClick={() => {dispatch(increaseQuantity())}}>+</button>
                            </span>
                        </p> : <></>}
                        
                    </div>
                    {selectedSizeInStore ? <NavLink to='/cart'><button onClick={handleAddToCartClick} className="btn btn-danger btn-block btn-lg">
                       В корзину 
                    </button></NavLink> : <></>}
                    
                </div>
            </div>
        </section>
    );
};
