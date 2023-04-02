import { useSelector } from "react-redux";
import { selectPoductData } from "./productPageSlice";

export const ProductPageTable = () => {
    const productData = useSelector(selectPoductData);

    return (
       
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>Артикул</td>
                        <td>{productData.sku ? productData.sku : ""}</td>
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
                        <td>{productData.color ? productData.color : ""}</td>
                    </tr>
                    <tr>
                        <td>Материалы</td>
                        <td>
                            {productData.material ? productData.material : ""}
                        </td>
                    </tr>
                    <tr>
                        <td>Сезон</td>
                        <td>{productData.season ? productData.season : ""}</td>
                    </tr>
                    <tr>
                        <td>Повод</td>
                        <td>{productData.reason ? productData.reason : ""}</td>
                    </tr>
                </tbody>
            </table>
        
    );
};
